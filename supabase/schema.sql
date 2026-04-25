-- ──────────────────────────────────────────────────────────────────────────
-- Nexperio · Schéma Supabase
-- À exécuter dans Supabase → SQL Editor (un seul "Run").
-- Idempotent : peut être ré-exécuté sans casser les données existantes.
-- ──────────────────────────────────────────────────────────────────────────

-- Extension pour générer des UUIDs
create extension if not exists "pgcrypto";


-- ──────────────────────────────────────────────────────────────────────────
-- Table : blog_posts
-- Stocke les articles du blog. Le HTML est dans `content` (rendu côté client).
-- ──────────────────────────────────────────────────────────────────────────

create table if not exists public.blog_posts (
  id                  uuid primary key default gen_random_uuid(),
  -- Identité
  title               text        not null,
  slug                text        not null unique,
  excerpt             text,
  content             text        not null default '',
  -- Métadonnées éditoriales
  category_names      text[]      not null default '{}',
  read_minutes        int         not null default 5,
  cover_url           text,
  cover_alt           text,
  -- Auteur (toujours le Doc, mais on prévoit l'extension)
  author_name         text        not null default 'Arnaud Guedj',
  author_role         text        not null default 'Le Docteur Digital',
  -- Publication
  status              text        not null default 'draft'
                                   check (status in ('draft', 'published', 'archived')),
  featured            boolean     not null default false,
  first_published_at  timestamptz,
  -- SEO
  seo_title           text,
  seo_description     text,
  -- Audit
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

-- Index pour les requêtes courantes
create index if not exists blog_posts_published_idx
  on public.blog_posts (first_published_at desc)
  where status = 'published';

create index if not exists blog_posts_featured_idx
  on public.blog_posts (featured)
  where featured = true and status = 'published';

create index if not exists blog_posts_categories_idx
  on public.blog_posts using gin (category_names);


-- ──────────────────────────────────────────────────────────────────────────
-- Table : rdv_requests
-- Archive des demandes de RDV envoyées via le formulaire (en plus de l'email).
-- Permet d'avoir un historique consultable dans Supabase.
-- ──────────────────────────────────────────────────────────────────────────

create table if not exists public.rdv_requests (
  id            uuid primary key default gen_random_uuid(),
  name          text        not null,
  email         text        not null,
  company       text,
  symptom       text,
  urgency       text,
  body          text,
  -- Source / tracking
  source        text        not null default 'site',
  user_agent    text,
  -- Status manuel : à mettre à jour par le Doc à la main
  status        text        not null default 'new'
                             check (status in ('new', 'contacted', 'booked', 'closed')),
  notes         text,
  created_at    timestamptz not null default now()
);

create index if not exists rdv_requests_created_idx
  on public.rdv_requests (created_at desc);

create index if not exists rdv_requests_status_idx
  on public.rdv_requests (status);


-- ──────────────────────────────────────────────────────────────────────────
-- Trigger : updated_at automatique
-- ──────────────────────────────────────────────────────────────────────────

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_blog_posts_updated_at on public.blog_posts;
create trigger set_blog_posts_updated_at
  before update on public.blog_posts
  for each row execute function public.set_updated_at();


-- ──────────────────────────────────────────────────────────────────────────
-- RLS (Row Level Security)
-- Les articles publiés sont lisibles par tout le monde (anon).
-- Les RDV ne sont accessibles qu'avec la service_role key (côté serveur).
-- ──────────────────────────────────────────────────────────────────────────

alter table public.blog_posts    enable row level security;
alter table public.rdv_requests  enable row level security;

-- Articles : lecture publique des articles publiés
drop policy if exists "Public read published posts" on public.blog_posts;
create policy "Public read published posts"
  on public.blog_posts for select
  using (status = 'published');

-- RDV : aucune policy publique → seul service_role peut lire/écrire


-- ──────────────────────────────────────────────────────────────────────────
-- Données de démarrage : 6 articles correspondant à ceux du prototype
-- (à supprimer / remplacer par les vrais articles le moment venu)
-- ──────────────────────────────────────────────────────────────────────────

insert into public.blog_posts (title, slug, excerpt, content, category_names, read_minutes, status, featured, first_published_at)
values
  (
    'L''expérience client n''est pas un sujet annexe. C''est LE sujet.',
    'experience-client-le-sujet',
    'Pourquoi 80% des refontes e-commerce ratent leur cible — et le check-up clinique en 12 points pour s''en sortir.',
    '<p>Article à compléter…</p>',
    array['eCommerce', 'CX'],
    6, 'published', true,
    '2026-04-12 09:00:00+00'
  ),
  (
    'ChatGPT en entreprise : 5 cas d''usage qui changent vraiment la donne',
    'chatgpt-entreprise-5-cas-usage',
    'Au-delà des démos. Comment intégrer l''IA générative dans le quotidien marketing, créatif et commercial.',
    '<p>Article à compléter…</p>',
    array['IA'],
    9, 'published', false,
    '2026-04-02 09:00:00+00'
  ),
  (
    'Les 7 frictions que tous les sites e-commerce sous-estiment',
    '7-frictions-sites-ecommerce',
    'Petits détails, gros dégâts. Le check-up clinique des points où le client décroche.',
    '<p>Article à compléter…</p>',
    array['CX'],
    5, 'published', false,
    '2026-03-24 09:00:00+00'
  ),
  (
    'Du transactionnel au relationnel : le pivot que tout marchand doit faire',
    'pivot-transactionnel-relationnel',
    'Vendre une fois, c''est de la vente. Vendre dix fois, c''est une stratégie. Voici comment basculer.',
    '<p>Article à compléter…</p>',
    array['Stratégie'],
    8, 'published', false,
    '2026-03-08 09:00:00+00'
  ),
  (
    'IA générative et e-commerce : par où commencer concrètement',
    'ia-generative-ecommerce-commencer',
    'Roadmap pratique en trois temps. Du POC à l''industrialisation, sans se brûler les ailes.',
    '<p>Article à compléter…</p>',
    array['IA'],
    7, 'published', false,
    '2026-02-21 09:00:00+00'
  ),
  (
    'B2B vs B2C : pourquoi votre plateforme ne peut plus être la même',
    'b2b-vs-b2c-plateforme',
    'Les attentes ont divergé. Les architectures aussi. Inventaire des choix structurants.',
    '<p>Article à compléter…</p>',
    array['eCommerce'],
    4, 'published', false,
    '2026-02-03 09:00:00+00'
  )
on conflict (slug) do nothing;


-- ──────────────────────────────────────────────────────────────────────────
-- Vue pratique : derniers articles publiés
-- ──────────────────────────────────────────────────────────────────────────

create or replace view public.v_blog_published as
  select id, title, slug, excerpt, content, category_names, read_minutes,
         cover_url, cover_alt, author_name, author_role, featured,
         first_published_at, seo_title, seo_description
  from public.blog_posts
  where status = 'published'
  order by first_published_at desc nulls last;

-- Fin du schéma.
