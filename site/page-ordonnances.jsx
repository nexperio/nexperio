// page-ordonnances.jsx
const resources = [
  { num: '01', icon: '📋', title: 'La formule magique', tag: 'Guide', desc: "Pour tout comprendre de l'ecommerce et revenir aux fondamentaux. Le guide complet du Docteur Digital." },
  { num: '02', icon: '📖', title: 'Le glossaire', tag: 'Référence', desc: "Pour savoir de quoi l'on parle. Les termes clés du digital décortiqués." },
  { num: '03', icon: '📕', title: 'Le livre blanc des 7 pièges', tag: 'Livre blanc', desc: "À mettre dans toutes les mains des ecommerçants. Les erreurs fatales et comment les éviter.", featured: true },
  { num: '04', icon: '🤖', title: "Le B-A BA de l'IA en 2025", tag: 'Guide IA', desc: "L'indispensable pour comprendre l'IA en 2025. Démystifier, comprendre, adopter intelligemment." },
];

function OrdonnancesPage({ onNavigate }) {
  return (
    <div className="page-enter">
      <section className="section" style={{ paddingTop: 180, borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 24 }}>Ressources gratuites</p>
          <h1 className="display" style={{ maxWidth: 1100, marginBottom: 32 }}>
            Les <span className="serif accent">ordonnances</span><br/>du Docteur Digital.
          </h1>
          <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 22, color: 'var(--ink-soft)', maxWidth: 720, lineHeight: 1.5, marginBottom: 16 }}>
            Parce que l'e-commerce, sans cadrage médical, c'est comme une chirurgie sans anesthésie : douloureux et risqué.
          </p>
          <p className="serif" style={{ fontSize: 'clamp(20px, 2.4vw, 28px)', color: 'var(--orange)', maxWidth: 800 }}>
            Vous voulez des résultats ? Arrêtez le bricolage.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <Reveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
              {resources.map(r => (
                <div key={r.num} style={{
                  background: 'var(--bg)', padding: 40, position: 'relative',
                  border: r.featured ? '2px solid var(--orange)' : '1px solid var(--line)',
                  transition: 'transform 350ms, box-shadow 350ms',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px -20px rgba(10,34,56,0.18)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  {r.featured && (
                    <div style={{ position: 'absolute', top: -12, left: 24, background: 'var(--orange)', color: '#fff', padding: '4px 12px', fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.18em' }}>
                      INCONTOURNABLE
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                    <span style={{ fontSize: 48, lineHeight: 1 }}>{r.icon}</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--ink-mute)', letterSpacing: '0.18em' }}>RX-{r.num}</span>
                  </div>
                  <span className="tag" style={{ marginBottom: 16, display: 'inline-block' }}>{r.tag}</span>
                  <h2 style={{ fontFamily: "'Prompt', sans-serif", fontWeight: 700, fontSize: 28, marginBottom: 16, letterSpacing: '-0.01em' }}>
                    {r.title}
                  </h2>
                  <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: 32 }}>
                    {r.desc}
                  </p>
                  <button onClick={() => onNavigate('rdv')} className="btn btn-primary" style={{ padding: '14px 24px', fontSize: 11 }}>
                    Recevoir l'ordonnance <span className="arrow">→</span>
                  </button>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

window.OrdonnancesPage = OrdonnancesPage;
