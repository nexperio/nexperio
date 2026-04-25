// page-docteur.jsx — About / Le Docteur Digital
const principles = [
  { num: '01', label: 'Excellence', desc: "Chaque diagnostic, chaque action est menée avec un niveau d'exigence maximal." },
  { num: '02', label: 'Engagement', desc: 'Je suis à vos côtés. Je co-construis votre succès.' },
  { num: '03', label: 'Agilité', desc: "J'anticipe. Je veille. J'imagine avec vous les solutions de demain." },
  { num: '04', label: 'Intégrité', desc: 'Pas de poudre aux yeux. Pas de fausses promesses. Un digital éthique, transparent, respectueux.' },
];

const qa = [
  { q: 'Quel a été le moment décisif qui vous a conduit à créer Nexperio ?', a: "C'est ma formation sur le leadership de transformation, particulièrement la partie sur l'intelligence émotionnelle, qui a été le déclencheur. J'ai réalisé qu'il était temps pour moi de créer ma propre société et d'être en rapport direct avec le client, qui est au centre de mes préoccupations." },
  { q: 'Quelles expériences professionnelles ont le plus façonné votre vision du digital ?', a: "Avec 30 ans d'expérience et seulement 4 entreprises, chacune m'a apporté une dimension essentielle : la première m'a appris à garder une vue centralisée sur le client, la deuxième m'a initié au marketing digital, la troisième m'a enseigné la vente en ligne, et la quatrième a été une synthèse où j'ai exercé un rôle d'entrepreneur/directeur général responsable de la rentabilité du business." },
  { q: 'Quelles sont les trois valeurs fondamentales qui guident votre approche ?', a: 'Honnêteté/intégrité, Générosité/bienveillance, et Enjouement/humour/bonne humeur.' },
  { q: 'Quelle est votre "signature" professionnelle ?', a: "Je challenge d'abord le status quo en cherchant à comprendre la stratégie initiale et sa validité. J'analyse ensuite si les actions sont en accord avec cette stratégie. J'apporte professionnalisme et curiosité pour définir convenablement les objectifs. Je fais du \"sur-mesure\"." },
  { q: 'Comment décririez-vous votre méthodologie de travail ?', a: "Ma méthodologie se déroule en trois étapes : d'abord un questionnement approfondi pour comprendre la demande du client, puis une reformulation avec proposition d'axes de travail, et enfin une co-construction de la feuille de route (process, outils, formations) que nous appliquons ensemble." },
  { q: 'Comment abordez-vous les situations où un client est réticent au changement ?', a: "Plutôt que de forcer, je préfère questionner pour faire exprimer les frustrations, laisser \"mijoter\" et demander ce qui empêche la mise en place de solutions. J'utilise la méthode des 5 pourquoi pour identifier la véritable raison de la résistance." },
  { q: 'Quel est votre conseil pour quelqu\'un qui débute dans la transformation digitale ?', a: "Reste curieux. Lis beaucoup, inspire-toi de ce qui marche et aussi de ce qui ne fonctionne pas. Réfléchis à comment tout cela peut t'enrichir professionnellement et améliorer tes interactions avec le client." },
];

function DocteurPage({ onNavigate }) {
  const [openIdx, setOpenIdx] = React.useState(0);

  return (
    <div className="page-enter">
      {/* Hero */}
      <section style={{ background: 'var(--navy)', color: '#fff', paddingTop: 180, paddingBottom: 'var(--section-py)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -100, top: 100, opacity: 0.1, pointerEvents: 'none' }}>
          <MoleculeLogo size={600} />
        </div>
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 64, alignItems: 'end' }} className="cx-grid">
            <div>
              <p className="eyebrow" style={{ color: '#ff6600', marginBottom: 24 }}>
                <span className="pulse-dot" /> Fondateur de Nexperio
              </p>
              <h1 className="display" style={{ color: '#fff', marginBottom: 32 }}>
                Je ne fais pas du conseil. <span className="serif accent">Je soigne.</span>
              </h1>
              <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 22, color: 'rgba(255,255,255,0.85)', maxWidth: 640, lineHeight: 1.5, marginBottom: 16 }}>
                Je suis le Docteur Digital.
              </p>
              <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.6)', maxWidth: 640, lineHeight: 1.6 }}>
                Le digital n'est pas un gadget. C'est un levier vital. Mais mal prescrit, il épuise les équipes. Mal compris, il tue la rentabilité.
              </p>
            </div>
            <div>
              <div style={{
                aspectRatio: '4/5',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: '-12px', background: 'var(--orange)',
                  transform: 'rotate(-2deg)',
                }} />
                <img
                  src="assets/docteur-digital.png"
                  alt="Arnaud Guedj — Le Docteur Digital"
                  style={{
                    position: 'relative', width: '100%', height: '100%',
                    objectFit: 'cover', display: 'block',
                    boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
                  }}
                />
                <div style={{
                  position: 'absolute', bottom: 16, right: 16,
                  background: 'var(--navy)', color: '#fff', padding: '10px 16px',
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                  letterSpacing: '0.18em',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}>
                  ARNAUD GUEDJ · M.D.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ background: 'var(--bg)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', padding: '40px 0' }}>
            {[
              { v: '30', l: "ans d'expérience" },
              { v: '4', l: 'entreprises' },
              { v: '3', l: 'spécialités' },
              { v: '∞', l: 'curiosité' },
            ].map((s, i, arr) => (
              <div key={i} style={{
                padding: '8px 24px', borderRight: i < arr.length - 1 ? '1px solid var(--line)' : 'none',
              }}>
                <p style={{ fontFamily: "'Prompt', sans-serif", fontWeight: 700, fontSize: 'clamp(40px, 5vw, 64px)', color: 'var(--orange)', lineHeight: 1, letterSpacing: '-0.02em' }}>
                  {s.v}
                </p>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-mute)', marginTop: 8 }}>
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Mes 4 principes non négociables</p>
            <h2 className="display-2" style={{ marginBottom: 64, maxWidth: 800 }}>
              Une méthode. <span className="serif accent">Quatre boussoles.</span>
            </h2>
          </Reveal>
          <Reveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
              {principles.map(p => (
                <div key={p.num} style={{ borderTop: '2px solid var(--orange)', paddingTop: 24 }}>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--orange)', letterSpacing: '0.18em', marginBottom: 16 }}>
                    {p.num}
                  </p>
                  <h3 style={{ fontFamily: "'Prompt', sans-serif", fontWeight: 700, fontSize: 32, marginBottom: 16, letterSpacing: '-0.01em' }}>
                    {p.label}
                  </h3>
                  <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Q&A */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Qui est le Docteur Digital ?</p>
            <h2 className="display-2" style={{ marginBottom: 56, maxWidth: 800 }}>
              Sept questions. <span className="serif accent">Sept réponses honnêtes.</span>
            </h2>
          </Reveal>
          <Reveal>
            <div style={{ maxWidth: 920 }}>
              {qa.map((item, i) => (
                <div key={i} style={{ borderTop: '1px solid var(--line)', borderBottom: i === qa.length - 1 ? '1px solid var(--line)' : 'none' }}>
                  <button
                    onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                    style={{
                      width: '100%', textAlign: 'left', background: 'none', border: 0,
                      padding: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      gap: 24, fontFamily: "'Prompt', sans-serif",
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--orange)', letterSpacing: '0.18em' }}>
                        Q.0{i + 1}
                      </span>
                      <span style={{ fontWeight: 600, fontSize: 'clamp(18px, 2vw, 24px)', color: 'var(--ink)', lineHeight: 1.3 }}>
                        {item.q}
                      </span>
                    </span>
                    <span style={{
                      flexShrink: 0, width: 36, height: 36, borderRadius: '50%',
                      border: '1px solid var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 18, transition: 'transform 300ms, background 250ms',
                      transform: openIdx === i ? 'rotate(45deg)' : 'rotate(0deg)',
                      background: openIdx === i ? 'var(--orange)' : 'transparent',
                      color: openIdx === i ? '#fff' : 'var(--ink)',
                      borderColor: openIdx === i ? 'var(--orange)' : 'var(--ink)',
                    }}>+</span>
                  </button>
                  <div style={{
                    maxHeight: openIdx === i ? 400 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 500ms cubic-bezier(.2,.7,.2,1)',
                  }}>
                    <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.7, paddingLeft: 56, paddingBottom: 24, maxWidth: 800 }}>
                      {item.a}
                    </p>
                  </div>
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

window.DocteurPage = DocteurPage;
