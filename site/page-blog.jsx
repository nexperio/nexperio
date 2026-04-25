// page-blog.jsx
const posts = [
  { num: '001', cat: 'eCommerce', date: '12 AVR. 2026', read: '6 min', title: "L'expérience client n'est pas un sujet annexe. C'est LE sujet.", excerpt: "Pourquoi 80% des refontes e-commerce ratent leur cible — et comment éviter le piège du \"redesign cosmétique\"." },
  { num: '002', cat: 'IA', date: '02 AVR. 2026', read: '9 min', title: "ChatGPT en entreprise : 5 cas d'usage qui changent vraiment la donne", excerpt: "Au-delà des démos. Comment intégrer l'IA générative dans vos workflows quotidiens, sans tomber dans le gadget." },
  { num: '003', cat: 'CX', date: '24 MAR. 2026', read: '5 min', title: 'Les 7 frictions que tous les sites e-commerce sous-estiment', excerpt: 'Petits détails, gros dégâts. Le check-up clinique des points de douleur invisibles.' },
  { num: '004', cat: 'Stratégie', date: '08 MAR. 2026', read: '8 min', title: "Du transactionnel au relationnel : le pivot que tout marchand doit faire", excerpt: 'Vendre une fois, c\'est de la vente. Vendre dix fois, c\'est de la marque. Le différentiel se joue dans la relation.' },
  { num: '005', cat: 'IA', date: '21 FÉV. 2026', read: '7 min', title: 'IA générative et e-commerce : par où commencer concrètement', excerpt: 'Roadmap pratique en trois temps. Du POC à l\'industrialisation, sans brûler les étapes.' },
  { num: '006', cat: 'eCommerce', date: '03 FÉV. 2026', read: '4 min', title: "B2B vs B2C : pourquoi votre plateforme ne peut plus être la même", excerpt: 'Les attentes ont divergé. Les architectures aussi devraient.' },
];

function BlogPage({ onNavigate }) {
  const [filter, setFilter] = React.useState('Tous');
  const cats = ['Tous', 'eCommerce', 'CX', 'IA', 'Stratégie'];
  const visible = filter === 'Tous' ? posts : posts.filter(p => p.cat === filter);

  return (
    <div className="page-enter">
      <section className="section" style={{ paddingTop: 180, borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 24 }}>Le carnet de bord</p>
          <h1 className="display" style={{ maxWidth: 1100, marginBottom: 32 }}>
            Blog du <span className="serif accent">Docteur Digital.</span>
          </h1>
          <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 22, color: 'var(--ink-soft)', maxWidth: 720, lineHeight: 1.5 }}>
            Réflexions, prescriptions, retours d'expérience. Pour soigner votre digital — et pas juste cocher des cases.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal>
            <div onClick={() => alert('Article : ' + posts[0].title)} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 0, border: '1px solid var(--line)', cursor: 'pointer' }} className="cx-grid">
              <div style={{
                aspectRatio: '16/10',
                background: 'linear-gradient(135deg, var(--navy) 0%, var(--orange) 200%)',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
                  <MoleculeLogo size={500} />
                </div>
                <p style={{ position: 'absolute', top: 24, left: 24, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em' }}>
                  À LA UNE
                </p>
                <p style={{ position: 'absolute', bottom: 24, left: 24, right: 24, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em' }}>
                  [ ILLUSTRATION ARTICLE ]
                </p>
              </div>
              <div style={{ padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                  <span className="tag">{posts[0].cat}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.12em' }}>
                    {posts[0].date} · {posts[0].read}
                  </span>
                </div>
                <h2 style={{ fontFamily: "'Prompt', sans-serif", fontWeight: 700, fontSize: 'clamp(28px, 3.4vw, 40px)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 16 }}>
                  {posts[0].title}
                </h2>
                <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: 24 }}>
                  {posts[0].excerpt}
                </p>
                <span style={{ fontFamily: "'Prompt', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--orange)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Lire l'article →
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line)' }}>
              {cats.map(c => (
                <button key={c} onClick={() => setFilter(c)} style={{
                  padding: '10px 18px', border: '1px solid', borderColor: filter === c ? 'var(--orange)' : 'var(--line)',
                  background: filter === c ? 'var(--orange)' : 'transparent',
                  color: filter === c ? '#fff' : 'var(--ink)',
                  fontFamily: "'Prompt', sans-serif", fontSize: 13, fontWeight: 500,
                  letterSpacing: '0.05em', cursor: 'pointer', transition: 'all 200ms',
                }}>{c}</button>
              ))}
            </div>
          </Reveal>

          <Reveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 0, borderTop: '1px solid var(--line)' }}>
              {visible.slice(1).map((p, i) => (
                <div key={p.num} onClick={() => alert('Article : ' + p.title)} style={{
                  padding: 32, borderBottom: '1px solid var(--line)',
                  borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--line)' : 'none',
                  cursor: 'pointer', transition: 'background 250ms',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-soft)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                    <span className="tag">{p.cat}</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.12em' }}>
                      {p.num}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Prompt', sans-serif", fontWeight: 700, fontSize: 22, lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: 16 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: 24 }}>
                    {p.excerpt}
                  </p>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.12em' }}>
                    {p.date} · {p.read}
                  </p>
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

window.BlogPage = BlogPage;
