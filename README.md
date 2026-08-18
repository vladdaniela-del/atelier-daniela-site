# Atelier by Daniela — Studio de Dermopigmentare

Site static (HTML/CSS/JS, fără build step), trilingv (Română / Engleză / Italiană), pentru studioul de dermopigmentare Atelier by Daniela.

## Structură

- `index.html` — pagina principală (istoric dermopigmentare, servicii, de ce noi, galerie, CTA)
- `sprancene.html` — cele 4 tehnici de micropigmentare sprâncene (Fir cu fir, Powder, Hybrid, Microblading)
- `gene.html` — extensii de gene (1D–6D), rezultate, etape, îngrijire
- `buze.html` — machiaj permanent buze (contur + lip blush)
- `eyeliner.html` — eyeliner permanent (linie clasică + Color HD)
- `galerie.html` — galerie de rezultate reale, cu filtre pe categorie
- `preturi.html` — lista completă de prețuri (8 categorii, din lista furnizată)
- `contact.html` — date de contact reale și formular de programare (demonstrativ)
- `css/style.css` — toate stilurile (paletă roz-pudră / auriu, identică cu situl exemplu)
- `js/script.js` — meniu mobil, filtre galerie, formular de contact
- `js/i18n.js` — motorul de comutare a limbii (citește `data-i18n*` din HTML)
- `js/i18n-data.js` — toate textele în RO / EN / IT

## Limbi

Comutatorul RO / EN / IT din header schimbă textul instant, fără reîncărcarea paginii (JavaScript, fără server). Limba aleasă se salvează în browser (`localStorage`) și se păstrează la navigare între pagini.

## Imagini

- `img/gene/` — fotografii reale cu extensii de gene (before/after)
- `img/buze/` — fotografii reale cu machiaj permanent buze
- `img/eyeliner/` — fotografii reale cu eyeliner permanent
- `img/sprancene-stilizare/` — fotografii reale cu stilizare/pensat/vopsit sprâncene
- `img/sprancene-tehnici/` — conține `microblading.jpg` (fotografie reală) și `TEHNICI.webp` (diagramă explicativă, folosită pe pagina de sprâncene pentru toate cele 4 tehnici, deoarece fotografiile generate AI pentru fir-cu-fir/powder/hybrid au fost eliminate)

**De completat:** pagina `sprancene.html` folosește în prezent doar diagrama explicativă pentru toate cele 4 tehnici — dacă trimiți fotografii reale de tip before/after pentru fir cu fir, powder și hybrid, le putem înlocui oricând.

## Rulare locală

Se deschide `index.html` direct în browser (dublu-clic) — nu necesită server.
