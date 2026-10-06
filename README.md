# Puer Fons (Ny) – Returservice

Enkel returportal for kunder av Puer Fons, bygget på Next.js. Kunden slår opp
ordrenummeret sitt, velger hvilke varer som skal returneres, fyller ut
kontaktinfo, og får en returetikett generert automatisk via Webshipper.
Returen registreres samtidig i Ongoing WMS slik at lageret ser den komme.

Dette er en egen vareeier-oppføring ("Puer Fons (Ny)", goodsOwnerId 127) ved
siden av den opprinnelige Puer Fons-løsningen (goodsOwnerId 92) - samme
merkevare og branding, men egen goodsOwnerId i Ongoing.

## Oppsett

1. `npm install`
2. Kopier `.env.example` til `.env.local` og fyll ut verdiene (se under)
3. `npm run dev`

## Miljøvariabler

Se `.env.example` for full liste. Viktigst:

- `ONGOING_GOODS_OWNER_ID=127` (Puer Fons (Ny) sin vareeier-ID i Ongoing)
- `ONGOING_USERNAME` / `ONGOING_PASSWORD` – den vanlige Ongoing-brukeren
  "API-bruker" (bruker-ID 115). Sjekk at "Puer Fons (Ny)" er huket av i
  "Alle vareeiere"-lista på denne brukeren i Ongoing-admin, OG at den egne
  "API-tilgang"-bryteren på selve vareeier-oppføringen for "Puer Fons (Ny)"
  er skrudd på (se driftsnotatet under - dette var en overraskende
  gjenstående fallgruve for den første Puer Fons-vareeieren).
- `WEBSHIPPER_ACCESS_TOKEN` – samme Webshipper-konto (`spring-nova-immitec`)
  som de andre vareeierne, `WEBSHIPPER_CARRIER_ID` og `WEBSHIPPER_SERVICE_CODE`
  er allerede fylt ut i `.env.example` med de delte verdiene (1 / 9300)
- `WAREHOUSE_RETURN_*` – adressen varene skal returneres til (samme lager som
  for øvrige vareeiere, kun c/o-navnet er endret til "Puer Fons (Ny)")

## Driftsnotat

Denne løsningen er en egen kopi av løsningen bygget for Puer Fons
(goodsOwnerId 92), som i sin tur bygger på Almea/Nesco/Vitae Vital-malen.
Se prosjektet "Returløsning - Ongoing kunder" i Claude for felles
arkitekturbeslutninger, kjente fallgruver, og en oversikt over alle
vareeiere - inkludert en viktig lærdom om at Ongoing har en egen,
vareeier-spesifikk "API-tilgang"-bryter (utover den vanlige
"Alle vareeiere"-lista på API-brukeren) som må skrus på for hver ny
vareeier, ellers svarer Ongoing med 403 Forbidden.

## Deploy

Deploy via Vercel. Husk å sette "Framework Preset" til "Next.js" manuelt
hvis det ikke blir satt automatisk.
