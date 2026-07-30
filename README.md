# Nivelo

Un jurnal personal pentru diabet: notează glicemii, mese (cu bibliotecă de alimente și calcul automat al carbohidraților), doze de insulină, activitate, greutate și, opțional, ciclul menstrual. Îți organizează ziua cronologic, îți arată tendințele proprii și îți generează rezumate pentru discuția cu medicul.

Funcționează complet offline, ca aplicație web instalabilă (PWA). Datele rămân exclusiv pe telefonul tău.

## Ce este și ce nu este

Nivelo este un **jurnal personal**.

Nu este un dispozitiv medical. Nu oferă sfaturi medicale, nu pune diagnostice și nu calculează sau recomandă doze de insulină. Rezumatele afișate (inclusiv HbA1c estimat, precum și parametrii derivați ICR și ISF) sunt valori descriptive calculate din propriul istoric al utilizatorului; reflectă ce s-a practicat, nu sunt recomandări. Au rol pur informativ și nu înlocuiesc medicul, glucometrul, senzorul sau analizele de laborator. **Deciziile de tratament se iau exclusiv împreună cu medicul.** În caz de urgență, sună la 112.

## Ce face

**Ziua în curs.** Ultima glicemie într-un cadran colorat după încadrarea în țintă, graficul zilei pe 24 h și patru butoane mari pentru adăugat rapid. Tot ce notezi apare dedesubt, cronologic, grupat pe momentele zilei.

**Istoric și căutare.** Toate zilele notate, până la prima. Cauți un aliment și vezi fiecare dată când l-ai mâncat, cu glicemiile și insulina din jurul mesei.

**Bibliotecă de alimente.** Fiecare aliment cu carbohidrații lui, la 100 g sau pe porție, ca la masă să-l alegi dintr-un tap. Vine cu alimente comune românești; le adaugi pe ale tale.

**Statistici.** Media glicemică, HbA1c estimat, timpul în țintă, mediile pe momentele zilei, dozele tipice de insulină. Pentru discuția cu medicul: ICR și ISF observate, derivate din istoric, cu metodologia declarată.

**Ciclul menstrual, opțional.** Se pornește din Setări. Marchezi începutul și sfârșitul, iar aplicația compară apoi zilele de ciclu cu restul: media glicemică, timpul în țintă și insulina rapidă pe zi. Util fiindcă sensibilitatea la insulină se modifică frecvent pe parcursul ciclului. Cât timp funcția e oprită, nu apare nicăieri nimic.

**Raport pentru medic.** Pe 30, 90 sau 180 de zile, cu rezumatul general, dozele, parametrii derivați și, dacă e cazul, secțiunea de ciclu. Se salvează ca PDF din fereastra de tipărire.

**Export.** Excel (.xlsx, două foi) sau CSV, plus backup complet în format JSON.

## Instalare

1. Deschide adresa aplicației în Chrome pe telefon: `https://costi1622.github.io/nivelo-beta-stabil/`
2. Meniul Chrome (⋮) → „Instalează aplicația" / „Adaugă la ecranul de pornire".
3. Deschide aplicația instalată. Funcționează offline; datele se salvează local.

Pe desktop merge la fel: deschizi adresa în browser.

Când apare o versiune nouă, aplicația te anunță printr-o bară jos și îți arată pe scurt ce s-a schimbat după actualizare.

Aplicația e în probă cu un grup mic: autorul, soția lui și cinci testeri, toți pe aceeași versiune. Feedbackul lor intră direct în versiunile următoare.

## Confidențialitate

Nu se colectează și nu se transmite niciun fel de date. Totul stă local pe dispozitiv.

Din v1.41, aplicația are o politică de securitate a conținutului care face ca **browserul însuși** să refuze orice încercare de a trimite date către un server. Promisiunea nu mai depinde doar de codul aplicației, ci e impusă din afara lui.

Poți vedea oricând unde stau datele, în Mai mult → Confidențialitate → „Datele mele pe acest telefon", cu opțiunea de a șterge fiecare copie. Vezi și [politica de confidențialitate](privacy.html).

## Siguranța datelor

Datele fiind locale, backupul e plasa de siguranță. Fă-l periodic din **Mai mult → Backup acum** și salvează fișierul unde vrei (de exemplu Google Drive). La schimbarea telefonului, îl imporți înapoi.

Aplicația mai are, peste asta:

- **Backup verificat înainte de livrare.** Fișierul e citit înapoi și comparat; dacă nu se potrivește, nu ți se dă.
- **A doua copie locală a jurnalului,** ca rezervă dacă datele principale devin necitibile.
- **Anulare pentru orice acțiune distructivă:** ștergerea unei intrări sau a unei zile, importul unui CSV și restaurarea unui backup. Restaurarea nu expiră: dacă ai pus alt fișier decât voiai, poți reveni și mai târziu.
- **Avertisment dacă salvarea eșuează,** în loc să pretindă că a mers.

## Ajutor și suport

- **Mai mult → Ghid rapid:** cele cinci secțiuni pe scurt, de recitit oricând.
- **Mai mult → Întrebări frecvente:** răspunsuri la întrebările care apar des.
- **Mai mult → Diagnostic tehnic:** starea instalării, cu buton de copiere a raportului.
- **Mai mult → Trimite feedback:** scrii direct autorului, cu detaliile tehnice deja completate.

Autorul e o singură persoană, deci răspunsul poate lua câteva zile.

## Licență

© 2026 Constantin Enache (hello.nivelo@gmail.com). Toate drepturile rezervate.

Autor și titular unic al drepturilor: **Constantin Enache**, hello.nivelo@gmail.com. Versiunea originală și istoricul complet al dezvoltării se află în acest repository; commit-urile datate constituie evidența publică a paternității proiectului.

Aplicația este oferită **gratuit, pentru uz personal și necomercial**. Poți s-o folosești și s-o partajezi ca link către versiunea originală. **Nu** este permisă utilizarea comercială (vânzare, abonament, reclame), copierea, modificarea sau republicarea codului sub alt nume, fără acordul scris al autorului. Vezi fișierul [LICENSE](LICENSE).
