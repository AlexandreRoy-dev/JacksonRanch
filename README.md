# Jackson Ranch Elk Outfitters

Refonte statique du site de Jackson Ranch Elk Outfitters (Saint-Isidore-de-Clifton, Québec). Français du Québec par défaut, anglais sous `/en/`. Le site est généré avec Astro et peut être servi par GitHub Pages à partir du dossier `dist`.

Aperçu actuel, non modifié par cette branche : https://jacksonranch.roymarketing.ca/ (Pages publie la racine de `main`). Site WordPress en ligne : https://www.jacksonranchelkoutfitters.com/.

## Ne pas mettre en ligne

Ne pas fusionner cette branche sans l'accord du propriétaire. Ne pas changer le fichier `CNAME`, ni les réglages GitHub Pages. Tant que Pages publie la racine du dépôt, une fusion retire `index.html` du brouillon actuel et jacksonranch.roymarketing.ca cesse d'afficher ce brouillon. Le domaine de production ne doit pas changer tant que le propriétaire n'a pas validé.

Le workflow `.github/workflows/build.yml` compile le site et dépose `dist` en artefact. Il ne déploie rien.

## Commandes

```bash
npm ci
npm run build
npm run preview
```

`npm run build` lance Astro, écrit `dist/sitemap.xml`, puis vérifie les routes, les balises, les fichiers locaux, l'absence de prix, l'absence de la taille du terrain, et l'absence de tirets cadratin ou demi-cadratin.

## Pages

Accueil, chasse, wapiti, cerf rouge, forfaits, Jackson Lodge, activités, séjour, galerie, histoire, FAQ, réserver, conditions, confidentialité, témoins, crédits. Chaque page existe en français et en anglais, avec canonical, hreflang, Open Graph et JSON-LD.

Les anciennes adresses WordPress qui ne sont pas réutilisées ont une page de renvoi (rafraîchissement meta, pas une redirection 301). `/a-propos/`, `/reserver/` et `/en/book/` sont les nouvelles adresses : elles ne renvoient pas ailleurs.

## Placeholders

Les faits en conflit restent marqués « À confirmer », avec un TODO dans le code :

- Tarifs : sur demande. Aucun montant n'est affiché.
- Conditions de la chasse garantie.
- Téléphone de Vanessa, et téléphone de Jonathan.
- Temps de route depuis Montréal (2 h ou 2 h 30).
- Adresse à afficher (le ranch, ou l'une des adresses de Sherbrooke).
- Destinataire du formulaire. Le formulaire se valide dans le navigateur, consentement Loi 25 compris, et n'envoie rien.
- La taille du terrain n'est pas publiée.

Le canonical pointe encore vers jacksonranch.roymarketing.ca. Le basculer vers www.jacksonranchelkoutfitters.com est un TODO de mise en ligne.

## Licences

Les dix vidéos d'ambiance et leurs licences sont dans `LICENSES.md` et sur `/credits/`.
