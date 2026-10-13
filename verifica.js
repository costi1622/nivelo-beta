#!/usr/bin/env node
/*
 * Verificare completă Nivelo.
 *
 * Se rulează cu:  node verifica.js
 * din folderul care conține index.html și sw.js.
 *
 * Adună regulile învățate pe parcursul proiectului, ca să nu fie nevoie
 * să fie ținute minte. Fiecare secțiune a fost adăugată după un bug real.
 */
const fs = require('fs');

let PROBLEME = 0;
const ok = m => console.log('  \u2713 ' + m);
const rau = m => { console.log('  \u2717 ' + m); PROBLEME++; };
const titlu = t => console.log('\n\u2500\u2500 ' + t + ' \u2500\u2500');

const html = fs.readFileSync('index.html', 'utf8');
const sw = fs.readFileSync('sw.js', 'utf8');
const code = html.match(/<script>([\s\S]*?)<\/script>/g).map(s => s.replace(/<\/?script>/g, '')).join('\n');

console.log('\u2550\u2550\u2550\u2550 VERIFICARE NIVELO \u2550\u2550\u2550\u2550');

/* ---------- 1. structura ---------- */
titlu('Structură');
let e = 0;
html.match(/<script>([\s\S]*?)<\/script>/g).forEach(s => {
  try { new Function(s.replace(/<\/?script>/g, '')); } catch (err) { rau('JS: ' + err.message); e++; }
});
if (!e) ok('JavaScript: sintaxă validă');
try { new Function(sw); ok('Service worker: sintaxă validă'); } catch (err) { rau('SW: ' + err.message); }
try { JSON.parse(fs.readFileSync('manifest.webmanifest', 'utf8')); ok('Manifest: JSON valid'); }
catch (err) { rau('Manifest: ' + err.message); }

/* ---------- 2. versiuni coerente ---------- */
titlu('Coerența versiunilor');
const ver = (code.match(/APP_VER='(v[\d.]+)'/) || [])[1];
const perechi = {
  'subsol': (html.match(/Nivelo (v[\d.]+) \u00b7/) || [])[1],
  'subiect e-mail': (html.match(/Nivelo%20(v[\d.]+)%20/) || [])[1],
  'cache service worker': (sw.match(/CACHE = 'glucolog-(v[\d.]+)'/) || [])[1],
};
Object.entries(perechi).forEach(([k, v]) => {
  v === ver ? ok(k + ': ' + v) : rau(k + ': ' + v + ' (APP_VER e ' + ver + ')');
});

/* ---------- 3. lista de noutati ---------- */
titlu('Lista „Ce e nou"');
const nt = (code.match(/const NOUTATI=\[([\s\S]*?)\n\];/) || [])[1] || '';
const versiuni = [...nt.matchAll(/\{v:'(v[\d.]+)'/g)].map(m => m[1]);
versiuni.includes(ver)
  ? ok('versiunea curentă (' + ver + ') are intrare')
  : rau('versiunea curentă (' + ver + ') NU are intrare: actualizarea ar trece tăcut');

/* ---------- 4. invariante critice ---------- */
titlu('Invariante critice');
const inv = [
  ['cheia de date glucolog_v1 neatinsă', (html.match(/glucolog_v1/g) || []).length === 1],
  ['zero dialoguri native', (html.match(/[^h.]alert\(|[^h.]prompt\(|[^Sh.]confirm\(/g) || []).length === 0],
  ['politică de securitate a conținutului', html.includes('Content-Security-Policy')],
  ['manifest fără câmpul orientation', !fs.readFileSync('manifest.webmanifest', 'utf8').includes('orientation')],
  ['service worker fără cache.addAll', !sw.replace(/\/\/[^\n]*/g, '').replace(/\/\*[\s\S]*?\*\//g, '').includes('.addAll(')],
  ['service worker nu atinge manifestul', !sw.includes('webmanifest') || sw.includes('endsWith')],
  ['anularea restaurării prezentă', code.includes('IDB_PREV') && code.includes('undoRestore')],
  ['a doua copie locală (IndexedDB)', code.includes('IDB_NAME')],
  ['paginare istoric', code.includes('HIST_SHOWN')],
];
inv.forEach(([n, v]) => v ? ok(n) : rau(n));

/* ---------- 5. functii chemate din HTML ---------- */
titlu('Funcții chemate din HTML');
const def = new Set();
[...code.matchAll(/function\s+([A-Za-z_$][\w$]*)\s*\(/g)].forEach(m => def.add(m[1]));
[...code.matchAll(/(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*(?:async\s*)?(?:\([^)]*\)|[A-Za-z_$][\w$]*)\s*=>/g)].forEach(m => def.add(m[1]));
const nat = new Set(['if', 'for', 'while', 'switch', 'catch', 'return', 'typeof', 'new', 'parseInt', 'parseFloat', 'Number', 'String', 'Math', 'JSON', 'Date', 'setTimeout']);
let lipsa = 0, nr = 0;
[...html.matchAll(/on(?:click|input|change)="([^"]+)"/g)].forEach(m => {
  [...m[1].matchAll(/(?:^|[^.\w$])([A-Za-z_$][\w$]*)\s*\(/g)].forEach(f => {
    const n = f[1];
    if (nat.has(n)) return;
    nr++;
    if (!def.has(n)) { rau(n + '() chemat din HTML dar nedefinit'); lipsa++; }
  });
});
if (!lipsa) ok('toate funcțiile chemate din HTML există (' + nr + ' apeluri)');

/* ---------- 6. elemente cerute cu $() ---------- */
titlu('Elemente din interfață');
const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map(m => m[1]));
const cerute = [...new Set([...code.matchAll(/\$\('([^']+)'\)/g)].map(m => m[1]))];
const fara = cerute.filter(i => !ids.has(i) && !new RegExp('id=.' + i).test(code));
fara.length ? fara.forEach(i => rau('elementul „' + i + '" e cerut dar nu există nicăieri'))
            : ok('toate cele ' + cerute.length + ' elemente cerute există');

/* ---------- 7. tipuri de evenimente pe toate caile ---------- */
titlu('Tipurile de evenimente pe toate căile');
const TR = (html.match(/const TYPE_RO=\{([^}]+)\}/) || [])[1] || '';
const tipuri = [...TR.matchAll(/(\w+):'/g)].map(m => m[1]);
const cai = ['function evText(', 'function eventCard(', 'function evRows(', 'const evLine=e=>{'];
let gol = 0;
cai.forEach(c => { if (!code.includes(c)) { rau('calea „' + c + '" nu a fost găsită'); gol++; } });
if (!gol) ok('cele 4 căi de randare există (' + tipuri.length + ' tipuri: ' + tipuri.join(', ') + ')');
/* Fiecare tip cu conținut propriu (tot ce nu e notă/activitate, care cad pe ramura
   implicită) trebuie numit explicit pe fiecare cale. Regula scrisă după v1.45, când
   patru bug-uri aveau aceeași rădăcină: un tip nou uitat pe una dintre căi. Până acum
   regula era doar în DOCUMENTATIE; acum e verificată. */
const corpDe = (inceput) => {
  const i = code.indexOf(inceput); if (i < 0) return '';
  let d = 0, k = code.indexOf('{', i);
  for (; k < code.length; k++) { if (code[k] === '{') d++; else if (code[k] === '}') { d--; if (!d) break; } }
  return code.slice(i, k + 1);
};
const caiTip = ['function evText(', 'function eventCard(', 'function evRows(', 'const evLine=e=>{', 'function okNote(', 'function importCSV('];
const proprii = tipuri.filter(t => t !== 'note' && t !== 'act');
const uitate = [];
proprii.forEach(t => caiTip.forEach(c => { if (!corpDe(c).includes("'" + t + "'")) uitate.push(t + ' în ' + c.replace(/[({]|=e=>/g, '').trim()); }));
// okNote se ocupă doar de tipurile din fereastra „Altele"
const uitateReal = uitate.filter(u => !/^(gluc|ins|meal) în function okNote/.test(u));
uitateReal.length ? uitateReal.forEach(u => rau('tipul ' + u + ' lipsește'))
                  : ok('fiecare tip e numit pe fiecare cale (' + proprii.join(', ') + ')');
const SCH = corpDe('const EV_SCHEMA={');
const faraSchema = tipuri.filter(t => !new RegExp('\\b' + t + '\\s*:').test(SCH));
faraSchema.length ? rau('tipuri fără validare în EV_SCHEMA: ' + faraSchema.join(', '))
                  : ok('fiecare tip are validare în EV_SCHEMA');
// niciuna nu trebuie sa presupuna ca un tip necunoscut are nota
code.includes('e.note.text;') && !code.includes('e.note ? e.note.text')
  ? rau('undeva se citește e.note.text fără verificare: un tip nou ar rupe calea aceea')
  : ok('niciun loc nu presupune că un tip necunoscut are notă');

/* ---------- 8. ordinea declaratiilor fata de `let S = load()` ---------- */
/* Capcana care a prins de doua ori la v1.99: `let S = load()` se executa foarte devreme,
   dar functiile sunt ridicate automat, deci load() poate chema orice. Un `const` sau un
   `let` declarat MAI JOS nu e insa disponibil: atingerea lui arunca ReferenceError.
   Prima data, tabelele formatului compact erau declarate langa codor, deci jurnalul
   compact aparea ca „structura necunoscuta" si aplicatia pornea goala pe date bune.
   A doua oara, steagul JURNAL_IN_IDB era declarat langa load(), deci TOT scriptul murea.
   Amandoua tacute, amandoua catastrofale. Deci: verificat mecanic, la fiecare urcare. */
titlu('Ordinea declarațiilor la pornire');
const linii = code.split('\n');
const lS = linii.findIndex(l => /^let S = load\(\);/.test(l));
if (lS < 0) rau('nu am găsit `let S = load();` — verificarea de ordine nu se poate face');
else {
  const corp = (nume) => {
    const i = code.indexOf('function ' + nume + '(');
    if (i < 0) return '';
    let d = 0, k = code.indexOf('{', i);
    for (; k < code.length; k++) { if (code[k] === '{') d++; else if (code[k] === '}') { d--; if (!d) break; } }
    return code.slice(i, k + 1);
  };
  // lantul pe care load() il parcurge la pornire
  const lant = ['load', 'undeStaJurnalul', 'interpreteaza', 'decodeaza', 'freshState', 'evValid', 'separaInvalide'];
  const atinse = new Set();
  lant.forEach(f => {
    const c = corp(f);
    (c.match(/\b[A-Z][A-Z0-9_]{2,}\b/g) || []).forEach(x => atinse.add(x));
    (c.match(/\b[A-Z][A-Za-z0-9]*_[A-Za-z0-9_]+\b/g) || []).forEach(x => atinse.add(x));
  });
  let tdz = 0;
  [...atinse].forEach(n => {
    const idx = linii.findIndex(l => new RegExp('^(const|let|var)\\s+' + n + '\\b').test(l));
    if (idx >= 0 && idx > lS) { rau(n + ' e atins de load() dar declarat mai jos (linia ' + (idx + 1) + ' față de ' + (lS + 1) + '): aruncă la pornire'); tdz++; }
  });
  if (!tdz) ok('tot ce atinge load() e declarat înaintea lui (' + atinse.size + ' verificate)');
}

/* ---------- 9. formatul de stocare ---------- */
titlu('Formatul de stocare');
code.includes('function codeaza(') && code.includes('function decodeaza(')
  ? ok('codorul și decodorul formatului compact există')
  : rau('lipsește codeaza() sau decodeaza()');
// fiecare tip din TYPE_RO trebuie sa aiba drum si la ducere, si la intoarcere
const COD = (code.match(/const EV_COD=\{([^}]+)\}/) || [])[1] || '';
const codTipuri = [...COD.matchAll(/(\w+):/g)].map(m => m[1]);
// tipurile din EV_BRUT merg intenționat pe drumul „['?', intrare]", în forma întreagă
const BRUT = (code.match(/const EV_BRUT=\{([^}]*)\}/) || [])[1] || '';
const brutTipuri = [...BRUT.matchAll(/(\w+):/g)].map(m => m[1]);
const lipsaCod = tipuri.filter(t => !codTipuri.includes(t) && !brutTipuri.includes(t));
lipsaCod.length
  ? rau('tipuri fără loc în formatul compact: ' + lipsaCod.join(', ') + ' — s-ar pierde la salvare')
  : ok('toate cele ' + tipuri.length + ' tipuri au drum în formatul compact' + (brutTipuri.length ? ' (' + brutTipuri.join(', ') + ' în forma întreagă)' : ''));
// un tip „brut" nu are voie să aibă și cod numeric: codorul l-ar scrie compact, iar o
// versiune veche l-ar arunca la citire
const dublu = brutTipuri.filter(t => codTipuri.includes(t));
dublu.length ? rau('tipuri și în EV_COD, și în EV_BRUT: ' + dublu.join(', '))
             : ok('niciun tip păstrat întreg nu are și cod numeric');
code.includes("o[0]==='?'")
  ? ok('un tip necunoscut e păstrat ca atare, nu aruncat')
  : rau('formatul compact nu are plasă pentru un tip necunoscut');

/* ---------- rezultat ---------- */
console.log('\n' + '\u2550'.repeat(28));
console.log(PROBLEME ? '\u2717 ' + PROBLEME + ' probleme de rezolvat' : '\u2713 Totul e în regulă.');
process.exit(PROBLEME ? 1 : 0);
