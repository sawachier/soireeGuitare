## Plan : Site Soirée Guitare Feu de Camp

Site vitrine éphémère pour une soirée guitare feu de camp : infos, partitions PDF pour musiciens, paroles via QR code pour le public. Hébergement gratuit via GitHub Pages, 10-20 chansons, développeur avancé, PDFs existants.

### Analyse multi-expertise

#### Expert en Communication
- **Mode sombre obligatoire** — Thème chaud (tons orangés/ambrés), sombre par défaut. Écran blanc = ambiance cassée.
- **Deux parcours utilisateur** — "Musicien" (partitions PDF, tonalités, set-list) vs "Public" (paroles seules, texte grand, scrollable).
- **QR code physique unique** — Imprimé en grand, plastifié, sur chevalet. Pointe vers la page d'accueil (pas un QR par chanson).
- **Open Graph soigné** — Image pour partage WhatsApp/Instagram (visuel feu de camp + guitare).
- **URL courte et mémorable** — Type `monpseudo.github.io/feu`.

#### Ingénieur Informatique
- **Solution retenue : Astro (SSG) + GitHub Pages** — Meilleur rapport effort/résultat pour un dev avancé avec 10-20 chansons.
- Markdown par chanson avec frontmatter → pages auto-générées.
- Déploiement natif GitHub Pages via GitHub Actions.
- Alternatives écartées : HTML pur (faible réutilisabilité), Vue/React SPA (over-engineering).

#### Musicien Professionnel
- **Doubler les PDFs** avec version texte responsive (format ChordPro simplifié) pour affichage mobile.
- **Métadonnées par chanson** : tonalité, capo, tempo, difficulté.
- **Set-list ordonnée** : enchaînement réfléchi (fédérateur → énergie → redescente), navigation prev/next.
- **Transposition JS** : bouton +/- demi-tons (si accords en format texte).
- **Vue public sans accords** : les paroles pour le public ne montrent pas les accords.

---

### Architecture proposée

```
/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro      # Layout sombre, mobile-first
│   ├── pages/
│   │   ├── index.astro            # Accueil : infos soirée + QR code
│   │   ├── chansons/
│   │   │   └── index.astro        # Liste des chansons
│   │   └── chanson/[slug].astro   # Page dynamique par chanson
│   └── content/
│       └── chansons/
│           ├── wonderwall.md      # Paroles + métadonnées
│           ├── hotel-california.md
│           └── ...
├── public/
│   ├── partitions/                # PDFs des partitions
│   │   ├── wonderwall.pdf
│   │   └── ...
│   └── og-image.jpg               # Image pour partage social
└── astro.config.mjs
```

---

### Steps

**Phase 1 — Fondations**
1. Initialiser un projet Astro avec déploiement GitHub Pages (config `astro.config.mjs` avec `site` et `base`)
2. Créer le layout de base : thème sombre/ambré, mobile-first, responsive
3. Créer la page d'accueil avec infos de la soirée + image OG pour le partage social

**Phase 2 — Contenu musical**
4. Définir le schéma de contenu des chansons en Markdown (frontmatter : titre, artiste, tonalité, capo, tempo, difficulté, ordre dans la set-list, chemin PDF)
5. Créer les fichiers `.md` pour les 10-20 chansons avec paroles au format ChordPro simplifié
6. Déposer les PDFs des partitions dans `/public/partitions/`

**Phase 3 — Pages & Navigation**
7. Page liste des chansons (triée par ordre de set-list, avec filtres musicien/public)
8. Page chanson individuelle avec deux vues (toggle musicien/public) — *dépend de 4*
9. Navigation "précédent/suivant" selon l'ordre de la set-list — *dépend de 7*
10. Fonctionnalité de transposition JS (optionnel mais à fort impact) — *parallélisable avec 9*

**Phase 4 — QR Code & Déploiement**
11. Générer le QR code pointant vers l'URL finale du site
12. Déployer via GitHub Actions sur GitHub Pages
13. Tester sur mobile en conditions réelles (dehors, luminosité basse)

---

### Relevant files
- `astro.config.mjs` — Configuration du site (base URL GitHub Pages)
- `src/layouts/BaseLayout.astro` — Layout principal (thème sombre, meta OG)
- `src/pages/index.astro` — Accueil (infos soirée, QR code)
- `src/pages/chansons/index.astro` — Liste set-list
- `src/pages/chanson/[slug].astro` — Page chanson dynamique (vue musicien/public, transposition)
- `src/content/chansons/*.md` — Fichiers de contenu par chanson
- `public/partitions/*.pdf` — PDFs des partitions existantes

### Verification
1. Lighthouse mobile score > 90 (performance + accessibilité)
2. Test QR code scan depuis 3 téléphones différents (iOS Safari, Android Chrome, Android Firefox)
3. Test lisibilité de nuit (écran à luminosité basse sur fond sombre)
4. Vérifier que chaque PDF de partition s'ouvre correctement sur mobile
5. Vérifier la transposition sur au moins 3 chansons (si implémentée)

### Decisions
- Astro retenu vs HTML pur (meilleur ratio effort/maintenabilité pour 10-20 chansons)
- QR code unique vers la page d'accueil (pas un QR par chanson — trop lourd à gérer en live)
- Double format paroles : texte responsive (principal) + PDF (complément pour musiciens)
- Deux vues distinctes musicien/public pour ne pas surcharger les non-musiciens

### Further Considerations
1. **Mode hors-ligne (PWA)** — Service Worker pour cache si lieu avec réseau faible. À confirmer.
2. **Format ChordPro vs texte brut** — ChordPro permet transposition auto mais demande un parser JS. Priorité à confirmer.
3. **Réutilisation multi-événements** — Structure "multi-soirées" possible dès le départ sans surcoût majeur. À confirmer.
