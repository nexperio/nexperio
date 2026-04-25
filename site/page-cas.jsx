// page-cas.jsx — Cas de guérison
const cases = [
  {
    title: "Du transactionnel au relationnel",
    sub: "Comment passer d'un site de vente à une vraie marque engagée",
    sector: "Électronique grand public",
    context: "Un e-commerçant spécialisé en équipements électroniques. Objectif : sortir du simple modèle transactionnel pour bâtir une relation durable avec ses clients stratégiques.",
    challenge: "Développer l'engagement et la valeur des clients existants. Créer une véritable proximité avec les segments prioritaires.",
    treatment: [
      { step: 'Diagnostic', items: ['Analyse poussée des segments clients', 'Cartographie des moments-clés du parcours', 'Identification des leviers d\'engagement'] },
      { step: 'Prescription', items: ['Refonte des parcours par segment', 'Personnalisation campagnes & merchandising', 'Programmes de fidélisation innovants'] },
      { step: 'Mise en œuvre', items: ['Formation équipes', 'Tests A/B continus', 'Optimisation itérative'] },
    ],
    results: [
      { value: '+120%', label: "Inscriptions clients vs N-1" },
      { value: '+25%', label: 'Taux de conversion' },
      { value: '+20%', label: 'Retour visiteurs' },
      { value: '+18%', label: 'NPS dépassé' },
    ],
    conclusion: "Pas de recette miracle. Des tests, des ajustements, de la rigueur. Mais au final : une progression nette sur tous les KPIs vitaux — preuve qu'un modèle relationnel bien piloté crée bien plus qu'une simple vente.",
  },
  {
    title: "Quand le social booste l'e-commerce",
    sub: "Transformation digitale d'une marque de mode",
    sector: "Mode / chaussures",
    context: "Une marque de chaussures mode avec une forte audience sur les réseaux… mais des ventes en ligne décevantes. Le trafic était là, pas la conversion.",
    challenge: "Aligner l'expérience client entre les réseaux sociaux, le site e-commerce et les points de vente. Faire levier sur le potentiel social pour générer du chiffre.",
    treatment: [
      { step: 'Diagnostic', items: ['Audit complet stratégie digitale', 'Analyse leviers d\'influence', 'Parcours client omnicanal'] },
      { step: 'Prescription', items: ['Refonte architecture e-commerce', 'Intégration contenu social', 'Unification CRM'] },
      { step: 'Mise en œuvre', items: ['Formation équipes', 'Optimisation merchandising', 'Pilotage data-driven'] },
    ],
    results: [
      { value: '+100%', label: 'Rendez-vous pop-up stores' },
      { value: '+35%', label: 'Ventes en 6 mois' },
      { value: '=0€', label: 'Budget marketing additionnel' },
      { value: '✓', label: 'Stocks optimisés' },
    ],
    conclusion: "Un bel exemple de synergie entre contenu social, e-commerce et retail physique : +35 % de ventes en seulement 6 mois sans augmenter le budget marketing.",
  },
];

function CasPage({ onNavigate }) {
  return (
    <div className="page-enter">
      <section className="section" style={{ paddingTop: 180, borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 24 }}>Preuves cliniques</p>
          <h1 className="display" style={{ maxWidth: 1100, marginBottom: 32 }}>
            Cas de <span className="serif accent">guérison.</span>
          </h1>
          <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 22, color: 'var(--ink-soft)', maxWidth: 720, lineHeight: 1.5 }}>
            Comprendre l'expertise, les problématiques traitées, la méthode de travail. Et les résultats — chiffrés.
          </p>
        </div>
      </section>

      {cases.map((c, idx) => (
        <section key={idx} className="section" style={{ background: idx % 2 === 0 ? 'var(--bg)' : 'var(--bg-soft)' }}>
          <div className="container">
            <Reveal>
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32, marginBottom: 48 }} className="treat-head">
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: 'var(--orange)', letterSpacing: '0.18em' }}>
                  CASE / 0{idx + 1}
                </div>
                <div>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-mute)', marginBottom: 16 }}>
                    {c.sector}
                  </p>
                  <h2 style={{ fontFamily: "'Prompt', sans-serif", fontWeight: 700, fontSize: 'clamp(32px, 4.5vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: 16, maxWidth: 900 }}>
                    {c.title}
                  </h2>
                  <p className="serif" style={{ fontSize: 'clamp(20px, 2.4vw, 28px)', color: 'var(--ink-soft)', maxWidth: 800 }}>
                    {c.sub}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Results bar */}
            <Reveal>
              <div style={{ background: 'var(--navy)', color: '#fff', padding: '40px 32px', marginBottom: 48, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', right: -40, top: -40, opacity: 0.08 }}>
                  <MoleculeLogo size={240} />
                </div>
                <p className="eyebrow" style={{ color: '#ff6600', marginBottom: 24, position: 'relative' }}>
                  Résultats cliniques
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 32, position: 'relative' }}>
                  {c.results.map((r, i) => (
                    <div key={i}>
                      <p style={{ fontFamily: "'Prompt', sans-serif", fontWeight: 700, fontSize: 'clamp(36px, 5vw, 64px)', color: '#ff6600', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 8 }}>
                        {r.value}
                      </p>
                      <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 48 }} className="cx-grid">
                <div style={{ background: 'var(--bg)', border: '1px solid var(--line)', padding: 32 }}>
                  <p className="eyebrow" style={{ marginBottom: 16 }}>Contexte</p>
                  <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.6 }}>{c.context}</p>
                </div>
                <div style={{ background: 'rgba(255,102,0,0.06)', border: '1px solid rgba(255,102,0,0.2)', padding: 32 }}>
                  <p className="eyebrow" style={{ marginBottom: 16 }}>Enjeu vital</p>
                  <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 16, color: 'var(--ink)', lineHeight: 1.6 }}>{c.challenge}</p>
                </div>
              </div>
            </Reveal>

            <Reveal stagger>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 32 }}>
                {c.treatment.map((t, i) => (
                  <div key={t.step} style={{ background: 'var(--bg)', border: '1px solid var(--line)', padding: 28 }}>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.18em', marginBottom: 12 }}>
                      ÉTAPE 0{i + 1}
                    </p>
                    <h3 style={{ fontFamily: "'Prompt', sans-serif", fontWeight: 700, fontSize: 20, color: 'var(--orange)', marginBottom: 20 }}>
                      {t.step}
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {t.items.map((item, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontFamily: "'Prompt', sans-serif", fontSize: 14, color: 'var(--ink-soft)', padding: '6px 0', lineHeight: 1.5 }}>
                          <span style={{ color: 'var(--orange)', flexShrink: 0 }}>→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div style={{ borderLeft: '4px solid var(--orange)', paddingLeft: 24, maxWidth: 900 }}>
                <p className="eyebrow" style={{ marginBottom: 12 }}>Conclusion</p>
                <p className="serif" style={{ fontSize: 'clamp(20px, 2.4vw, 28px)', color: 'var(--ink)', lineHeight: 1.4 }}>
                  {c.conclusion}
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

window.CasPage = CasPage;
