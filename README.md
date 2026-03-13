# 🔥 Soirée Guitare — Feu de Camp

Site web pour la soirée guitare. Les paroles et accords sont accessibles via QR code.

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
tempo: "moyen"
difficulty: "facile"
order: 4
pdf: "no-woman-no-cry.pdf"
---

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
| `tempo`      | Vitesse du morceau                   | `lent`, `moyen` ou `rapide`          | non         |
| `difficulty` | Niveau de difficulté                 | `facile`, `moyen` ou `avancé`        | non         |
| `pdf`        | Nom du fichier PDF de la partition   | nom du fichier (ex: `mon-titre.pdf`) | non         |

### 3. Écrire les paroles

- **Accords** : entre crochets, collés au texte → `[Am]Première ligne`
- **Refrain** : entourer de `{refrain}` et `{/refrain}`
- **Lignes vides** : pour séparer les couplets, laisser une ligne vide

Exemple :

```
[Em]Couplet première [C]ligne
[G]Couplet deuxième [D]ligne

{refrain}
[C]Refrain première [G]ligne
[Am]Refrain deuxième [Em]ligne
{/refrain}

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
