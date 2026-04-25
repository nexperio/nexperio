// page-traitements.jsx
const treatments = [
  {
    id: 'ecommerce',
    num: '01',
    tag: 'eCommerce B2B et B2C',
    subtitle: 'Votre catalogue en perfusion digitale',
    description: "De la définition du protocole stratégique à l'exécution opérationnelle, chaque étape est calibrée au scalpel. On injecte les bonnes doses d'optimisation sur vos canaux d'acquisition.",
    result: 'Un cœur de croissance qui bat plus vite, un ROI en pleine forme.',
    steps: [
      { label: 'Audit & Vision stratégique', items: ['Analyse approfondie du modèle économique', 'Stratégie : objectifs ambitieux et atteignables', 'Roadmap digitale co-construite'] },
      { label: 'Excellence opérationnelle', items: ['UX optimisée sur tous les points de contact', 'Leviers d\'acquisition performants', 'Conversion : merchandising, pricing, promotions'] },
      { label: 'Performance durable', items: ['Stratégies de fidélisation innovantes', 'Pilotage par indicateurs', 'Stack technologique adaptée'] },
    ],
  },
  {
    id: 'cx',
    num: '02',
    tag: 'Expérience Client',
    subtitle: 'Bilan clinique du parcours utilisateur',
    description: 'On détecte chaque point de friction comme un foyer infectieux. On prescrit et implémente les antidotes sur-mesure.',
    result: 'Satisfaction renforcée. Engagement réanimé. Fidélisation garantie.',
    steps: [
      { label: 'Optimisation data-driven', items: ['Élimination des frictions à chaque étape', 'Acquisition des clients idéaux', 'Conversion : intérêt → action', 'Fidélisation durable'] },
      { label: 'Stratégie conversationnelle omnicanale', items: ['Dialogue personnalisé', 'Marketing relationnel (eCRM)', 'Réseaux, SMS, WhatsApp'] },
      { label: 'Mesure & Pilotage', items: ['NPS (Net Promoter Score)', 'Reporting des KPIs satisfaction', 'Optimisation itérative continue'] },
    ],
  },
  {
    id: 'ia',
    num: '03',
    tag: 'Intelligence Artificielle',
    subtitle: "Programme intensif d'acculturation",
    description: 'Webinaires d\'introduction, ateliers pratiques, diagnostic personnalisé "Docteur Digital", bootcamp immersif. ChatGPT, génération d\'images, calendrier éditorial IA, workflows sur-mesure.',
    result: "Chaque session est un acte opératoire pour implanter l'IA dans vos process.",
    steps: [
      { label: 'Acculturation des équipes', items: ['Sessions interactives sur l\'IA générative', 'Applications dans l\'expérience client', 'Intégration aux technologies eCommerce'] },
      { label: 'Implémentation', items: ['Évaluation des opportunités', 'Optimisation itérative', 'Maximisation du ROI de l\'IA'] },
    ],
  },
];

function TraitementsPage({ onNavigate }) {
  return (
    <div className="page-enter">
      <section className="section" style={{ paddingTop: 180, borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 24 }}>La pharmacopée Nexperio</p>
          <h1 className="display" style={{ maxWidth: 1100, marginBottom: 32 }}>
            Nos traitements <span className="serif accent">sur mesure.</span>
          </h1>
          <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 22, color: 'var(--ink-soft)', maxWidth: 720, lineHeight: 1.5 }}>
            Pour recouvrer la santé de votre eCommerce, guérir votre expérience client et vous vacciner à l'Intelligence Artificielle.
          </p>
        </div>
      </section>

      {treatments.map((t, idx) => (
        <section key={t.id} id={t.id} className="section" style={{ background: idx % 2 === 0 ? 'var(--bg)' : 'var(--bg-soft)' }}>
          <div className="container">
            <Reveal>
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32, marginBottom: 56 }} className="treat-head">
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: 'var(--orange)', letterSpacing: '0.18em' }}>
                  / {t.num}
                </div>
                <div>
                  <span className="tag" style={{ marginBottom: 16, display: 'inline-block' }}>{t.tag}</span>
                  <h2 className="display-2" style={{ marginBottom: 24, maxWidth: 800 }}>
                    {t.subtitle}
                  </h2>
                  <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 18, color: 'var(--ink-soft)', maxWidth: 720, lineHeight: 1.6, marginBottom: 16 }}>
                    {t.description}
                  </p>
                  <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 16, fontWeight: 600, color: 'var(--orange)', maxWidth: 720, lineHeight: 1.5 }}>
                    → {t.result}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal stagger>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
                {t.steps.map((step, i) => (
                  <div key={step.label} style={{
                    background: 'var(--bg)', border: '1px solid var(--line)', padding: 32,
                    transition: 'border-color 250ms, transform 350ms',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.18em', marginBottom: 24 }}>
                      ÉTAPE {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 style={{ fontFamily: "'Prompt', sans-serif", fontWeight: 700, fontSize: 22, marginBottom: 24, letterSpacing: '-0.01em' }}>
                      {step.label}
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {step.items.map((item, j) => (
                        <li key={j} style={{
                          display: 'flex', alignItems: 'flex-start', gap: 10,
                          fontFamily: "'Prompt', sans-serif", fontSize: 14, color: 'var(--ink-soft)',
                          padding: '8px 0', borderBottom: j < step.items.length - 1 ? '1px solid var(--line)' : 'none',
                          lineHeight: 1.5,
                        }}>
                          <span style={{ color: 'var(--orange)', flexShrink: 0, marginTop: 2 }}>→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

window.TraitementsPage = TraitementsPage;
