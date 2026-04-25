import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prendre rendez-vous',
  description:
    'Demandez votre consultation avec le Docteur Digital. Le diagnostic initial est offert.',
}

const REASSURANCE = [
  { num: '01', label: 'Réponse sous 48h' },
  { num: '02', label: 'Diagnostic initial offert' },
  { num: '03', label: 'Sans engagement' },
]

export default function RdvPage() {
  return (
    <div className="page-enter">
      <section
        style={{
          minHeight: '100vh',
          paddingTop: 140,
          paddingBottom: 80,
          background: 'var(--bg-soft)',
        }}
      >
        <div className="container">
          <div
            className="rdv-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.1fr',
              gap: 80,
              alignItems: 'start',
            }}
          >
            {/* Left — pitch */}
            <div>
              <p className="eyebrow" style={{ marginBottom: 32 }}>
                <span className="pulse-dot" /> Cabinet ouvert · Paris
              </p>
              <h1 className="display" style={{ marginBottom: 32 }}>
                Rencontrons-<span className="serif accent">nous.</span>
              </h1>
              <p
                style={{
                  fontFamily: "'Prompt', sans-serif",
                  fontSize: 22,
                  color: 'var(--ink-soft)',
                  lineHeight: 1.5,
                  marginBottom: 16,
                }}
              >
                Parlez-moi de votre business. Je prescris le traitement adapté.
              </p>
              <p
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: 'italic',
                  fontSize: 26,
                  color: 'var(--orange)',
                  marginBottom: 48,
                }}
              >
                Le diagnostic initial est offert.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  paddingTop: 32,
                  borderTop: '1px solid var(--line)',
                }}
              >
                {REASSURANCE.map((r) => (
                  <div key={r.num} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 12,
                        color: 'var(--orange)',
                        letterSpacing: '0.18em',
                      }}
                    >
                      {r.num}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Prompt', sans-serif",
                        fontSize: 17,
                        color: 'var(--ink)',
                      }}
                    >
                      {r.label}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 48,
                  paddingTop: 32,
                  borderTop: '1px solid var(--line)',
                }}
              >
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-mute)',
                    marginBottom: 16,
                  }}
                >
                  Vous préférez le direct ?
                </p>
                <p
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: 17,
                    color: 'var(--ink)',
                    marginBottom: 8,
                  }}
                >
                  <a href="mailto:contact@nexperio.com" style={{ borderBottom: '1px solid var(--orange)' }}>
                    contact@nexperio.com
                  </a>
                </p>
                <p
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: 17,
                    color: 'var(--ink)',
                  }}
                >
                  <a href="tel:+33670778899" style={{ borderBottom: '1px solid var(--orange)' }}>
                    06 70 77 88 99
                  </a>
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--line)',
                padding: 48,
                position: 'relative',
              }}
            >
              <p
                className="eyebrow"
                style={{ marginBottom: 32 }}
              >
                Formulaire de consultation
              </p>
              <form
                action="mailto:contact@nexperio.com"
                method="get"
                style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
              >
                <Field label="Votre nom *" name="name" required placeholder="Arnaud Guedj" />
                <Field
                  label="Votre email *"
                  name="email"
                  type="email"
                  required
                  placeholder="vous@entreprise.com"
                />
                <Field label="Votre entreprise" name="company" placeholder="Nexperio SAS" />
                <FieldArea
                  label="Décrivez vos symptômes *"
                  name="body"
                  required
                  placeholder="Mon e-commerce stagne, mes conversions baissent, je ne sais pas par où commencer…"
                />
                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '20px 32px', fontSize: 13 }}>
                  Envoyer ma demande <span className="arrow">→</span>
                </button>
              </form>
              <p
                style={{
                  marginTop: 24,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'var(--ink-mute)',
                  letterSpacing: '0.05em',
                }}
              >
                Données traitées en interne. Aucun envoi à des tiers.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .rdv-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>
    </div>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--ink-mute)',
        }}
      >
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="rdv-input"
      />
    </label>
  )
}

function FieldArea({
  label,
  name,
  required = false,
  placeholder,
}: {
  label: string
  name: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--ink-mute)',
        }}
      >
        {label}
      </span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={5}
        className="rdv-input rdv-textarea"
      />
    </label>
  )
}
