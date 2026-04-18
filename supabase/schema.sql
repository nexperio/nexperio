-- ============================================================
-- Nexperio — Schéma Supabase
-- ============================================================

-- Blog posts (migrés depuis Wix)
CREATE TABLE IF NOT EXISTS blog_posts (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  wix_id              TEXT UNIQUE,
  title               TEXT NOT NULL,
  slug                TEXT UNIQUE NOT NULL,
  excerpt             TEXT,
  content             TEXT,          -- HTML converti depuis Ricos
  cover_image_url     TEXT,
  first_published_at  TIMESTAMPTZ,
  last_published_at   TIMESTAMPTZ,
  featured            BOOLEAN DEFAULT false,
  pinned              BOOLEAN DEFAULT false,
  minutes_to_read     INT DEFAULT 1,
  category_names      TEXT[] DEFAULT '{}',
  tag_names           TEXT[] DEFAULT '{}',
  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now()
);

-- RLS: lecture publique, écriture authentifiée
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read" ON blog_posts
  FOR SELECT USING (true);

CREATE POLICY "Auth write" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated');

-- Index pour les requêtes courantes
CREATE INDEX blog_posts_slug_idx ON blog_posts (slug);
CREATE INDEX blog_posts_published_at_idx ON blog_posts (first_published_at DESC);
CREATE INDEX blog_posts_featured_idx ON blog_posts (featured);

-- Trigger updated_at automatique
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();


-- ============================================================
-- Seed — Articles Wix migrés
-- ============================================================

INSERT INTO blog_posts (
  wix_id,
  title,
  slug,
  excerpt,
  content,
  first_published_at,
  last_published_at,
  featured,
  pinned,
  minutes_to_read,
  category_names,
  tag_names
) VALUES (
  'cdb2134a-83c3-4cb7-8f8e-5442505bed45',
  'E-commerce : Et si votre croissance était freinée par l''un de ces 7 pièges invisibles ?',
  'e-commerce-et-si-votre-croissance-etait-freinee-par-les-7-pieges',
  'Le marché e-commerce français a atteint un point de bascule. En 2025, l''accélération ne suffit plus : il faut de la précision, de la résilience et une expérience client irréprochable. Chez Nexperio, on accompagne au quotidien des marques ambitieuses, et une chose revient sans cesse : les vrais blocages ne sont pas toujours là où on les cherche.',
  '<p>Le marché e-commerce français a atteint un point de bascule.</p>
<p>En 2025, l''accélération ne suffit plus : il faut de la précision, de la résilience et une expérience client irréprochable.</p>
<p>Chez Nexperio, on accompagne au quotidien des marques ambitieuses, et une chose revient sans cesse : <strong>les vrais blocages ne sont pas toujours là où on les cherche.</strong></p>
<p>C''est pour ça qu''on a décidé de créer un guide clair, actionnable, et sans langue de bois.</p>
<h2>Pourquoi ce guide ?</h2>
<p>Parce que trop d''e-commerçants investissent dans les mauvais endroits. Parce que les symptômes cachent souvent des causes plus profondes. Parce qu''un diagnostic précis vaut mieux que mille remèdes génériques.</p>
<h2>Les 7 pièges</h2>
<p>Contactez le Docteur Digital pour recevoir le guide complet et découvrir si votre business est concerné.</p>',
  '2025-04-17T15:15:09.125Z',
  '2025-04-19T13:18:24.822Z',
  true,
  false,
  2,
  ARRAY['E-commerce', 'Stratégie', 'Croissance'],
  ARRAY['e-commerce', 'conversion', 'ROI', 'stratégie', 'croissance', 'pièges']
)
ON CONFLICT (wix_id) DO UPDATE
  SET
    title               = EXCLUDED.title,
    excerpt             = EXCLUDED.excerpt,
    content             = EXCLUDED.content,
    last_published_at   = EXCLUDED.last_published_at,
    featured            = EXCLUDED.featured,
    updated_at          = now();
