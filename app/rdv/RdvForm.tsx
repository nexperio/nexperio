'use client'

import { useState, FormEvent } from 'react'

const CALENDLY_URL =
  'https://calendly.com/nexperio-france/l-ordonnance-express-du-docteur-digital'

export default function RdvForm() {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      company: String(formData.get('company') || ''),
      body: String(formData.get('body') || ''),
    }

    try {
      const res = await fetch('/api/send-rdv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('send_failed')

      const url = new URL(CALENDLY_URL)
      if (payload.name) url.searchParams.set('name', payload.name)
      if (payload.email) url.searchParams.set('email', payload.email)
      if (payload.company) url.searchParams.set('a1', payload.company)
      window.location.href = url.toString()
    } catch (err) {
      setError(
        "Impossible d'envoyer la demande. Réessayez ou contactez-nous directement à contact@nexperio.com.",
      )
      setSubmitting(false)
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
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
        <button
          type="submit"
          disabled={submitting}
          className="btn btn-primary"
          style={{
            alignSelf: 'flex-start',
            padding: '20px 32px',
            fontSize: 13,
            opacity: submitting ? 0.6 : 1,
            cursor: submitting ? 'wait' : 'pointer',
          }}
        >
          {submitting ? 'Envoi en cours…' : 'Envoyer ma demande'}{' '}
          <span className="arrow">→</span>
        </button>
        {error && (
          <p
            role="alert"
            style={{
              fontFamily: "'Prompt', sans-serif",
              fontSize: 14,
              color: '#c0392b',
            }}
          >
            {error}
          </p>
        )}
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
        Après envoi, vous serez redirigé vers Calendly pour choisir un créneau.
      </p>
    </>
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
