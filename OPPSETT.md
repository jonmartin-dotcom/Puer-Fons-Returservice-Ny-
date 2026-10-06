# Oppsett av returservice for Puer Fons (Ny)

Dette er en komplett, kjørbar kopi av returløsningen (samme kodebase som
Nesco/Vitae Vital/Almea/Puer Fons), satt opp med goodsOwnerId **127**
("Puer Fons (Ny)") og nøyaktig samme gull/bronse-profil som den første
Puer Fons-løsningen (goodsOwnerId 92).

## 1. Opprett GitHub-repo

1. Opprett et nytt, tomt repo på GitHub, f.eks. `puerfons-ny-returservice`.
2. Last opp alt innholdet i denne zip-filen til repoet (dra inn *innholdet*
   i mappen, ikke selve `returservice-puerfons-ny`-mappen - ellers havner
   alt i en undermappe, se merknad i prosjektnotatet om det).

## 2. Opprett Vercel-prosjekt

1. Nytt prosjekt i Vercel, koblet til det nye GitHub-repoet.
2. Sett **Framework Preset til "Next.js" manuelt** (den settes ofte feil til
   "Other" automatisk).
3. Legg inn miljøvariablene under "Environment Variables" (se punkt 3).

## 3. Miljøvariabler i Vercel

De fleste verdiene er allerede fylt ut i `.env.example` siden de er delt med
de andre vareeierne. Dette må du fylle inn selv (de er hemmelige, så de
ligger ikke i koden):

- `ONGOING_USERNAME` = `API-bruker`
- `ONGOING_PASSWORD` = (samme passord som de andre vareeierne bruker på
  bruker 115 i Ongoing)
- `WEBSHIPPER_ACCESS_TOKEN` = (samme token som de andre vareeierne bruker)

Alt annet (warehouse, goodsOwnerId=127, carrier-ID, servicekode, lageradresse
med "c/o Puer Fons (Ny)") er allerede riktig fylt ut i `.env.example` -
kopier verdiene derfra rett inn i Vercel.

## 4. Sjekk tilgang i Ongoing (TO ting å sjekke, ikke bare én)

1. Gå til bruker-ID 115 ("API-bruker") i Ongoing-admin, og sjekk at **"Puer
   Fons (Ny)" er huket av** i "Alle vareeiere"-lista på den brukeren. Basert
   på et tidligere skjermbilde ser denne allerede ut til å være huket av,
   men dobbeltsjekk.
2. **Viktig lærdom fra forrige vareeier (Puer Fons 92):** det finnes i
   tillegg en egen "API-tilgang"-bryter PÅ SELVE vareeier-oppføringen for
   "Puer Fons (Ny)" i Ongoing-admin (ikke på brukeren, ikke i "API for
   vareeiere"-lista). Denne må også skrus på - den var avslått som default
   for 92 og ga en vedvarende `403 Forbidden` helt til den ble funnet og
   skrudd på. Sjekk denne FØRST hvis du får 403 ved testing, det sparer en
   del feilsøking.

## 5. Deploy og test

1. Deploy (skjer automatisk når du pusher til GitHub).
2. Test FULL flyt med et reelt eller testordrenummer for goodsOwnerId 127 -
   ordreoppslag, varevalg, kontaktinfo, og at en etikett faktisk blir
   generert - før lenken deles med kunder.

Si ifra når det er oppe, så tester jeg flyten for deg på samme måte som for
de andre vareeierne.
