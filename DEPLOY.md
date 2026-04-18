# Nexperio Next.js — Guide de déploiement

## Stack
- **Framework** : Next.js 14 (App Router) + TypeScript
- **Style** : Tailwind CSS (font Prompt, couleurs #F28FE0 / #2F54DD)
- **Base de données** : Supabase (PostgreSQL)
- **Déploiement** : Vercel
- **Repo** : GitHub

---

## Étape 1 — Installer les dépendances en local

```bash
cd nexperio-next
npm install
```

---

## Étape 2 — Configurer Supabase

1. Créer un compte sur [supabase.com](https://supabase.com)
2. Créer un nouveau projet (région Europe West)
3. Aller dans **SQL Editor** → coller le contenu de `supabase/schema.sql` → **Run**
4. Récupérer les clés dans **Settings → API** :
   - `Project URL`
   - `anon public key`
5. Copier `.env.local.example` en `.env.local` et remplir :

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
```

Tester en local :
```bash
npm run dev
# → http://localhost:3000
```

---

## Étape 3 — Créer le repo GitHub

```bash
cd nexperio-next

# Initialiser git
git init
git add .
git commit -m "feat: migration Wix → Next.js Nexperio"

# Sur github.com → New repository → "nexperio-next" (privé)
git remote add origin https://github.com/VOTRE_USERNAME/nexperio-next.git
git branch -M main
git push -u origin main
```

---

## Étape 4 — Déployer sur Vercel

1. Aller sur [vercel.com](https://vercel.com) → **New Project**
2. Importer le repo GitHub `nexperio-next`
3. Dans **Environment Variables**, ajouter :
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Cliquer **Deploy** → URL automatique `nexperio-next.vercel.app`

---

## Étape 5 — Connecter le domaine www.nexperio.com

1. Dans Vercel → **Domains** → ajouter `nexperio.com` et `www.nexperio.com`
2. Dans votre registrar DNS, pointer :
   - `A` → `76.76.21.21` (Vercel IP)
   - `CNAME www` → `cname.vercel-dns.com`
3. Vercel provisionne le SSL automatiquement (Let's Encrypt)

---

## Structure du projet

```
nexperio-next/
├── app/
│   ├── layout.tsx              # Layout global (Navbar + Footer)
│   ├── page.tsx                # Accueil
│   ├── les-ordonnances/        # Ressources gratuites
│   ├── les-traitements/        # Services (eCommerce, CX, IA)
│   ├── cas-de-guerison/        # Études de cas
│   ├── le-docteur-digital/     # About
│   ├── blog/                   # Liste articles (Supabase)
│   │   └── [slug]/             # Article dynamique
│   └── rdv/                    # Formulaire consultation
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── CTASection.tsx
├── lib/
│   ├── supabase.ts             # Client + queries
│   └── types.ts                # TypeScript interfaces
└── supabase/
    └── schema.sql              # Tables + seed data
```

---

## Ajouter un article de blog

Via Supabase **Table Editor** → `blog_posts` → **Insert row**

Ou via SQL :
```sql
INSERT INTO blog_posts (title, slug, excerpt, content, first_published_at, featured, category_names)
VALUES (
  'Mon titre',
  'mon-slug-unique',
  'Résumé court...',
  '<p>Contenu HTML...</p>',
  now(),
  false,
  ARRAY['Catégorie']
);
```
