# 🔥 Soirée Guitare — Feu de Camp

Site web pour la soirée guitare du **6 juin 2026**. Les paroles et accords sont accessibles via QR code.

## Fonctionnalités

- **Double vue** : mode Public (paroles seules) et mode Musicien (accords, métadonnées, transposition)
- **Transposition** : change la tonalité en temps réel, la tonalité affichée suit
- **Auto-scroll** : défilement automatique à 5 vitesses (0.5x → 3x), compatible iOS/Android
- **Sections structurelles** : Intro, Couplet, Pré-refrain, Refrain, Outro — visibles dans les paroles
- **Capo bien visible** : bannière ambrée impossible à rater en mode Musicien
- **BPM & signature rythmique** : tempo réel affiché (ex: 87 bpm, 4/4)
- **Wake Lock** : l'écran reste allumé sur les pages chanson (plus besoin de toucher l'écran en plein morceau)
- **Navigation** : chanson précédente / suivante, retour à la set-list
- **Partitions PDF** : lien direct vers les partitions en mode Musicien

## Ajouter une chanson

### 1. Créer le fichier de paroles

Créer un fichier `.md` dans le dossier `src/content/chansons/`.

**Nom du fichier** : en minuscules, sans accents, avec des tirets. Exemple : `no-woman-no-cry.md`

**Contenu du fichier** — copier ce template et l'adapter :

```markdown
---
title: "No Woman No Cry"
artist: "Bob Marley"
key: "C"
capo: 0
bpm: 80
timeSig: "4/4"
tempo: "moyen"
difficulty: "facile"
order: 4
pdf: "no-woman-no-cry.pdf"
---

{section Intro}
[C] [G] [Am] [F]

{section Couplet 1}
[C]No, [G]woman, no [Am]cry [F]
[C]No, [G]woman, no [Am]cry [F]

{refrain}
[C]Everything's gonna [G]be alright
[Am]Everything's gonna [F]be alright
{/refrain}
```

### 2. Remplir les métadonnées (entre les `---`)

| Champ        | Description                          | Valeurs possibles                    | Obligatoire |
|--------------|--------------------------------------|--------------------------------------|-------------|
| `title`      | Titre de la chanson                  | texte libre                          | ✅ oui      |
| `artist`     | Artiste / groupe                     | texte libre                          | ✅ oui      |
| `key`        | Tonalité                             | `C`, `D`, `Em`, `F#m`, `Bb`, etc.   | ✅ oui      |
| `order`      | Position dans la set-list            | un numéro (1, 2, 3...)              | ✅ oui      |
| `capo`       | Position du capodastre              | `0` à `12` (défaut : `0`)           | non         |
| `bpm`        | Tempo en battements par minute       | un numéro (ex: `120`)               | non         |
| `timeSig`    | Signature rythmique                  | `4/4`, `3/4`, `6/8`, etc. (défaut : `4/4`) | non   |
| `tempo`      | Vitesse indicative                   | `lent`, `moyen` ou `rapide`          | non         |
| `difficulty` | Niveau de difficulté                 | `facile`, `moyen` ou `avancé`        | non         |
| `pdf`        | Nom du fichier PDF de la partition   | nom du fichier (ex: `mon-titre.pdf`) | non         |

### 3. Écrire les paroles

- **Accords** : entre crochets, collés au texte → `[Am]Première ligne`
- **Sections** : `{section Nom}` pour marquer Intro, Couplet, Pont, Outro, etc.
- **Refrain** : entourer de `{refrain}` et `{/refrain}` (le label "Refrain" s'affiche automatiquement)
- **Lignes vides** : pour séparer les couplets, laisser une ligne vide

Exemple :

```
{section Intro}
[Em] [G] [D] [A7sus4]

{section Couplet 1}
[Em]Couplet première [C]ligne
[G]Couplet deuxième [D]ligne

{refrain}
[C]Refrain première [G]ligne
[Am]Refrain deuxième [Em]ligne
{/refrain}

{section Couplet 2}
[Em]Deuxième couplet [C]ici
```

> ⚠️ Les accords sont **uniquement visibles en mode Musicien** sur le site. Le public ne voit que le texte.

### 4. Ajouter la partition PDF (optionnel)

Si tu as un PDF de la partition :

1. Place le fichier dans le dossier `public/partitions/`
2. Le nom du fichier doit correspondre **exactement** à la valeur du champ `pdf` dans les métadonnées

```
public/
└── partitions/
    └── no-woman-no-cry.pdf   ← même nom que pdf: "no-woman-no-cry.pdf"
```

### Résumé : checklist pour ajouter une chanson

- [ ] Créer `src/content/chansons/ma-chanson.md` avec le template ci-dessus
- [ ] Remplir les métadonnées (title, artist, key, order au minimum)
- [ ] Écrire les paroles avec les accords entre `[crochets]`
- [ ] (Optionnel) Déposer le PDF dans `public/partitions/`
- [ ] Vérifier que le `order` ne fait pas doublon avec une autre chanson

## Lancer le site en local

```bash
npm run dev
```

Le site est accessible sur `http://localhost:4321/soireeGuitare/`

## Construire le site

```bash
npm run build
```

Le site est généré dans le dossier `dist/`.
