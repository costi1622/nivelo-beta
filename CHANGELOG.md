# Nivelo — Changelog

Istoricul versiunilor, de la primul prototip la versiunea curentă.
Format: cele mai noi versiuni sus.

---

## v1.27 — 24 iulie 2026 *(beta)*
**Rafinări la textele din „Mai mult", plus adresele GitHub actualizate**

Feedback direct de pe versiunea instalată, aplicat în același loc.

- **URL-urile GitHub actualizate peste tot.** Repo-ul stabil a fost redenumit `Glucolog` → `nivelo-beta-stabil` (adresa live: `costi1622.github.io/nivelo-beta-stabil/`), dar în cod mai era referit sub numele vechi în trei locuri: antetul de licență, secțiunea „Contact și cod" din Despre, și nota despre codul public de la sfârșitul „Promisiuni". Toate schimbate. **Rămân neatinse intenționat**, ca și până acum, cheile interne `glucolog_v1` (localStorage) și `glucolog-v1.27` (cache SW) — schimbarea lor ar goli datele testerilor.
- **Ghidul rapid, rescris pentru citit.** Textul curgea într-o bandă lungă în fiecare cartonaș, greu de urmărit. Acum e împărțit în paragrafe scurte, cu o idee pe rând: cadranul, apoi butoanele, apoi cronologia. Toate cele cinci secțiuni au aceeași structură — o frază de rezumat sus, apoi două-trei paragrafe scurte cu detaliile. Punctuația e adusă la zi (en-dash pentru intervale, virgule în locul liniilor obosite). Cele „3 lucruri de reținut" au titluri clare în bold, aliniate paralel.
- **Textul de la „Trimite feedback" rescris în vocea autorului.** Erau propoziții impersonale („se deschide clientul tău de e-mail", „autorul e o singură persoană"). Acum vorbesc direct, cald, cu ideile în ordinea în care le pune omul în cap: ce se întâmplă când apeși butonul, ce e cu contextul tehnic, ce așteptări ai la răspuns. Și mesajul precompletat e mai puțin sec: „Scrie aici ce vrei să-mi zici: o problemă, o idee sau o observație. Orice mă ajută."
- **Textul emailului precompletat**, mai simplu la sfârșit („Detalii tehnice", nu „Context tehnic util pentru diagnostic").
- **Legendă în raportul pentru medic.** Sus, imediat sub antet, o cheie compactă care explică termenii dintr-o privire (tipic, jumătatea din mijloc, extreme, nr. observații, în țintă, HbA1c estimat). Până acum definițiile erau împrăștiate sub fiecare tabel; acum medicul le are pe toate din prima.
- **Jargon statistic scos, limbaj simplu peste tot.** „percentilele 25–75" devine „zona în care se încadrează jumătatea din mijloc a valorilor"; „corecții eligibile" devine „corecții care intră în calcul". Termenul „mediană" rămâne, dar mereu însoțit de „tipic". Raportul e citit întâi de pacient, nu doar de medic, deci trebuie să fie pe înțelesul oricui.
- **Consecvență la confirmări.** „Backup restaurat cu succes" devine „Backup restaurat", ca toate toast-urile de succes să aibă același tipar (obiect + participiu).
- **Ghid de voce și ton** (document nou, `Nivelo_Ghid_Voce.md`). Definește cele două registre ale aplicației (vocea autorului la persoana I pentru Despre / Promisiuni / feedback / consimțământ; vocea-ghid la persoana a II-a pentru restul), regulile de punctuație și convențiile pe tip de mesaj. Scopul: textele să sune ca o singură persoană pe toate ecranele, acum și la orice ecran adăugat în viitor.

## v1.26 — 24 iulie 2026 *(beta)*
**Credibilitate: „Despre" reorganizat, „Promisiunile mele", buton de feedback**

Un pas mare pe capitolul unde produsul e cel mai nedreptățit față de calitatea reală a codului. Nu se adaugă funcții noi, se semnalează cine e în spate, ce garantează și cum poți lua legătura.

- **„Ce este (și ce nu este) Nivelo" reorganizat.** În loc de un text seac, patru cartonașe cu chip uman: cum s-a născut proiectul (dintr-un Excel personal, pentru cineva apropiat care nu se putea obișnuiește cu el), cui folosește, ce NU face aplicația (cu accent vizual pe „nu e un dispozitiv medical" și „112 în urgență"), contact și cod. Numele autorului, adresa reală, URL-ul GitHub sunt la vedere ca dovadă de paternitate.
- **„Promisiunile mele" — un manifest cinstit.** Două liste, deschise: **ce îți promit** (datele rămân locale, fără abonament, fără cont, fără urmărire, cifre oneste — folosim mediana nu media, răspuns la e-mail, feedback ajuns în cod) și **ce NU îți promit** (nu îți spun ce doze să faci, nu înlocuiește medicul, memento-urile sunt imperfecte, nu sincronizez între telefoane, doar română deocamdată, nu am o companie în spate). Rar în categorie — cel mai apropiat lucru pe care îl fac liderii pieței e o pagină de „valori" corporativă. Aici e o promisiune personală semnată de autor.
- **Buton „Trimite feedback"** în Mai mult. Deschide clientul de e-mail către `hello.nivelo@gmail.com` cu subiect precompletat (versiune) și un template pentru mesaj. La sfârșit, patru rânduri de context tehnic (versiune, dispozitiv, număr intrări, existența unui backup) — utile pentru diagnostic dacă e o problemă reală, dar fără date personale din jurnal. Utilizatorul e prevenit că le poate șterge dacă preferă și că răspunsul poate lua câteva zile („autorul e o singură persoană").
- **Ordinea din secțiunea „Despre & informații legale"** curge natural: ce este → ce promit → confidențialitate → ghid rapid → trimite feedback → diagnostic tehnic.

**Efectul cel mai important e cu totul altul decât cel evident**: prin faptul că e scrisă limpede lista limitelor („nu îți garantez memento-uri fiabile", „nu am o companie în spate"), aplicația câștigă mai multă încredere decât ar câștiga cu orice promisiune de marketing. E o poziționare pe care rareori o vezi.

## v1.25 — 23 iulie 2026 *(beta)*
**Onboarding: ghid reluabil & listă de pornire**

Aplicația arăta bine imediat ce omul o folosea des; problema era că nu-l ducea până acolo. După consimțământ, setări și mini-tur, utilizatorul nou era lăsat pe un ecran gol, cu turul deja consumat și fără cale înapoi la ce a citit. Două schimbări atacă exact această gaură.

- **Ghid rapid, oricând,** în Mai mult → Ghid rapid. Cele 5 secțiuni ale aplicației, scrise pe scurt, cu cele 3 lucruri de reținut la final. E același conținut ca al ghidului PDF, dar în aplicație — deci accesibil când chiar ai nevoie de el, nu doar când îți amintești de PDF. Turul de la început rămâne neschimbat.
- **„Cei 4 pași de început", pe ecranul Azi.** O listă mică, sub cadran: notează prima glicemie · adaugă un aliment pe care îl mănânci des · logează prima masă · fă primul backup. Fiecare pas are un buton „Adaugă →" care sare direct unde trebuie. Se bifează pe măsură ce completezi, iar la 4 din 4 dispare singură. Rațiunea: momentul în care Nivelo devine util e prima masă logată în câteva atingeri — chiar criteriul cu care a pornit proiectul. Lista îl aduce în față, nu-l lasă să apară din întâmplare.
- **„×" pentru ascundere, cu confirmare.** Cine nu vrea lista o poate închide. Confirmarea îi spune că o poate relua din Mai mult → Ghid rapid.
- **Utilizatorii existenți nu sunt deranjați.** Cine avea deja măcar 5 evenimente în jurnal când versiunea a ajuns la el nu vede lista niciodată — s-ar cere pași de „început" cuiva care e deja pe drum.

## v1.24 — 23 iulie 2026 *(beta)*
**Mărimea textului & linia „Dispozitiv", acum corectă**
- **Patru mărimi de text** în Setări: Normal, Mare, Foarte mare, Maxim. Se scalează textul din jurnal, statistici, ferestre și rapoarte. Bara de sus și butoanele de jos rămân la dimensiune fixă, ca să nu acopere conținutul. Motivul e practic: retinopatia diabetică e frecventă, iar mulți utilizatori ai unei aplicații de diabet au vederea slăbită — pentru ei nu e un moft, ci condiția de a putea folosi aplicația.
- **BUG: linia „Dispozitiv" arăta date false.** Afișa „Android 10" și un model inexistent pe un telefon cu Android 15. Cauza nu era la noi: din motive de confidențialitate, Chrome pe Android **îngheață intenționat** aceste date și raportează mereu Android 10 și modelul „K", indiferent de telefon. Codul citea corect un șir fals prin construcție.
- Aplicația cere acum datele reale prin interfața dedicată a browserului, care le oferă la cerere: rezultatul e „Android 15 · Google Chrome 138 · ANY-LX2". Acolo unde datele reale nu se pot obține, scrie cinstit „Android (versiune ascunsă de browser)" în loc să afișeze o versiune inventată.

## v1.23 — 23 iulie 2026 *(beta)*
**Butonul „înapoi" al telefonului & linia de dispozitiv, citibilă**
- **Butonul „înapoi" închide acum fereastra deschisă, nu aplicația.** Reflexul e firesc: intri într-o fereastră, apeși „înapoi" ca să ieși din ea. Până acum asta scotea omul din aplicație. Funcționează pentru toate ferestrele, inclusiv cele suprapuse: dacă ai o confirmare peste foaia unui aliment, primul „înapoi" închide confirmarea, al doilea foaia, al treilea iese din aplicație. Închiderea din buton rămâne neschimbată și lasă istoricul curat.
- **Ecranul de consimțământ face excepție intenționat** — e o poartă, nu o fereastră; „înapoi" nu o ocolește.
- **Politica de confidențialitate completă se deschide acum în aplicație**, nu într-o filă nouă. Asta era cauza reală pentru care „înapoi" te scotea afară de acolo: fila nouă nu are unde să se întoarcă.
- **Linia „Dispozitiv" din diagnostic era o înșiruire de nume istorice** (Mozilla, AppleWebKit, KHTML, Gecko, Safari...) din care nu se înțelegea nimic. Acum arată doar ce contează: sistem, browser și model — de exemplu „Android 13 · Chrome 120 · ANY-LX1" sau „iOS 17.5 · Safari · iPhone". Verificat pe Honor, iPhone, Xiaomi, Samsung și desktop.

## v1.22 — 23 iulie 2026 *(beta)*
**Rapoartele medicale: un bug real reparat și statistici corect alese**

Cifrele din raport au fost verificate una câte una, rulând calculele pe istoricul complet (12.804 evenimente), pe toate cele trei perioade.

- **BUG reparat — corecțiile pe zi erau umflate.** Zilele fără nicio corecție erau eliminate din calcul, fiindcă filtrul arunca valorile zero. Rezultatul: raportul arăta „tipic 1,5 corecții pe zi" când realitatea era 1,22, iar cele 22 de zile fără nicio corecție (din 90) dispăreau complet. Într-un raport dus la medic, asta descrie pacientul ca fiind mai instabil decât e. Zilele fără corecții intră acum în calcul, așa cum trebuie.
- **Min–max înlocuit cu statistici robuste.** Vechea prezentare „16–38 U" sau „36,2–304,6 HC" era corectă aritmetic, dar aproape inutilă: extremele sunt dominate de o singură zi neobișnuită. Fiecare indicator arată acum **tipicul (mediana)**, **jumătatea din mijloc a observațiilor (percentilele 25–75)**, extremele **separat**, și **numărul de observații** pe care se sprijină cifra. Exemplu real: bazala, care apărea ca „16–38 U", devine „tipic 19 U · jumătatea zilelor 18–19 · extreme 16–19 · n=89".
- **Semnalarea zilelor cu doze duble de bazală.** Dacă o zi are două doze de bazală notate, totalul ei apare însumat și strică extremele. Raportul semnalează acum aceste zile, cu dată, ca să poată fi verificate în Istoric. Asta explica valoarea de 38 U.
- **„Măsurători / zi" spune acum explicit „pe zi cu date"** — numitorul e numărul de zile în care s-a notat ceva, nu zilele calendaristice.
- **Secțiunea ICR și ISF, rescrisă.** Coloanele „Interval" și „Mese" nu spuneau ce conțin. Acum: „Tipic (mediană)", „Jumătatea meselor", „Extreme", „Nr. perechi", fiecare cu explicație. E descrisă și metoda: cum se formează perechile masă+bolus (la cel mult 25 de minute distanță), ce mese sunt excluse, și de ce extremele sunt de citit cu rezervă.
- **ISF explicat pentru medic.** Se spune limpede ce înseamnă o corecție „eligibilă": glicemie măsurată în cele 30 de minute dinainte, alta la 2–4 h după, și nicio masă sau alt bolus între ele — altfel scăderea nu poate fi atribuită corecției. Asta explică de ce numărul de corecții eligibile e mult mai mic decât totalul.
- **Verificat pe 30/90/180 de zile:** ferestrele de timp, zilele complete și agregările produc valori corecte și coerente pe toate cele trei perioade.

## v1.21 — 23 iulie 2026 *(beta)*
**Diagnostic mai bogat**
*(O iconiță nouă a fost proiectată și testată în această versiune, dar respinsă: cea originală comunica mai bine. Rămâne iconița existentă.)*
- **Diagnostic tehnic, patru completări:**
  - **Versiune în cache** — arată ce versiune ține service worker-ul. Dacă diferă de cea a aplicației, înseamnă că a rămas cod vechi; până acum asta se descoperea doar prin ghicit.
  - **Spațiu folosit** din cel disponibil — util mai ales pe iPhone, unde cota e mică, iar jurnalul crește cu anii.
  - **Dispozitiv** — ce browser și ce telefon, ca să nu mai fie nevoie să întrebi.
  - **Buton „Copiază raportul"** — testerul copiază tot și îți trimite dintr-o mișcare. Dacă browserul nu dă acces la clipboard, raportul se afișează ca text selectabil.

## v1.20.6 — 23 iulie 2026 *(beta)*
**Ecran de diagnostic & service worker-ul nu mai atinge manifestul**
- **Diagnostic tehnic**, în „Mai mult → Despre": arată starea reală a instalării — service worker activ sau nu, manifest valid sau cu ce lipsește, dacă iconițele chiar se descarcă, conexiune securizată, stocare persistentă, versiune. Rândurile problematice apar cu roșu, iar la final e un verdict. Util și pentru testeri: „deschide Diagnostic și trimite-mi ce scrie" înlocuiește zece întrebări.
- **Service worker-ul nu mai interceptează manifestul deloc.** Din v1.15.1 îl serveam „din rețea, cu cache ca rezervă", ca să nu rămână o versiune veche înțepenită. Dar dacă rețeaua eșua și nu exista copie în cache, se răspundea cu „nimic", iar cererea manifestului eșua complet — exact genul de situație în care Chrome refuză instalarea și oferă doar „Create shortcut". Manifestul e acum lăsat integral în seama browserului (scos și din lista de fișiere puse în cache): offline nu e necesar oricum, fiindcă la instalare ești conectat.
- Versiunea aplicației e ținută acum într-o singură constantă în cod (`APP_VER`), folosită de ecranul de diagnostic.

## v1.20.5 — 23 iulie 2026 *(beta)*
**Service worker-ul nu mai cade dacă lipsește un fișier**
- Instalarea service worker-ului folosea `cache.addAll`, care este **totul-sau-nimic**: dacă un singur fișier din listă lipsea sau dădea eroare, întreaga instalare eșua și **niciun service worker nu se activa**. Fără service worker activ, Chrome nu mai oferă „Instalează aplicația", ci doar „Create shortcut" — adică o simplă scurtătură, nu o aplicație instalată.
- Riscul era real pentru repo-ul beta, unde `privacy.html` poate lipsi (e un fișier necesar doar în repo-ul principal).
- Acum fișierele se pun în cache unul câte unul, iar eșecurile individuale sunt tolerate: aplicația se instalează și funcționează offline chiar dacă un fișier secundar lipsește.

## v1.20.4 — 23 iulie 2026 *(beta)*
**Aplicația respectă din nou blocarea rotirii din telefon**
- **BUG introdus chiar de reparația din v1.15:** aplicația se rotea și când utilizatorul avea rotirea automată **dezactivată** din setările telefonului.
- Cauza: ca să deblocăm rotirea, pusesem `"orientation": "any"` în manifest. Pare inofensiv, dar pe Android o declarație explicită de orientare se traduce într-un atribut al aplicației care **ignoră blocarea rotirii din sistem**. Practic înlocuisem o forțare pe portret cu o forțare a rotirii — la fel de greșit, doar în cealaltă direcție.
- Corect este să **nu existe** deloc câmpul `orientation`: atunci aplicația urmează comportamentul implicit al sistemului, adică respectă setarea utilizatorului. Câmpul a fost eliminat.
- Adaptarea vizuală pentru ecran culcat (bare comprimate, statistici pe trei coloane) rămâne — e utilă când chiar rotești, cu rotirea automată pornită.
- **De reținut: `"orientation": "any"` NU înseamnă „lasă sistemul să decidă". Înseamnă „forțează suportul pentru orice orientare".** Ca să lași sistemul să decidă, omiți câmpul.

## v1.20.3 — 23 iulie 2026 *(beta)*
**Două bug-uri și două texte aerisite**
- **BUG: pagina de dedesubt se derula cât timp o foaie era deschisă.** Se vedea clar la „Ce este (și ce nu este) Nivelo" și la „Confidențialitate": puteai derula conținutul din spate în timp ce citeai foaia. Acum pagina se blochează cât timp orice foaie e deschisă, iar la închidere revii exact în punctul în care erai. Folosit `position:fixed` cu reținerea poziției, nu doar `overflow:hidden`, pentru că pe iOS acesta din urmă nu ține. Tratat corect și cazul foilor suprapuse: închiderea celei de deasupra nu deblochează pagina cât timp cea de dedesubt e încă deschisă.
- **BUG: un refresh te arunca înapoi la Azi**, indiferent unde erai. Aplicația reține acum secțiunea curentă și revine acolo după reîncărcare. Reținerea se face pe durata sesiunii, deci o redeschidere a aplicației pornește tot de la Azi, cum e firesc.
- **Rândul de backup din „Mai mult"** avea recomandarea lipită imediat după „azi" și se citea prost. Acum e pe rândul următor.
- **Explicația de la ICR & ISF** era un bloc lung și greu de parcurs. Împărțită în trei paragrafe scurte: ce e ICR, ce e ISF (cu nota despre corecțiile curate), și precizarea că sunt valori descriptive, nu recomandări.

## v1.20.2 — 23 iulie 2026 *(beta)*
**Mini-turul explică acum reminderul de backup**
- **Legenda culorilor din mini-tur era scrisă în cod, dar nu se afișa niciodată.** Pasul 3 („Fă backup regulat") avea pregătită explicația celor trei stări ale indicatorului, însă funcția care desenează turul nu o randa. Acum apare: verde sub o săptămână, galben la o săptămână (când apare și mesajul de sus), roșu la două săptămâni sau mai mult. Astfel, cine începe să folosească aplicația află de la bun început că există un memento și cum îl citește.
- **Rândul de backup din „Mai mult", scurtat.** Arăta data completă plus numărul de intrări și intervalul acoperit — prea mult text pentru un rând citit în treacăt. Acum spune doar când a fost ultimul backup și că e recomandat săptămânal. Detaliile despre conținut rămân acolo unde chiar contează: în confirmarea de imediat după backup.

## v1.20.1 — 23 iulie 2026 *(beta)*
**Detectarea anulării, și pe telefoanele care descarcă direct**
- Mesajul „backupul NU a fost salvat" din v1.20 funcționa doar când telefonul folosea foaia de partajare. Pe Android, Chrome descarcă adesea fișierul direct, iar la o descărcare obișnuită **browserul nu comunică aplicației dacă utilizatorul a anulat** — deci anularea trecea neobservată. Rezolvat pe trei căi:
- **Nume de fișier unic.** Numele conținea doar data, deci al doilea backup din aceeași zi avea exact același nume, iar Chrome întreba „Download file again?". Acum numele include și ora (`..._20260723_0826.json`), deci dialogul acela nu mai apare: cauza cea mai frecventă a anulării accidentale dispare.
- **Selector de fișier, unde e disponibil.** Aplicația folosește întâi `showSaveFilePicker`: alegi tu unde salvezi, iar aplicația află exact dacă ai anulat. Cade elegant pe partajare, apoi pe descărcare simplă.
- **Portiță de scăpare la descărcarea simplă.** Când browserul nu ne poate spune rezultatul, foaia zice „Backup pregătit" (nu „salvat") și oferă butonul „Nu găsesc fișierul", care anulează marcarea și reaprinde bannerul. Onest: aplicația nu pretinde că știe ceva ce nu are cum să știe.

## v1.20 — 23 iulie 2026 *(beta)*
**Backup în care poți avea încredere**

- **BUG important reparat: aplicația marca backupul ca făcut chiar dacă nu se salva nimic.** `backupNow()` seta `lastBackup` înainte să deschidă foaia de partajare. Dacă utilizatorul o închidea fără să aleagă unde salvează (se întâmplă des, din greșeală), aplicația credea că are backup și **tăcea 7 zile** — exact când omul era cel mai expus. Acum backupul se marchează doar dacă salvarea chiar a reușit; la anulare apare un mesaj clar că fișierul nu a ajuns nicăieri, iar bannerul rămâne aprins.
- **Confirmare cu conținut.** După un backup reușit, aplicația spune ce conține fișierul: câte intrări și ce interval acoperă. Aceeași informație apare și în „Mai mult", lângă data ultimei salvări. Utilizatorul știe ce are, nu doar că are.
- **Protecția stocării.** Aplicația cere acum explicit browserului să nu-i șteargă datele (`navigator.storage.persist`). În plus, pe iPhone, dacă aplicația e deschisă din Safari fără să fie instalată pe ecranul principal, apare un avertisment: Safari șterge datele site-urilor nefolosite după câteva zile. Risc real, despre care aproape nimeni nu știe.
- **Anularea operațiunilor de ștergere.** După ce ștergi o intrare sau o zi întreagă, apare o bară cu „Anulează" — 12 secunde vizibilă, iar operațiunea rămâne reversibilă 10 minute. La fel după un import CSV. Textele care spuneau „nu poți reveni asupra acestei acțiuni" au fost înlocuite, pentru că acum poți.
- Anularea nu salvează o copie a întregului jurnal (ar dubla memoria folosită și ar risca depășirea cotei pe iPhone, unde e de circa 5 MB, iar un jurnal de doi ani are deja ~1,6 MB). Salvează doar ce s-ar pierde: evenimentele șterse, sau id-urile celor adăugate la import.

## v1.19.1 — 22 iulie 2026 *(beta)*
**Eliminarea grilei săptămânale**
- Grila „Săptămâna pe momente" (introdusă în v1.19) a fost scoasă complet. La testare s-a dovedit prea densă: patru celule cu cifre pe fiecare din cele 7 zile aglomerau secțiunea Statistici în loc s-o clarifice. Ideea de a vedea tiparele săptămânii rămâne validă, dar execuția tabelară nu a funcționat vizual. Cod, CSS și funcția `weekGrid` eliminate; Statisticile revin la forma dinainte. De reluat eventual altă dată, cu o vizualizare mai aerisită.

## v1.19 — 22 iulie 2026 *(beta)*
**Grilă săptămânală (hartă termică) & curățare documente**
- **Vedere săptămânală tip grilă**, în Statistici, sus: ultimele 7 zile pe rânduri, cele 4 momente ale zilei (dimineața / prânz / cină / seara) pe coloane. Fiecare celulă e media glicemică din acel moment al acelei zile, colorată după încadrarea în ținta ta (verde în țintă, galben peste, roșu sub sau mult peste). „×N" într-o celulă = câte măsurători intră în medie; celulă goală = nicio glicemie notată atunci. Scopul: vezi tiparele dintr-o privire (ex. „seara sunt mereu sus"), lucru pe care lista cronologică nu-l arată. Descriptiv, nu recomandare. Se ascunde dacă nu există nicio glicemie în ultima săptămână.
- **Ghidul rapid pentru testeri, recreat cu numele Nivelo** și actualizat (include grila și exportul Excel).
- **Curățare completă de referințe la numele vechi:** LICENSE și README nu mai menționează numele anterior (cerință pentru public); nota „fostă GlucoLog" scoasă din header-ul codului. Adresa veche de e-mail eliminată din LICENSE. Rămân doar cheia internă `glucolog_v1` (invizibilă utilizatorului) și URL-urile GitHub.

## v1.18 — 22 iulie 2026 *(beta)*
**Redenumire: GlucoLog → Nivelo**
- Aplicația se numește acum **Nivelo**. Motivul: existau deja aplicații de diabet numite GlucoLog (A. Menarini / Zucchetti și altele pe App Store), ceea ce însemna risc la publicarea în store-uri și posibil conflict de marcă. „Nivel" trimite la nivelul glicemiei, al HbA1c și la mediile urmărite, adică fix la ce măsoară aplicația.
- Schimbat peste tot ce e vizibil: logo-ul din bara de sus (Nive+lo), titlul, textele de onboarding / Despre / Confidențialitate, mesajele de eroare, README, LICENSE, privacy.html, manifestul (numele la instalare), documentația.
- **Neschimbate intenționat, ca să nu se piardă date:** cheia internă din localStorage rămâne `glucolog_v1` (redenumirea ei ar goli jurnalul tuturor testerilor); prefixul cache-ului rămâne `glucolog-`; URL-urile GitHub rămân (se tratează separat, sunt și dovada paternității). Backupurile vechi `GlucoLog_*.json` se importă normal, importul se uită la structură, nu la nume. Fișierele noi de backup/export poartă numele `Nivelo_*`.
- Adresă de contact nouă: **hello.nivelo@gmail.com** (cea veche rămâne valabilă, același titular).
- **De reținut la urcare:** manifestul s-a schimbat (nume nou), deci pe telefon e nevoie de dezinstalare + reinstalare ca numele și iconița să se actualizeze; backup înainte. La fel ca la orice schimbare de manifest (vezi v1.15.1).

## v1.17 — 22 iulie 2026 *(beta)*
**Rafinări vizuale la Azi și Statistici**
- **Cardul „Acum" (Azi) e mai compact:** cadran redus de la 118 la 104 px, padding și spații mai mici, sparkline puțin mai scund. Aceeași informație, mai puțin spațiu irosit.
- **Cardul de insulină, împărțit în două, pe modelul ICR:** un card nou „Insulină rapidă pe momente" (dimineața / prânz / cină / seara), cu doza tipică de rapidă însumată pe fiecare moment (bolus + corecții), mediană pe zilele complete. Dedesubt, cardul „Insulină & mese pe zi" păstrează cifrele relevante de dinainte: rapidă pe zi, bazală pe zi, corecții pe zi, carbohidrați pe zi, zile complete, rapidă la masă. Momentele „fără date" arată „—" (ex. seara, dacă nu-ți faci rapidă atunci).
- **Cardul „Media pe momente ale zilei" (Statistici) e mai compact:** bare mai scunde (70 px), padding redus, ca să nu mai pară gol pe verticală.
- Toate cifrele rămân descriptive, calculate din istoric, nu recomandări. Raportul pentru medic (structură tabelară proprie) nu e afectat.

## v1.16.1 — 22 iulie 2026 *(beta)*
**Fix critic: „Adaugă la masă" nu mai funcționa**
- La v1.16, migrarea căsuței de grame pe sistemul `openSheet` a introdus o regresie: căsuța de grame *înlocuia* foaia mesei în loc să se suprapună peste ea. Consecință: după ce alegeai un aliment „la 100 g" și apăsai „Adaugă la masă", codul scria într-un element care nu mai exista, iar butonul părea mort. (Alimentele „pe porție", care nu cer gramaj, nu erau afectate.)
- Reparat corect, nu ocolit: am adăugat o **a doua foaie** (`sheet2`), identică vizual cu prima dar cu z-index mai mare, pentru dialogurile care se deschid *peste* o foaie existentă. Căsuța de grame o folosește acum, iar foaia mesei rămâne intactă dedesubt. Consecvența vizuală din v1.16 se păstrează integral.
- Bonus: `shConfirm` și `shAlert` folosesc și ele foaia secundară. Efect: dacă ștergeai un aliment din foaia lui de editare și apăsai „Anulează" la confirmare, înainte pierdeai foaia de editare; acum revii la ea. Toate dialogurile suprapuse se comportă corect.
- Verificat cap-coadă cu un test de flux: adăugare aliment la 100 g (cu gramaj) și pe porție (direct), ambele funcționale, foaia mesei nedistrusă.

## v1.16 — 22 iulie 2026 *(beta)*
**Toate ferestrele au același stil, fără excepție**
- **Ultimele 11 dialoguri native ale browserului („...github.io says") au fost eliminate.** Erau toate mesajele de eroare și de rezultat de la import (fișier prea mare, tip greșit, JSON/CSV deteriorat, structură nevalidă, import reușit). Înlocuite cu o foaie stilată nouă, `shAlert`, cu iconiță, titlu și un buton, în stilul aplicației. Așa se închide și punctul „mesaje de eroare prietenoase peste tot" din checklist.
- **Căsuța de grame, aliniată la restul.** Apărea centrată pe ecran, printr-un sistem propriu (`grambox`/`gramveil`), în timp ce toate celelalte dialoguri urcă de jos ca foaie. Acum folosește exact același sistem `openSheet` ca restul: aceeași poziție, animație, colțuri, butoane. Sistemul vechi, separat, a fost șters complet din cod (CSS și container mort).
- Rezultat: toate cele 15 dialoguri din aplicație trec acum prin aceeași infrastructură vizuală. Niciun `prompt`, `confirm` sau `alert` nativ nu mai există nicăieri.
- Notă despre poza raportată: dialogul nativ de grame apărea la prima folosire a unui aliment nou fiindcă versiunea instalată pe telefon servea încă, din cache, cod mai vechi decât v1.9 (când căsuța fusese deja stilată). După activarea codului nou nu s-a mai reprodus. Această versiune face imposibilă reapariția, indiferent de cache.

## v1.15.1 — 21 iulie 2026 *(beta)*
**Manifestul nu mai rămâne blocat în cache**
- Service worker-ul servea `manifest.webmanifest` „întâi din cache", ca pe orice alt fișier. Consecință: o versiune veche a manifestului putea rămâne înghețată acolo, iar Android construia aplicația instalată (WebAPK) după ea, ignorând manifestul nou de pe server. Așa a rămas blocată rotirea pe portret chiar și după ce manifestul fusese corectat și aplicația reinstalată.
- Manifestul se ia acum **întotdeauna din rețea**, cu copia din cache păstrată doar ca plasă de siguranță pentru funcționarea offline. Restul fișierelor rămân pe strategia „întâi din cache", care e potrivită pentru ele.
- Lecție de reținut pentru viitor: orice schimbare de manifest (orientare, iconițe, nume, culori) trebuie însoțită de dezinstalarea și reinstalarea aplicației de pe telefon, cu backup făcut înainte.

## v1.15 — 21 iulie 2026 *(beta)*
**Ecran culcat & cartonașe de statistici curățate**
- **Aplicația se rotește acum în modul culcat.** Manifestul avea `orientation: portrait`, care bloca rotirea chiar dacă telefonul avea auto-rotate pornit. Deblocat, plus o adaptare pentru ecran culcat: bare de sus și de jos mai subțiri, cadran și grafic mai mici, statistici pe trei coloane în loc de două, ca să încapă fără să te plimbi prin pagină.
- **Cartonașele din Statistici, curățate:** unitățile (U, g/U, mg/dl, HC, %) au acum un stil comun, în culoare estompată și aliniate corect lângă cifră, în loc de șase stiluri scrise de mână în cod. Valoarea și unitatea stau împreună (147 mg/dl), iar eticheta rămâne curată dedesubt (medie).
- **Etichete consecvente:** „ICR dim" devine „ICR dimineața", la fel ca celelalte trei momente; barele oblice au fost înlocuite cu cuvinte („rapidă pe zi" în loc de „rapidă / zi", „rapidă la masă", „carbohidrați pe zi"). Verificat că toate încap pe un singur rând de la 360px lățime în sus.
- **ISF explicat, nu doar absent:** eticheta era „ISF (date puține)", ceea ce arăta ca o eroare. Acum eticheta rămâne „ISF estimat", iar textul de sub cartonașe spune câte corecții curate ai din total și de la câte apare cifra, ca să se înțeleagă că e o alegere de prudență, nu o defecțiune.
- Textul explicativ de la ICR/ISF a fost rescris în frază curgătoare, cu termenii evidențiați.

## v1.14.4 — 21 iulie 2026 *(beta)*
**Numele și contactul pe același rând**
- În „Despre" și în subsolul din „Mai mult", numele autorului și adresa de e-mail stau acum unul lângă altul, pe un singur rând, despărțite prin „·". Corp de literă ușor mai mic pe acel rând, calculat să încapă de la 360px lățime în sus (toate telefoanele actuale). Separatorul e lipit de adresă, așa că, dacă pe un ecran foarte îngust textul tot se rupe, rândul al doilea începe cu „· adresa" și arată intenționat, nu ca o rupere accidentală.

## v1.14.3 — 21 iulie 2026 *(beta)*
**Așezarea blocului de autor**
- În „Despre" și în subsolul din „Mai mult", adresa de e-mail se rupea singură pe rândul următor, după separatorul „·", și părea o greșeală de afișare. Numele și contactul au fost separate pe rânduri distincte. *(Revizuit imediat în v1.14.4, la cererea autorului: una lângă alta, dar fără ruperea urâtă.)*

## v1.14.2 — 21 iulie 2026 *(beta)*
**Adresă oficială de contact**
- Adresa de contact a proiectului devine **hello.glucolog@gmail.com**, actualizată peste tot: nota de copyright din cod, LICENSE, README, privacy.html, secțiunea „Despre" și subsolul aplicației. Adresa personală anterioară rămâne valabilă și aparține aceluiași titular; LICENSE spune asta explicit, pentru copiile mai vechi aflate în circulație.
- Titularul drepturilor rămâne numele complet (Constantin Enache): o adresă se poate transfera, numele nu.
- Adresele sunt acum linkuri pe care se poate apăsa (în aplicație și în privacy.html), iar linkul din subsol precompletează subiectul cu versiunea, ca mesajele de la utilizatori să vină cu contextul inclus.

## v1.14.1 — 21 iulie 2026 *(beta)*
**Identificarea autorului în toate documentele**
- Numele autorului însoțit de e-mail (costy1622@gmail.com) în nota de copyright din cod, LICENSE, README, secțiunea „Despre" din aplicație și în subsolul din „Mai mult" (vizibil acum și în interfață, nu doar în fișiere).
- LICENSE și README menționează explicit titularul unic al drepturilor și trimit la repository-ul public, ale cărui commit-uri datate constituie evidența publică a paternității.
- privacy.html: numele autorului adăugat lângă adresa de contact; data actualizată.

## v1.14 — 21 iulie 2026 *(beta)*
**Indicator de backup & stări goale prietenoase**
- **Indicator „ultima salvare acum X zile":** linie discretă sub cronologia zilei (Azi), cu bulină verde/galbenă/roșie după vechime (sub 7 zile / 7-13 / 14+ sau niciun backup) și buton de acțiune. Apare doar când jurnalul are peste 3 intrări, ca să nu deranjeze la început. În „Mai mult", rândul de Backup arată acum data exactă a ultimei salvări. Reminder pasiv, complementar bannerului escaladat din v1.12.
- **Stări goale prietenoase** în fiecare secțiune, cu iconiță, explicație a ce va apărea acolo și buton către primul pas: Azi (jurnal gol / zi nouă), cadranul de glicemie, Istoric (gol / căutare fără rezultat), Alimente (bibliotecă goală / căutare fără rezultat, cu scurtătură de adăugare), Statistici (fără date / date doar în afara perioadei alese, caz în care sugerează schimbarea perioadei). Funcție comună `emptyState`.

## v1.13 — 21 iulie 2026 *(beta)*
**Export Excel nativ (.xlsx)**
- Export `.xlsx` real, cu două foi: „Jurnal" (toate evenimentele) și „Alimente" (biblioteca). Numerele sunt numere adevărate în Excel, nu text; header colorat, rând înghețat, filtre automate, lățimi de coloană setate.
- Generator XLSX propriu, scris de la zero, **fără nicio dependență**: un .xlsx e o arhivă ZIP cu XML-uri, iar ZIP-ul e scris fără compresie („store"), variantă pe care Excel/LibreOffice/Google Sheets o citesc normal. Principiul „un singur fișier, zero dependențe, offline" rămâne intact.
- Exportul CSV rămâne separat în meniu, ca variantă pentru reimport în GlucoLog.
- Testat pe istoricul complet: 12.804 evenimente, ~150 ms, fișier de ~4,8 MB, validat cu un cititor xlsx independent.

**Corecturi de afișare**
- **Bug (tema întunecată):** bara de sus cu „GlucoLog" era text alb pe fundal aproape alb, deci ilizibilă. Cauza: bara folosea `var(--ink)` ca fundal, iar în tema întunecată `--ink` devine o culoare deschisă. Raportat de un tester; nu se vedea în tema luminoasă.
- Graficul „Media pe momente ale zilei" (Statistici) era lăbărțat: redus în înălțime și cu bare mai înguste.

## v1.12.2 — 21 iulie 2026 *(beta)*
**Foi de confirmare stilizate & lizibilitate în Alimente**
- Toate confirmările native ale browserului („...github.io says") înlocuite cu foi stilizate în stilul aplicației: ștergere intrare, ștergere aliment din bibliotecă, ștergere zi din Istoric, restaurare backup. Funcție reutilizabilă `shConfirm`.
- Lista din Alimente: numele alimentului și eticheta HC (ex. „44,7 HC / 100g") apăreau lipite pe același rând. Acum numele e pe un rând, iar HC-ul și „folosit de N ori" pe rândul de dedesubt, ca în restul listelor din aplicație.

## v1.12.1 — 21 iulie 2026 *(beta)*
**Curățare texte**
- Eliminate liniile lungi (em-dash) care rupeau frazele în interfață; înlocuite cu punctuație corectă (punct, virgulă, punct și virgulă, două puncte). Păstrate: liniuța „—" de „nicio valoare" în câmpuri și liniuțele dintre numere (ex. 70–180, 2–4 h).

## v1.12 — 21 iulie 2026 *(beta)*
**Robustețe & onboarding**
- Import robust: validează tipul, dimensiunea și structura fișierului; CSV-ul se construiește într-o copie separată (staging) și se aplică doar dacă e valid — un fișier corupt NU mai atinge datele existente. Mesaje de eroare clare în română.
- Reminder de backup escaladat: „niciun backup" / 7 zile / 14 zile / 21+ zile (urgent, cu stil roșu). Dispare imediat ce faci backup.
- Mini-tur de 3 pași la prima folosire (notează / vezi tendințe / fă backup), o singură dată, cu buton „Sar peste".

## v1.11.1 — 20 iulie 2026 *(beta)*
**Finalizare documente**
- E-mail de contact completat permanent în privacy.html și LICENSE (costy1622@gmail.com).
- Eliminat blocul de notă temporar din privacy.html. Aceste modificări sunt acum în sursă — orice versiune viitoare le include automat.

## v1.11 — 20 iulie 2026 *(beta)*
**Total masă fără redundanță**
- Rândul „Total masă" apare doar când o masă are 2+ alimente (la o singură masă, HC-ul e deja pe cardul ei). Aplicat în Azi și Istoric.

## v1.10 — 20 iulie 2026 *(beta)*
**Istoric grupat pe momente**
- Fiecare zi din Istoric e grupată pe momente (Dimineața/Prânz/Cină/Seara) cu subtotal HC, ca la Azi. Capul de zi arată media glicemică + HC total.
- Căutarea rămâne listă plată cu context la mese.
- Raportul detaliat aliniat cu aceeași structură pe momente.

## v1.9 — 20 iulie 2026 *(beta)*
**Căsuța de grame stilată**
- Dialogul nativ urât („...github.io says") înlocuit cu o foaie elegantă în stilul aplicației, cu preview live al HC pe măsură ce introduci gramajul.

## v1.8.1 — 20 iulie 2026 *(beta)*
**Protecție & licențiere**
- Fișier LICENSE (uz personal/necomercial); notă de copyright în cod; README cu termeni.

## v1.8 — 20 iulie 2026 *(beta)*
**Total carbohidrați pe masă & lizibilitate**
- Total HC pe masă pe pagina Azi (mese la ≤45 min grupate). Pur aritmetic — NU sugerează doze.
- Texte explicative aliniate la stânga, mai lizibile.

## v1.7.1 — 20 iulie 2026
**Documente aliniate cu ICR/ISF**
- Frază în privacy/README/Despre: ICR/ISF sunt valori descriptive, nu recomandări.

## v1.7 — 20 iulie 2026
**Parametri pentru medic: ICR & ISF**
- ICR observat pe momentele zilei; ISF estimat din corecții „curate". Strict descriptiv.
- Confirmat că sursa „senzor" (CGM) funcționează.

## v1.6.1 — 20 iulie 2026
**Confidențialitate publică**
- privacy.html găzduit + link în app; README public.

## v1.6 — 20 iulie 2026
**Cifre curate & consimțământ o singură dată**
- Statistici cu doza tipică (mediană) + variație în text; bara Timp în țintă cu legendă; consimțământ o singură dată.

## v1.5 — 20 iulie 2026
**Poziționare legală & intervale oneste**
- Consimțământ la prima pornire; secțiuni Despre + Confidențialitate; intervale în loc de medii cu falsă precizie.

## v1.4 — 20 iulie 2026
**Pachet PWA publicabil**
- Manifest, service worker offline, iconițe; prima versiune instalabilă.

## v1.3 — 19 iulie 2026
**Insulină manuală & zile complete**
- Input manual insulină, logică Fiasp↔Tresiba; calcule pe zile complete; bazala ca mediană.

## v1.2 — 19 iulie 2026
**Vizualizare & confort**
- Sparkline 24h; mod întunecat; sursă implicită glicemie; ferestre calendaristice.

## v1.1 — 19 iulie 2026
**Import robust & rapoarte**
- Fix fus orar; anti-dubluri; alimente în CSV; rapidă/bazală separat; raport macro/micro; „Șterge o zi"; 33 alimente minate.

## v1.0 — 19 iulie 2026
**Prima versiune funcțională**
- 5 secțiuni; jurnal pe evenimente; bibliotecă alimente cu calcul HC; căutare cu context; statistici; import/export CSV + backup JSON; raport medic; stocare 100% locală.

---

## Note despre versionare & infrastructură

- **Repo principal (main):** STABIL, testeri, live la `https://costi1622.github.io/nivelo-beta-stabil/`. Versiune stabilă curentă: v1.7.1.
- **Repo beta (nivelo-beta):** DEZVOLTARE, testat zilnic de autor, live la `https://costi1622.github.io/nivelo-beta/`. Versiune beta curentă: v1.27.
- **Promovare la testeri:** funcțiile coapte din beta se urcă în repo principal (main).
- **Cache SW:** incrementat la fiecare versiune ca telefoanele să preia noul cod (golire cache + redeschidere ×2).
- **Documente:** e-mailul de contact și forma finală a privacy.html sunt permanente în sursă din v1.11.1.
- **Google Play (eventual):** APK/AAB din PWABuilder NU se actualizează automat.
