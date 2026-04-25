// Home page — Nexperio
const { useEffect, useRef, useState } = React;

function HomePage({ onNavigate, heroVariant = 'editorial' }) {
  return (
    <div className="page-enter">
      {heroVariant === 'editorial' && <HeroEditorial onNavigate={onNavigate} />}
      {heroVariant === 'molecular' && <HeroMolecular onNavigate={onNavigate} />}
      {heroVariant === 'manifesto' && <HeroManifesto onNavigate={onNavigate} />}
      <MarqueeSection />
      <ManifestoSection />
      <CXSection onNavigate={onNavigate} />
      <ServicesSection onNavigate={onNavigate} />
      <TestimonialSection onNavigate={onNavigate} />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

// ─────────── Hero variant 1: Editorial — large type, big number ───────────
function HeroEditorial({ onNavigate }) {
  const [parallax, setParallax] = useState(0);
  useEffect(() => {
    const onScroll = () => setParallax(Math.min(window.scrollY * 0.3, 200));
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', paddingTop: 100, overflow: 'hidden' }}>
      {/* Floating molecule decoration */}
      <div style={{
        position: 'absolute', right: '-8%', top: '15%',
        transform: `translateY(${-parallax}px) rotate(${parallax * 0.3}deg)`,
        opacity: 0.85, pointerEvents: 'none',
      }}>
        <MoleculeLogo size={620} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <p className="eyebrow" style={{ marginBottom: 32 }}>
          <span className="pulse-dot" style={{ marginRight: 4 }} />
          Bienvenue à la clinique Nexperio
        </p>

        <h1 className="display" style={{ maxWidth: 1100, marginBottom: 40 }}>
          Je ne fais pas <br />
          du conseil. <span className="serif accent">Je soigne.</span>
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, 380px)', gap: 64, alignItems: 'end', marginBottom: 56 }} className="hero-grid">
          <div>
            <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 22, fontWeight: 500, color: 'var(--ink)', maxWidth: 560, lineHeight: 1.4, marginBottom: 16 }}>
              Trafic qui stagne. Conversions qui patinent. Clients qui décrochent.
            </p>
            <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 17, color: 'var(--ink-soft)', maxWidth: 560, lineHeight: 1.6 }}>
              L'e-commerce est un organisme vivant. Quand il va mal, il faut plus qu'un "avis". Il faut un <span style={{ color: 'var(--orange)', fontWeight: 600 }}>diagnostic</span>. Et un vrai <span style={{ color: 'var(--orange)', fontWeight: 600 }}>traitement</span>.
            </p>
          </div>

          <div style={{ borderLeft: '2px solid var(--orange)', paddingLeft: 24 }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-mute)', marginBottom: 12 }}>
              Mon métier
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Stratégie e-commerce',
                'Expérience client',
                'Conversion & fidélisation',
                'Usage opérationnel de l\'IA',
              ].map((item, i) => (
                <li key={i} style={{
                  fontFamily: "'Prompt', sans-serif", fontSize: 14, color: 'var(--ink)',
                  padding: '8px 0', borderBottom: i < 3 ? '1px solid var(--line)' : 'none',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <span style={{ color: 'var(--orange)', fontFamily: 'monospace', fontSize: 12 }}>0{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <button onClick={() => onNavigate('rdv')} className="btn btn-primary">
            Prendre rendez-vous <span className="arrow">→</span>
          </button>
          <button onClick={() => onNavigate('traitements')} className="btn btn-outline">
            Voir les traitements
          </button>
        </div>

        <div style={{
          position: 'absolute', bottom: 40, right: 0,
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
          letterSpacing: '0.18em', color: 'var(--ink-mute)',
          writingMode: 'vertical-rl', transform: 'rotate(180deg)',
        }}>
          NEXPERIO · CLINIQUE DIGITALE · EST. 2024
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

// ─────────── Hero variant 2: Molecular — centered with animated molecule ───────────
function HeroMolecular({ onNavigate }) {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
      {/* Pulse rings */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{
            position: 'absolute', border: '1px solid var(--line)', borderRadius: '50%',
            width: 300 * i, height: 300 * i,
            animation: `pulse-ring ${4 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }} />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', maxWidth: 900 }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <MoleculeLogoLarge size={180} />
        </div>
        <p className="eyebrow" style={{ justifyContent: 'center', marginBottom: 24 }}>
          <span className="pulse-dot" /> Clinique digitale · Paris
        </p>
        <h1 className="display" style={{ marginBottom: 32 }}>
          Je ne fais pas du conseil.<br/>
          <span className="serif accent">Je soigne.</span>
        </h1>
        <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 22, color: 'var(--ink-soft)', maxWidth: 640, margin: '0 auto 48px', lineHeight: 1.5 }}>
          L'e-commerce est un organisme vivant. Quand il va mal, il faut un diagnostic. Et un vrai traitement.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => onNavigate('rdv')} className="btn btn-primary">
            Prendre rendez-vous <span className="arrow">→</span>
          </button>
          <button onClick={() => onNavigate('traitements')} className="btn btn-outline">
            Voir les traitements
          </button>
        </div>
      </div>
    </section>
  );
}

// ─────────── Hero variant 3: Manifesto — split with strong type ───────────
function HeroManifesto({ onNavigate }) {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', paddingTop: 100, alignItems: 'stretch' }} className="hero-manifesto">
      <div style={{ flex: '1 1 60%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'var(--section-py) var(--section-px)' }}>
        <p className="eyebrow" style={{ marginBottom: 24 }}>
          <span className="pulse-dot" /> Cabinet ouvert
        </p>
        <h1 style={{
          fontFamily: "'Prompt', sans-serif", fontWeight: 700,
          fontSize: 'clamp(40px, 6.5vw, 92px)', lineHeight: 1, letterSpacing: '-0.03em',
          marginBottom: 32,
        }}>
          L'e-commerce <br/>
          <span className="accent">n'est pas</span> <span className="serif">une science molle.</span>
        </h1>
        <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 18, color: 'var(--ink-soft)', maxWidth: 480, lineHeight: 1.6, marginBottom: 40 }}>
          C'est une discipline exigeante. Technique. Stratégique. Opérationnelle. Sans diagnostic, c'est de la chirurgie sans anesthésie.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <button onClick={() => onNavigate('rdv')} className="btn btn-primary">
            Diagnostic offert <span className="arrow">→</span>
          </button>
          <button onClick={() => onNavigate('docteur')} className="btn btn-outline">
            Le Docteur Digital
          </button>
        </div>
      </div>
      <div style={{ flex: '1 1 40%', background: 'var(--navy)', color: '#fff', padding: 'var(--section-py) var(--section-px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }} className="hero-manifesto-right">
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06 }}>
          <MoleculeLogo size={500} />
        </div>
        <p className="eyebrow" style={{ color: '#ff6600', marginBottom: 24, position: 'relative' }}>
          Mes 3 traitements
        </p>
        <div style={{ position: 'relative' }}>
          {[
            { num: '01', title: 'eCommerce', body: 'B2B & B2C' },
            { num: '02', title: 'CX', body: 'Expérience client' },
            { num: '03', title: 'IA', body: 'Acculturation & intégration' },
          ].map(s => (
            <div key={s.num} style={{ padding: '24px 0', borderBottom: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'baseline', gap: 24 }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{s.num}</span>
              <div>
                <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 28, fontWeight: 600, marginBottom: 4 }}>{s.title}</p>
                <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .hero-manifesto { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}

// ─────────── Marquee ───────────
function MarqueeSection() {
  const items = ['DIAGNOSTIC', 'PRESCRIPTION', 'TRAITEMENT', 'GUÉRISON', 'PRÉVENTION', 'eCOMMERCE', 'CX', 'IA'];
  return (
    <section style={{ padding: '32px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', overflow: 'hidden' }}>
      <div className="marquee">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} style={{
            fontFamily: "'Prompt', sans-serif", fontWeight: 700, fontSize: 56,
            letterSpacing: '-0.02em', color: i % 2 === 0 ? 'var(--ink)' : 'transparent',
            WebkitTextStroke: i % 2 === 0 ? 'none' : '1px var(--ink)',
            display: 'inline-flex', alignItems: 'center', gap: 48,
          }}>
            {it}
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--orange)', flexShrink: 0 }} />
          </span>
        ))}
      </div>
    </section>
  );
}

// ─────────── Manifesto ───────────
function ManifestoSection() {
  return (
    <section className="section" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <Reveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 380px) 1fr',
            gap: 64,
            alignItems: 'center',
            maxWidth: 1100,
            margin: '0 auto',
          }} className="manifesto-grid">
            {/* Doctor portrait */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: '-12px', background: 'var(--orange)',
                transform: 'rotate(-2deg)', zIndex: 0,
              }} />
              <img
                src="assets/docteur-digital.png"
                alt="Le Docteur Digital — Arnaud Guedj"
                style={{
                  position: 'relative', width: '100%', height: 'auto',
                  display: 'block', filter: 'grayscale(0%) saturate(1.05)',
                  boxShadow: '0 24px 48px rgba(11, 18, 33, 0.18)',
                }}
              />
              <div style={{
                position: 'absolute', bottom: 16, right: -16,
                background: 'var(--navy)', color: '#fff', padding: '10px 16px',
                fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                letterSpacing: '0.18em',
              }}>
                ARNAUD GUEDJ · M.D.
              </div>
            </div>

            {/* Manifesto text */}
            <div>
              <p className="eyebrow" style={{ marginBottom: 24 }}>Manifeste</p>
              <p style={{
                fontFamily: "'Prompt', sans-serif", fontWeight: 600,
                fontSize: 'clamp(24px, 2.6vw, 36px)', lineHeight: 1.25, letterSpacing: '-0.02em',
                color: 'var(--ink)', marginBottom: 24,
              }}>
                Chez Nexperio, nous ne vendons pas <span className="serif accent">de recettes miracles.</span>
              </p>
              <p style={{
                fontFamily: "'Prompt', sans-serif", fontSize: 18, lineHeight: 1.6,
                color: 'var(--ink-soft)',
              }}>
                Nous soignons. Avec des diagnostics précis. Et des traitements adaptés à chaque business. Notre expertise transforme vos leviers digitaux en moteur de croissance durable. Avec ce qui marche. Pas avec les tendances du moment.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .manifesto-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

// ─────────── CX section ───────────
function CXSection({ onNavigate }) {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="cx-grid">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 16 }}>La priorité absolue</p>
            <h2 className="display-2" style={{ marginBottom: 24 }}>
              L'expérience client n'est pas un sujet annexe. <span className="serif accent">C'est LE sujet.</span>
            </h2>
            <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 18, color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: 16 }}>
              Chaque point de contact doit nourrir la relation. Et chaque relation bien traitée nourrit la croissance.
            </p>
            <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.6 }}>
              Si l'interface est floue, si le parcours cloche, si l'effort est à la charge du client… Vous perdez des ventes. Et vous ne le saurez peut-être jamais.
            </p>
          </Reveal>
          <Reveal>
            <div style={{ background: 'var(--navy)', color: '#fff', padding: 48, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -40, right: -40, opacity: 0.08 }}>
                <MoleculeLogo size={240} />
              </div>
              <p className="eyebrow" style={{ color: '#ff6600', marginBottom: 32, position: 'relative' }}>
                💉 Mon rôle
              </p>
              {[
                'Ausculter votre expérience actuelle',
                'Identifier les points de friction',
                'Faire sauter les obstacles',
                'Optimiser chaque clic, chaque étape',
              ].map((it, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'baseline', gap: 16, padding: '14px 0',
                  borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                  position: 'relative',
                }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#ff6600' }}>0{i + 1}</span>
                  <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.9)' }}>{it}</p>
                </div>
              ))}
              <div style={{ marginTop: 32, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.2)', position: 'relative' }}>
                <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.3 }}>
                  Des visiteurs qui comprennent. <span className="accent">Des clients qui achètent.</span> Des utilisateurs qui reviennent.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .cx-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  );
}

// ─────────── Services ───────────
function ServicesSection({ onNavigate }) {
  const services = [
    { tag: 'eCommerce', num: '01', title: 'eCommerce B2B et B2C', body: "L'e-commerce n'est plus un canal. C'est un pilier. Il irrigue toute l'entreprise : stratégie, offre, marges, relation client.", callout: 'Diagnostic précis. Traitement sur mesure. Impact concret sur le chiffre.' },
    { tag: 'CX', num: '02', title: 'Expérience Client', body: "Pas d'expérience client, pas de fidélité. Pas de fidélité, pas de business. Les marques qui durent soignent chaque étape.", callout: 'Expériences fluides, utiles, mémorables. Chaque interaction devient un levier de croissance.' },
    { tag: 'IA', num: '03', title: 'Intelligence Artificielle', body: "L'IA n'est plus une option. C'est un avantage compétitif. Encore faut-il savoir par où commencer — et comment l'appliquer.", callout: 'Webinaires de mise à niveau + workshops opérationnels pour vos équipes.' },
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Nos traitements</p>
              <h2 className="display-2" style={{ maxWidth: 700 }}>
                Ciblés. Mesurés. <span className="serif accent">Concrets.</span>
              </h2>
            </div>
            <button onClick={() => onNavigate('traitements')} className="btn btn-ghost">
              Voir tous les traitements →
            </button>
          </div>
        </Reveal>

        <Reveal stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {services.map(s => (
              <div key={s.num} className="card" style={{ display: 'flex', flexDirection: 'column' }}
                onClick={() => onNavigate('traitements')}
                role="button"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
                  <span className="tag">{s.tag}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: 'var(--ink-mute)' }}>{s.num}</span>
                </div>
                <h3 style={{ fontFamily: "'Prompt', sans-serif", fontWeight: 700, fontSize: 28, marginBottom: 16, letterSpacing: '-0.01em' }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: 24 }}>
                  {s.body}
                </p>
                <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 14, fontWeight: 500, color: 'var(--orange)', lineHeight: 1.5, marginBottom: 32, marginTop: 'auto', borderTop: '1px solid var(--line)', paddingTop: 24 }}>
                  {s.callout}
                </p>
                <span style={{ fontFamily: "'Prompt', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  Voir le traitement <span style={{ fontSize: 16 }}>→</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────── Testimonial ───────────
function TestimonialSection({ onNavigate }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow" style={{ justifyContent: 'center', textAlign: 'center', marginBottom: 32 }}>
            Cas de guérison
          </p>
          <blockquote style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
            <p style={{
              fontFamily: "'Prompt', sans-serif", fontWeight: 500,
              fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.25, letterSpacing: '-0.02em',
              marginBottom: 40,
            }}>
              <span className="serif accent" style={{ fontSize: '1.4em', verticalAlign: '-0.1em' }}>«</span>{' '}
              Nexperio nous a aidé à repenser totalement notre stratégie digitale et notre relation client. Les résultats du canal de ventes en ligne ont <span className="accent">doublé en 6 mois.</span>
              {' '}<span className="serif accent" style={{ fontSize: '1.4em', verticalAlign: '-0.1em' }}>»</span>
            </p>
            <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'linear-gradient(135deg, #ff6600, #fcc01e)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontFamily: "'Prompt', sans-serif", fontWeight: 600, fontSize: 18,
              }}>FJ</div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontFamily: "'Prompt', sans-serif", fontWeight: 600, fontSize: 16 }}>Felipe Jacome</p>
                <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 14, color: 'var(--ink-mute)' }}>CEO, Melissa</p>
              </div>
            </footer>
          </blockquote>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <button onClick={() => onNavigate('cas')} className="btn btn-outline">
              Voir les cas de guérison
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

window.HomePage = HomePage;
