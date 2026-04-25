// Shared components for Nexperio site
// Navbar, Footer, CTA, MoleculeLogo, page wrappers

const { useState, useEffect, useRef } = React;

// ───────────────────────── Logo (real brand PNG, animated) ─────────────────────────
// Uses the actual Nexperio logo file. Subtle CSS animation: very slow wobble + glow pulse.
function MoleculeLogo({ size = 28, animated = true }) {
  return (
    <span style={{ display: 'inline-block', width: size, height: size, position: 'relative' }}>
      <img
        src="assets/nexperio-logo-original.png"
        alt="Nexperio"
        width={size}
        height={size}
        style={{
          display: 'block',
          width: size,
          height: size,
          transformOrigin: '50% 50%',
          animation: animated ? 'nx-logo-wobble 9s ease-in-out infinite' : 'none',
          filter: animated ? 'drop-shadow(0 0 0 rgba(255,106,0,0))' : 'none',
        }}
      />
      <style>{`
        @keyframes nx-logo-wobble {
          0%, 100% { transform: rotate(0deg) scale(1); filter: drop-shadow(0 0 0 rgba(255,106,0,0)); }
          50% { transform: rotate(-3deg) scale(1.04); filter: drop-shadow(0 4px 18px rgba(255,106,0,0.35)); }
        }
      `}</style>
    </span>
  );
}

// Bigger version with parallax-style satellites (used in hero/decorative spots).
// We layer the real logo and sprinkle ambient "echo" orbs around it for depth.
function MoleculeLogoLarge({ size = 320 }) {
  return (
    <div style={{
      position: 'relative', width: size, height: size,
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', inset: '-15%',
        background: 'radial-gradient(circle, rgba(255,140,0,0.25) 0%, rgba(255,140,0,0) 65%)',
        animation: 'nx-glow 5s ease-in-out infinite',
      }} />
      {/* Echo orbs (decorative, behind logo) */}
      <div style={{
        position: 'absolute', top: '5%', right: '-8%', width: size * 0.18, height: size * 0.18,
        borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #ffd866, #ffa810)',
        opacity: 0.6, animation: 'nx-echo-1 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '-8%', width: size * 0.16, height: size * 0.16,
        borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #ff8a30, #ff5a00)',
        opacity: 0.5, animation: 'nx-echo-2 7s ease-in-out infinite',
      }} />
      {/* The real logo */}
      <img
        src="assets/nexperio-logo-original.png"
        alt="Nexperio"
        style={{
          position: 'relative', width: '100%', height: '100%', display: 'block',
          transformOrigin: '50% 50%',
          animation: 'nx-hero-wobble 8s ease-in-out infinite',
          filter: 'drop-shadow(0 12px 40px rgba(255,106,0,0.35))',
        }}
      />
      <style>{`
        @keyframes nx-hero-wobble {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-2deg) scale(1.02); }
          75% { transform: rotate(2deg) scale(1.02); }
        }
        @keyframes nx-glow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        @keyframes nx-echo-1 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(8px,-10px) scale(1.1); }
        }
        @keyframes nx-echo-2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-8px,10px) scale(1.1); }
        }
      `}</style>
    </div>
  );
}

// ───────────────────────── Logo with wordmark ─────────────────────────
function NexperioLogo({ height = 36, color, gradient = true }) {
  const wordmarkStyle = gradient && !color ? {
    fontFamily: "'Adequate', 'Prompt', sans-serif",
    fontWeight: 400,
    fontSize: height * 0.78,
    letterSpacing: '0',
    lineHeight: 1,
    background: 'linear-gradient(135deg, #ff5a00 0%, #ff8a00 50%, #ffc01e 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  } : {
    fontFamily: "'Adequate', 'Prompt', sans-serif",
    fontWeight: 400,
    fontSize: height * 0.78,
    letterSpacing: '0',
    lineHeight: 1,
    color: color || 'var(--ink)',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <MoleculeLogo size={height} />
      <span style={wordmarkStyle}>nexperio</span>
    </div>
  );
}

// ───────────────────────── Navigation links ─────────────────────────
const NAV = [
  { id: 'ordonnances', label: 'Les ordonnances' },
  { id: 'traitements', label: 'Les traitements' },
  { id: 'cas', label: 'Cas de guérison' },
  { id: 'docteur', label: 'Le Docteur Digital' },
  { id: 'blog', label: 'Blog' },
];

// ───────────────────────── Navbar ─────────────────────────
function Navbar({ current, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => { onNavigate(id); setOpen(false); };

  // Pages with a dark navy hero — over those, the navbar is transparent and
  // links/wordmark must invert to white for readability.
  const darkHeroPages = ['docteur', 'cas'];
  const overDarkHero = !scrolled && darkHeroPages.includes(current);
  const linkColor = overDarkHero ? 'rgba(255,255,255,0.92)' : 'var(--ink)';
  const linkColorHover = overDarkHero ? '#ffb733' : 'var(--orange)';

  return (
    <header
      className={scrolled ? 'nav-scrolled' : ''}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'background 250ms, border-color 250ms',
      }}
    >
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 76,
      }}>
        <button onClick={() => go('home')} style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer' }}>
          <NexperioLogo height={32} />
        </button>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="nav-desktop">
          {NAV.map(item => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              style={{
                background: 'none', border: 0, padding: '8px 0',
                fontFamily: "'Prompt', sans-serif",
                fontSize: 13.5, fontWeight: 500, letterSpacing: '0.01em',
                color: current === item.id ? 'var(--orange)' : linkColor,
                position: 'relative',
                transition: 'color 200ms',
              }}
              onMouseEnter={e => e.currentTarget.style.color = linkColorHover}
              onMouseLeave={e => e.currentTarget.style.color = current === item.id ? 'var(--orange)' : linkColor}
            >
              {item.label}
              {current === item.id && (
                <span style={{
                  position: 'absolute', bottom: -2, left: 0, right: 0, height: 2,
                  background: 'var(--orange)',
                }} />
              )}
            </button>
          ))}
        </nav>

        <button
          onClick={() => go('rdv')}
          className="btn btn-primary"
          style={{ padding: '12px 20px', fontSize: 11 }}
        >
          Prendre rendez-vous
          <span className="arrow">→</span>
        </button>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .nav-desktop { display: none !important; }
        }
      `}</style>
    </header>
  );
}

// ───────────────────────── Footer ─────────────────────────
function Footer({ onNavigate }) {
  return (
    <footer style={{ background: 'var(--navy-deep)', color: '#fff', paddingTop: 96, paddingBottom: 40, position: 'relative', overflow: 'hidden' }}>
      {/* Big background mark */}
      <div style={{
        position: 'absolute', right: -120, bottom: -180, opacity: 0.06, pointerEvents: 'none',
      }}>
        <MoleculeLogo size={520} />
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          fontFamily: "'Prompt', sans-serif", fontWeight: 700,
          fontSize: 'clamp(48px, 7vw, 120px)', lineHeight: 0.92, letterSpacing: '-0.03em',
          maxWidth: 900, marginBottom: 64,
        }}>
          Ne tentez pas de vous soigner <span className="serif" style={{ color: '#fcc01e' }}>sans ordonnance.</span>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 48,
          paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          <div>
            <NexperioLogo height={28} />
            <p style={{ marginTop: 20, fontFamily: "'Prompt', sans-serif", color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6, maxWidth: 280 }}>
              "Je ne fais pas du conseil. Je soigne."<br/>
              <span style={{ color: '#ff6600', fontWeight: 600 }}>— Le Docteur Digital</span>
            </p>
          </div>

          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
              Navigation
            </p>
            {NAV.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                style={{
                  display: 'block', background: 'none', border: 0, padding: '6px 0',
                  fontFamily: "'Prompt', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.75)',
                  textAlign: 'left',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#ff6600'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
              Contact
            </p>
            <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.85)', marginBottom: 8 }}>ag@nexperio.com</p>
            <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.85)', marginBottom: 24 }}>+33 6 70 77 88 99</p>
            <button onClick={() => onNavigate('rdv')} className="btn btn-primary" style={{ padding: '12px 20px', fontSize: 11 }}>
              Diagnostic offert <span className="arrow">→</span>
            </button>
          </div>

          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
              Statut clinique
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: "'Prompt', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
              <span className="pulse-dot" /> Cabinet ouvert · Paris
            </p>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 12 }}>
              48h · diagnostic offert · sans engagement
            </p>
          </div>
        </div>

        <div style={{
          paddingTop: 32, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'rgba(255,255,255,0.35)',
          letterSpacing: '0.05em',
        }}>
          <p>© {new Date().getFullYear()} NEXPERIO · TOUS DROITS RÉSERVÉS</p>
          <p>FAIT AVEC 💉 PAR LE DOCTEUR DIGITAL</p>
        </div>
      </div>
    </footer>
  );
}

// ───────────────────────── CTA section ─────────────────────────
function CTASection({ onNavigate }) {
  return (
    <section className="section" style={{ background: 'var(--navy)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.08, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle at 20% 30%, #ff6600 0, transparent 50%), radial-gradient(circle at 80% 70%, #fcc01e 0, transparent 50%)',
      }} />
      <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: 900 }}>
        <p className="eyebrow" style={{ color: '#ff6600', justifyContent: 'center' }}>
          Diagnostic offert
        </p>
        <h2 className="display-2" style={{ color: '#fff', margin: '24px auto 32px', maxWidth: 800 }}>
          Ne tentez pas de vous soigner <br/>
          <span className="serif" style={{ color: '#fcc01e' }}>sans ordonnance.</span>
        </h2>
        <p style={{ fontFamily: "'Prompt', sans-serif", color: 'rgba(255,255,255,0.65)', fontSize: 18, marginBottom: 40, maxWidth: 540, margin: '0 auto 40px' }}>
          Parlez-moi de votre business. Je prescris le traitement adapté. Le diagnostic initial est gratuit.
        </p>
        <button onClick={() => onNavigate('rdv')} className="btn btn-primary">
          Demander une consultation <span className="arrow">→</span>
        </button>
        <p style={{ marginTop: 32, fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 18, color: 'rgba(255,255,255,0.5)' }}>
          "Je ne fais pas du conseil. Je soigne." — Le Docteur Digital
        </p>
      </div>
    </section>
  );
}

// ───────────────────────── Reveal observer ─────────────────────────
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ───────────────────────── Reveal wrapper ─────────────────────────
function Reveal({ children, stagger = false, as = 'div', ...props }) {
  const ref = useReveal();
  const Tag = as;
  return (
    <Tag ref={ref} className={(stagger ? 'reveal-stagger ' : 'reveal ') + (props.className || '')} {...props}>
      {children}
    </Tag>
  );
}

// Export to window
Object.assign(window, { MoleculeLogo, MoleculeLogoLarge, NexperioLogo, Navbar, Footer, CTASection, Reveal, useReveal, NAV });
