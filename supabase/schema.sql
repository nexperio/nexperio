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
-- Blog posts from Wix (French only)
INSERT INTO blog_posts (wix_id, title, slug, excerpt, cover_image_url, first_published_at, featured, minutes_to_read, category_names)
VALUES
  ('cdb2134a-83c3-4cb7-8f8e-5442505bed45', 'E-commerce : Et si votre croissance était freinée par l''un de ces 7 pièges invisibles ?', 'e-commerce-et-si-votre-croissance-etait-freinee-par-lun-de-ces-7-pieges-invisibles', 'Le marché e-commerce français a atteint un point de bascule. En 2025, l''accélération ne suffit plus : il faut de la précision, de la résilience et une expérience client irréprochable.', 'https://static.wixstatic.com/media/7f7a19_25f13f9916ce47e4a0a3b7c4998c3230~mv2.png', '2025-04-17T15:15:09.125Z', true, 2, ARRAY{"E-commerce","Stratégie"}),
  ('bb1a50b7-a7ee-4e77-945e-4821a072fdcf', 'J''ai vu des business e-commerce doubler leurs ventes en ligne en une année. Ca vous intéresse que je vous raconte ?', 'jai-vu-des-business-e-commerce-doubler-leurs-ventes-en-ligne-en-une-annee-ca-vous-interesse-que-je-vous-raconte', 'Et si la clé pour doubler vos ventes en ligne en un an tenait en un mot ? Ce témoignage révèle le secret de l''upsell utilisé dans certaines entreprises.', 'https://static.wixstatic.com/media/7f7a19_592b39f7b90946d690ac4ee11fc564e0~mv2.png', '2025-03-24T15:01:50.372Z', false, 2, ARRAY{"E-commerce","Stratégie"}),
  ('e582697e-09dd-443b-9a2e-2fc0ff4d33fd', 'Miroir, miroir, dis-moi qui aura la plus belle stratégie e-commerce dans l''industrie de la beauté...', 'miroir-miroir-dis-moi-qui-aura-la-plus-belle-strategie-e-commerce-dans-lindustrie-de-la-beaute', 'L''e-commerce beauté est en plein essor : les ventes en ligne représenteront près de 24,5 % du marché américain des cosmétiques d''ici 2028.', 'https://static.wixstatic.com/media/7f7a19_bc4ef7ce9679410ba1e29469f81c5cf3~mv2.png', '2025-03-24T15:00:35.202Z', false, 1, ARRAY{"E-commerce","Beauté"}),
  ('23b90aee-bd3c-4e40-8a09-cae43cfbdd5a', 'Un levier stratégique méconnu en e-commerce...vous voulez l''info ?', 'un-levier-strategique-meconnu-en-e-commercevous-voulez-linfo', 'Surprise : l''un des leviers les plus puissants en e-commerce se cache… dans la barre de recherche interne de votre site \!', 'https://static.wixstatic.com/media/7f7a19_4c35aff58bdb4d6fb99a0dc456068635~mv2.png', '2025-03-24T14:59:09.090Z', false, 2, ARRAY{"E-commerce","Conversion"}),
  ('e3815bbd-4619-4b37-aae2-f4123bd5c303', 'Digital River en dépôt de bilan : séisme dans le monde de l''e-commerce', 'digital-river-en-depot-de-bilan-seisme-dans-le-monde-de-le-commerce', 'Coup de tonnerre : Digital River, un pionnier de la distribution numérique et des paiements en ligne fondé en 1994, met la clé sous la porte.', 'https://static.wixstatic.com/media/7f7a19_5e84a19674a24ae4b1a468c5c0568b28~mv2.png', '2025-03-24T14:57:44.443Z', false, 2, ARRAY{"E-commerce","Actualité"}),
  ('6ca7f769-a78d-412f-b01f-8f9baf1d89be', 'Les sites ecommerce optimisés pour mobile enregistrent un taux de conversion 1,5 fois supérieur à celui du desktop \!', 'les-sites-ecommerce-optimises-pour-mobile-enregistrent-un-taux-de-conversion-15-fois-superieur-a-celui-du-desktop', 'Le m-commerce domine le monde : en 2024, 74 % des transactions e-commerce mondiales se font sur mobile. Simplifier l''expérience d''achat sur smartphone n''est plus une option.', 'https://static.wixstatic.com/media/7f7a19_6e2d082c67c947aa97bb3e16a2dc00a8~mv2.png', '2025-03-24T14:56:23.258Z', false, 1, ARRAY{"E-commerce","Mobile"}),
  ('3dda575c-3834-4634-95de-38050ff01730', 'L''expérience client : le véritable différenciateur stratégique des entreprises modernes', 'lexperience-client-le-veritable-differenciateur-strategique-des-entreprises-modernes', 'Avez-vous mesuré l''impact réel de l''expérience client sur vos résultats ? L''expérience client n''est plus un ''plus'', c''est un facteur compétitif déterminant.', 'https://static.wixstatic.com/media/7f7a19_d29f9b308d1041dfbb51dabb3920eb74~mv2.png', '2025-03-24T14:55:17.915Z', false, 1, ARRAY{"CX","Stratégie"}),
  ('ebd95586-56a8-4665-b862-7ffec2f6e223', 'Le Métavers : la licorne Tech qui louche ?', 'le-metavers-la-licorne-tech-qui-louche', 'Souvenez-vous, il y a deux ans à peine, le métavers était sur toutes les lèvres – on nous promettait des boutiques virtuelles futuristes.', 'https://static.wixstatic.com/media/7f7a19_0a390587242e4831b1174115944dbff5~mv2.png', '2025-03-24T14:54:10.899Z', false, 2, ARRAY{"Tech","Tendances"}),
  ('4e629e24-4119-4804-a525-d29772fdf07f', 'Après avoir conquis le Royaume-Uni, les États-Unis et l''Allemagne, TikTok Shop arrive en France \!', 'apres-avoir-conquis-le-royaume-uni-les-etats-unis-et-lallemagne-tiktok-shop-arrive-en-france', 'Boom \! Après avoir conquis le Royaume-Uni, les États-Unis et l''Allemagne, TikTok Shop débarque en France. Mais au fait, c''est quoi TikTok Shop ?', 'https://static.wixstatic.com/media/7f7a19_9a8f182e35c145eca9823facf2e8c780~mv2.png', '2025-03-24T14:52:32.879Z', false, 2, ARRAY{"E-commerce","Social Commerce"}),
  ('24110a7b-4450-408d-9cb2-4bc6851df6c7', 'Perplexity s''y met aussi : Perplexity Deep Research \!', 'perplexity-sy-met-aussi-perplexity-deep-research', 'Nouveau venu dans la course à l''IA : Perplexity AI lance Deep Research, un outil capable de transformer vos recherches en véritables rapports d''experts.', 'https://static.wixstatic.com/media/7f7a19_1d5db9cf5d6d4dc8b9db5a908afd5d31~mv2.png', '2025-03-24T14:51:23.288Z', false, 1, ARRAY{"IA","Outils"}),
  ('7e1908dc-945b-4fb2-bd82-226527a6299b', 'Faut-il aller gratter la Qwen de ce nouveau venu dans l''IA ?', 'faut-il-aller-gratter-la-qwen-de-ce-nouveau-venu-dans-lia', 'Alibaba vient de lancer un nouveau modèle d''IA baptisé Qwen. Ce ''petit nouveau'' pourrait bien rebattre les cartes du secteur.', 'https://static.wixstatic.com/media/7f7a19_6246c7460bca4e65bc06914a8a46ad31~mv2.png', '2025-03-24T14:49:56.814Z', false, 1, ARRAY{"IA","Actualité"}),
  ('5ee1ff67-bb7a-49bc-926c-5ead5944d656', 'Le commerce social en 2025 : et si c''était LA transformation qui allait tout chambouler ?', 'le-commerce-social-en-2025-et-si-cetait-la-transformation-qui-allait-tout-chambouler', 'En 2025, le commerce social pourrait bien tout chambouler. Les prévisions sont vertigineuses : on parle d''un marché mondial de 1 200 milliards de dollars.', 'https://static.wixstatic.com/media/7f7a19_61dab91811154ab7807f2bc91208b731~mv2.png', '2025-03-24T14:48:24.662Z', false, 2, ARRAY{"E-commerce","Social Commerce"}),
  ('ef3b078e-2bb8-4ee4-9f46-6ef9bd5bcde4', 'L''Empire contre-attaque \! La bataille autour de l''Intelligence Artificielle continue...', 'lempire-contre-attaque-la-bataille-autour-de-lintelligence-artificielle-continue', 'La saga de l''IA continue : on assiste à un véritable Star Wars entre titans. D''un côté, OpenAI et les acteurs occidentaux ; de l''autre, DeepSeek AI en Chine.', 'https://static.wixstatic.com/media/7f7a19_8e5099ee260546f89a88661d5bae5d50~mv2.png', '2025-03-24T14:47:29.329Z', false, 1, ARRAY{"IA","Actualité"}),
  ('aaefe6f2-03aa-4a38-9f32-098d471c53f9', 'Deepseek : j''y mets aussi mon grain de sel', 'deepseek-jy-mets-aussi-mon-grain-de-sel', 'Tout le monde en parle. L''annonce de ce nouveau mastodonte de l''IA chinoise a fait vaciller la bourse.', 'https://static.wixstatic.com/media/7f7a19_3a374e4eba5746469292b26d03ac1185~mv2.png', '2025-03-24T14:45:55.438Z', false, 2, ARRAY{"IA","Actualité"}),
  ('05ec25c4-5e72-49da-9371-ed94c6d29eca', 'Techno du jour : Perplexity vient de sortir son propre assistant autonome \!', 'techno-du-jour-perplexity-vient-de-sortir-son-propre-assistant-autonome', 'Perplexity AI vient de sortir son assistant autonome sur mobile (pour l''instant uniquement sur Android).', 'https://static.wixstatic.com/media/7f7a19_b2d1a4e5b9074a6b9f3386957667e70e~mv2.png', '2025-03-24T14:44:29.111Z', false, 1, ARRAY{"IA","Outils"}),
  ('29717c49-06cc-4dad-95dc-9778415cdb73', 'Aujourd''hui, parlons de Lighthouse', 'aujourdhui-parlons-de-lighthouse', 'Google Lighthouse : cet utilitaire gratuit est tout simplement indispensable pour analyser votre site web et le propulser au sommet du référencement.', 'https://static.wixstatic.com/media/7f7a19_675e38bf6d9d449c857c517316d617b3~mv2.png', '2025-03-24T14:42:46.919Z', false, 1, ARRAY{"SEO","Outils"}),
  ('9487ec47-e1a3-41d6-8fe0-2d44503ddd9c', 'Les espaces sur Perplexity : comment contextualiser vos recherches', 'les-espaces-sur-perplexity-comment-contextualiser-vos-recherches', 'Marre de recommencer à zéro à chaque requête ? Perplexity introduit une fonctionnalité permettant de contextualiser vos recherches sur la durée.', 'https://static.wixstatic.com/media/7f7a19_eef8e0acd04348b1929a664f25b50754~mv2.png', '2025-03-24T14:40:34.702Z', false, 2, ARRAY{"IA","Outils"}),
  ('18356f2e-30e6-47c2-bd77-cb35e46bccf6', 'Colossal \! 500 milliards de dollars pour le projet Stargate en Intelligence Artificielle', 'colossal-500-milliards-de-dollars-pour-le-projet-stargate-en-intelligence-artificielle', '500 milliards de dollars \! Donald Trump n''y va pas avec le dos de la cuillère. Son projet Stargate prévoit cette somme pharaonique pour propulser les États-Unis en leader de l''IA.', 'https://static.wixstatic.com/media/7f7a19_f8db34b623c64b6484a4cb4badd69c1a~mv2.png', '2025-03-24T14:33:00.794Z', false, 1, ARRAY{"IA","Actualité"}),
  ('38ad6c40-c317-477a-a6a7-65f462904561', 'Mettons les produits en ligne et puis on verra bien si ça se vend — la stratégie ecommerce a bien changé', 'mettons-les-produits-en-ligne-et-puis-on-verra-bien-si-ca-se-vend-la-strategie-ecommerce-a-bien-change', 'Pendant des années, beaucoup d''entreprises voyaient l''e-commerce comme un petit projet à côté. Cette époque est révolue.', 'https://static.wixstatic.com/media/7f7a19_0a7a0e686b0b4c43bb6fc78c56e579c0~mv2.png', '2025-01-16T07:42:21.496Z', false, 12, ARRAY{"E-commerce","Stratégie"}),
  ('92217015-ffc9-4f62-bec9-1a0f8ca15e81', 'L''importance d''être accompagné par une bonne agence en stratégie digitale', 'limportance-detre-accompagne-par-une-bonne-agence-en-strategie-digitale', 'Dans un monde où le digital est omniprésent, les entreprises doivent adopter des stratégies numériques efficaces pour rester compétitives.', 'https://static.wixstatic.com/media/7f7a19_48cdafd5e8ef4b11ab37a846131a5e13~mv2.png', '2024-12-04T17:26:05.386Z', false, 4, ARRAY{"Stratégie","Digital"}),
  ('d4b11309-e48e-414f-9a54-3f6d8001dc9d', 'La réalité augmentée : quand l''essayage virtuel booste les ventes de 94% selon Shopify \!', 'la-realite-augmentee-quand-lessayage-virtuel-booste-les-ventes-de-94-selon-shopify', 'La réalité augmentée dope les ventes \! Grâce à l''essayage virtuel en RA, certains magasins constatent des taux de conversion frôlant les 90 %.', 'https://static.wixstatic.com/media/7f7a19_8daa23a4c8634d1e985477fea371d733~mv2.png', '2024-11-25T16:33:46.298Z', false, 2, ARRAY{"E-commerce","Innovation"}),
  ('8f2e5200-20b0-4a46-8b09-ea6c92b910a8', 'Le commerce social : la nouvelle poule aux oeufs d''or du retail \!', 'le-commerce-social-la-nouvelle-poule-aux-oeufs-dor-du-retail', 'Accrochez-vous : 1 200 milliards de dollars – c''est le marché mondial prévu du social commerce en 2025.', 'https://static.wixstatic.com/media/7f7a19_842e9b76bb2345a5891ab242cf053a0b~mv2.png', '2024-11-25T16:27:33.030Z', false, 2, ARRAY{"E-commerce","Social Commerce"})
ON CONFLICT (wix_id) DO UPDATE SET
  title = EXCLUDED.title, slug = EXCLUDED.slug, excerpt = EXCLUDED.excerpt,
  cover_image_url = EXCLUDED.cover_image_url, first_published_at = EXCLUDED.first_published_at,
  featured = EXCLUDED.featured, minutes_to_read = EXCLUDED.minutes_to_read,
  category_names = EXCLUDED.category_names;