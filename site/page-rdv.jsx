// page-rdv.jsx
function RdvPage({ onNavigate }) {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({ symptom: '', urgency: '', name: '', email: '', company: '', body: '' });
  const [done, setDone] = React.useState(false);

  const symptoms = ['Trafic qui stagne', 'Conversions en baisse', "Expérience client défaillante", "Pas de stratégie IA", "Tout ça à la fois"];
  const urgencies = ['Soins palliatifs (long terme)', 'Consultation classique (semaines)', 'Urgence (cette semaine)'];

  const CALENDLY_URL = 'https://calendly.com/nexperio-france/l-ordonnance-express-du-docteur-digital';
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');

  const submit = async () => {
    setSubmitting(true);
    setError('');
    try {
      // POST to the serverless endpoint (Next.js API route or Vercel function).
      // The endpoint sends an email via Resend to ag@nexperio.com.
      // In the static preview, this will fail silently and we still redirect.
      await fetch('/api/send-rdv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).catch(() => {});
      setDone(true);
      // Redirect to Calendly after a short beat so the user sees confirmation
      setTimeout(() => {
        window.location.href = CALENDLY_URL;
      }, 1800);
    } catch (e) {
      setError("Erreur lors de l'envoi. Vous pouvez réserver directement via Calendly.");
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="page-enter">
        <section className="section" style={{ paddingTop: 180, minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ maxWidth: 720, textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
              <MoleculeLogoLarge size={140} />
            </div>
            <p className="eyebrow" style={{ justifyContent: 'center', marginBottom: 24 }}>
              <span className="pulse-dot" /> Demande reçue
            </p>
            <h1 className="display-2" style={{ marginBottom: 24 }}>
              Réservez votre <span className="serif accent">consultation.</span>
            </h1>
            <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 18, color: 'var(--ink-soft)', maxWidth: 540, margin: '0 auto 16px', lineHeight: 1.6 }}>
              Vous allez être redirigé vers Calendly pour choisir un créneau d'1 heure en visio avec le Docteur Digital.
            </p>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--ink-mute)', letterSpacing: '0.15em', marginBottom: 40 }}>
              REDIRECTION EN COURS…
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={CALENDLY_URL} className="btn btn-primary">
                Choisir mon créneau <span className="arrow">→</span>
              </a>
              <button onClick={() => onNavigate('home')} className="btn btn-outline">
                Retour à la clinique
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-enter">
      <section className="section" style={{ paddingTop: 180, paddingBottom: 'var(--section-py)' }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }} className="cx-grid">
            <div>
              <p className="eyebrow" style={{ marginBottom: 24 }}>
                <span className="pulse-dot" /> Diagnostic offert
              </p>
              <h1 className="display-2" style={{ marginBottom: 32 }}>
                Prenez rendez-vous avec le <span className="serif accent">Docteur Digital.</span>
              </h1>
              <p style={{ fontFamily: "'Prompt', sans-serif", fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: 40 }}>
                Le diagnostic initial est offert. Parlez-moi de votre business, je vous prescris le traitement adapté.
              </p>

              <div style={{ borderTop: '1px solid var(--line)', paddingTop: 24 }}>
                {[
                  { l: 'Réponse', v: 'Sous 48h' },
                  { l: 'Format', v: 'Visio · 1 heure' },
                  { l: 'Prix', v: 'Gratuit · sans engagement' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', padding: '16px 0',
                    borderBottom: i < 2 ? '1px solid var(--line)' : 'none',
                    fontFamily: "'Prompt', sans-serif",
                  }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>{item.l}</span>
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{item.v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--bg-soft)', padding: 48, position: 'relative' }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
                {[0, 1, 2].map(s => (
                  <div key={s} style={{
                    flex: 1, height: 4,
                    background: s <= step ? 'var(--orange)' : 'var(--line)',
                    transition: 'background 350ms',
                  }} />
                ))}
              </div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.18em', marginBottom: 16 }}>
                ÉTAPE {step + 1} / 3
              </p>

              {step === 0 && (
                <div>
                  <h3 style={{ fontFamily: "'Prompt', sans-serif", fontWeight: 700, fontSize: 28, marginBottom: 24, letterSpacing: '-0.01em' }}>
                    Quels sont vos symptômes ?
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
                    {symptoms.map(s => (
                      <button key={s} onClick={() => setData({ ...data, symptom: s })} style={{
                        padding: '16px 20px', textAlign: 'left',
                        border: '1px solid', borderColor: data.symptom === s ? 'var(--orange)' : 'var(--line)',
                        background: data.symptom === s ? 'rgba(255,102,0,0.06)' : 'var(--bg)',
                        fontFamily: "'Prompt', sans-serif", fontSize: 15, fontWeight: 500,
                        cursor: 'pointer', transition: 'all 200ms', color: 'var(--ink)',
                      }}>{s}</button>
                    ))}
                  </div>
                  <button disabled={!data.symptom} onClick={() => setStep(1)} className="btn btn-primary" style={{ opacity: data.symptom ? 1 : 0.4 }}>
                    Continuer <span className="arrow">→</span>
                  </button>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h3 style={{ fontFamily: "'Prompt', sans-serif", fontWeight: 700, fontSize: 28, marginBottom: 24, letterSpacing: '-0.01em' }}>
                    Quel est le degré d'urgence ?
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
                    {urgencies.map(u => (
                      <button key={u} onClick={() => setData({ ...data, urgency: u })} style={{
                        padding: '16px 20px', textAlign: 'left',
                        border: '1px solid', borderColor: data.urgency === u ? 'var(--orange)' : 'var(--line)',
                        background: data.urgency === u ? 'rgba(255,102,0,0.06)' : 'var(--bg)',
                        fontFamily: "'Prompt', sans-serif", fontSize: 15, fontWeight: 500,
                        cursor: 'pointer', transition: 'all 200ms', color: 'var(--ink)',
                      }}>{u}</button>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button onClick={() => setStep(0)} className="btn btn-outline">← Retour</button>
                    <button disabled={!data.urgency} onClick={() => setStep(2)} className="btn btn-primary" style={{ opacity: data.urgency ? 1 : 0.4 }}>
                      Continuer <span className="arrow">→</span>
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 style={{ fontFamily: "'Prompt', sans-serif", fontWeight: 700, fontSize: 28, marginBottom: 24, letterSpacing: '-0.01em' }}>
                    Vos coordonnées
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                    {[
                      { k: 'name', label: 'Votre nom *', placeholder: 'Arnaud Guedj' },
                      { k: 'email', label: 'Votre email *', placeholder: 'vous@entreprise.com', type: 'email' },
                      { k: 'company', label: 'Votre entreprise', placeholder: 'Nexperio SAS' },
                    ].map(f => (
                      <div key={f.k}>
                        <label style={{ display: 'block', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8 }}>
                          {f.label}
                        </label>
                        <input
                          type={f.type || 'text'}
                          value={data[f.k]}
                          onChange={e => setData({ ...data, [f.k]: e.target.value })}
                          placeholder={f.placeholder}
                          style={{
                            width: '100%', padding: '12px 16px', border: '1px solid var(--line)',
                            background: 'var(--bg)', fontFamily: "'Prompt', sans-serif", fontSize: 15,
                            color: 'var(--ink)', outline: 'none', transition: 'border-color 200ms',
                          }}
                          onFocus={e => e.currentTarget.style.borderColor = 'var(--orange)'}
                          onBlur={e => e.currentTarget.style.borderColor = 'var(--line)'}
                        />
                      </div>
                    ))}
                    <div>
                      <label style={{ display: 'block', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8 }}>
                        Décrivez vos symptômes en détail
                      </label>
                      <textarea
                        rows={4}
                        value={data.body}
                        onChange={e => setData({ ...data, body: e.target.value })}
                        placeholder="Mon e-commerce stagne, mes conversions baissent..."
                        style={{
                          width: '100%', padding: '12px 16px', border: '1px solid var(--line)',
                          background: 'var(--bg)', fontFamily: "'Prompt', sans-serif", fontSize: 15,
                          color: 'var(--ink)', outline: 'none', resize: 'none',
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button onClick={() => setStep(1)} className="btn btn-outline" disabled={submitting}>← Retour</button>
                    <button
                      disabled={!data.name || !data.email || submitting}
                      onClick={submit}
                      className="btn btn-primary"
                      style={{ opacity: (data.name && data.email && !submitting) ? 1 : 0.5 }}
                    >
                      {submitting ? 'Envoi en cours…' : <>Réserver ma consultation <span className="arrow">→</span></>}
                    </button>
                  </div>
                  {error && (
                    <p style={{ marginTop: 12, fontFamily: "'Prompt', sans-serif", fontSize: 13, color: '#c0392b' }}>{error}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.RdvPage = RdvPage;
