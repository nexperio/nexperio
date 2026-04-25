import Link from 'next/link'
import type { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Nexperio Tech',
  description:
    "Le lab IA & data du Docteur Digital. Outils d'analyse e-commerce, GPTs custom, applications livrées (vurto.ai, atelierduchatbot.com).",
}

const TOOLS = [
  {
    slug: 'p-l',
    tag: 'Finance',
    num: '01',
    title: 'Monitorer votre P&L',
    body:
      "Un bilan clair de votre business. Diagnostic instantané de la santé financière à partir des données opérationnelles : CA, marge brute, dépenses, résultat net, ratios essentiels.",
    href: 'https://pl.nexperio.tech',
    legacy: 'https://www.nexperio.com/la-trousse/p-l',
  },
  {
    slug: 'lifetime-value',
    tag: 'LTV',
    num: '02',
    title: 'Lifetime Value',
    body:
      "Le miroir stratégique. Calcule LTV réelle, CA par client, marge nette et ratio LTV/CAC — avec un diagnostic des leviers à activer si le ratio est faible.",
    href: 'https://clv.nexperio.tech',
    legacy: 'https://www.nexperio.com/la-trousse/analyser-lifetime-value',
  },
  {
    slug: 'codes-promo',
    tag: 'Promo',
    num: '03',
    title: 'Générateur de codes promo',
    body:
      "Une promo bien pensée, c'est une vente en plus — pas une marge en moins. Préfixe, format, type de remise, conditions, validité, exclusions, historique : full contrôle.",
    href: 'https://promo.nexperio.tech',
    legacy: 'https://www.nexperio.com/la-trousse/generer-des-codes-promo',
  },
  {
    slug: 'qr-codes',
    tag: 'On→Offline',
    num: '04',
    title: 'Générateur de QR codes',
    body:
      "Un lien. Un scan. Une action. QR codes générés en 10 secondes — URL, message ou contact — déployables sur flyers, packaging, vitrines, gobelets, écrans.",
    href: 'https://qr.nexperio.tech',
    legacy: 'https://www.nexperio.com/la-trousse/creer-qrcodes',
  },
  {
    slug: 'simulateur-prix-dynamique',
    tag: 'Pricing',
    num: '05',
    title: 'Simulateur de prix dynamique',
    body:
      "En 2 minutes, le prix optimal pour votre produit. Curseurs en temps réel, scénarios multiples, impacts simulés sur ventes, marge et CA.",
    legacy: 'https://www.nexperio.com/la-trousse/simulateur-prix-dynamique',
  },
  {
    slug: 'analyse-marge-produit',
    tag: 'Marge',
    num: '06',
    title: 'Analyse de marge produit',
    body:
      "Vos produits au scanner. Marge brute unitaire, profit global, taux de rentabilité, alertes — pour identifier les produits sous-performants et arrêter les hémorragies cachées.",
    legacy: 'https://www.nexperio.com/la-trousse/analyse-marge-produit',
  },
  {
    slug: 'guide-des-tailles',
    tag: 'Mode',
    num: '07',
    title: 'Guide des tailles',
    body:
      "Conversion +. Satisfaction +. Retours −. Sélection de morphologie, prise de mesures simplifiée, recommandation personnalisée. Prototype adaptable sur-mesure à votre catalogue.",
    legacy: 'https://www.nexperio.com/la-trousse/guide-des-tailles',
  },
]

const GPTS = [
  {
    title: 'Viral Post Optimizer',
    body:
      "Donnez-lui votre texte brut, il vous sort une version calibrée pour la viralité — hook, structure, call-to-action — adaptée à LinkedIn, X ou Threads.",
    href: 'https://chatgpt.com/g/g-6830a7154d548191b6a926b92dfeed22-viral-post-optimizer',
  },
  {
    title: 'Job Interview',
    body:
      "Coach d'entretien d'embauche. Simule l'entretien, anticipe les questions piège, vous brief sur les réponses qui font la différence.",
    href: 'https://chatgpt.com/g/g-6830162c7f108191b3a8aafe87454274-job-interview',
  },
  {
    title: 'Avatar Me',
    body:
      "Crée votre avatar IA personnalisé. Décrivez votre style ou envoyez une photo, il génère des visuels cohérents pour vos profils, posts et marque.",
    href: 'https://chatgpt.com/g/g-6828b1f6b3508191b79eaf4efee65818-avatar-me',
  },
  {
    title: 'JSON Prompt Architect',
    body:
      "Structure vos prompts en JSON exploitable par n'importe quelle API LLM. Idéal pour workflows automatisés et agents — parsing fiable garanti.",
    href: 'https://chatgpt.com/g/g-68d2b7c8051c819194e400dc970c031d-json-prompt-architect',
  },
  {
    title: 'Brand Architect',
    body:
      "Architecte de marque. Définit positionnement, ton de voix, palette, mission — votre brand book en une conversation.",
    href: 'https://chatgpt.com/g/g-68243e30065c81919ee4ec271d5748a6-brand-architect',
  },
]

const APPS = [
  {
    name: 'vurto.ai',
    status: 'Mission en cours',
    tagline:
      'Pendant que vous lisez ceci, ChatGPT recommande vos concurrents à vos clients.',
    body:
      "Plateforme d'optimisation IA qui mesure et améliore la visibilité d'une marque dans les réponses des assistants génératifs — ChatGPT, Claude, Gemini, Perplexity. Premier outil à optimiser simultanément Google ET les LLM.",
    metrics: [
      { value: '+35%', label: 'conversion trafic LLM' },
      { value: '+40%', label: 'visibilité IA à J+30' },
      { value: '89%', label: 'satisfaction à 60 jours' },
    ],
    href: 'https://vurto.ai',
  },
  {
    name: 'atelierduchatbot.com',
    status: 'Produit lancé',
    tagline: 'Capturez plus de leads sur votre site — 24h/24.',
    body:
      "Plateforme de chatbot IA conversationnel — répond aux visiteurs quand vous n'êtes pas là, qualifie les demandes, collecte les coordonnées, prend les RDV. Installation 2 minutes, RGPD, multi-LLM (OpenAI, Anthropic, Gemini).",
    metrics: [
      { value: '2 min', label: 'installation' },
      { value: 'RGPD', label: 'serveurs en France' },
      { value: '4', label: 'CMS supportés' },
    ],
    href: 'https://atelierduchatbot.com',
  },
  {
    name: 'jobmatch.nexperio.tech',
    status: 'App lancée',
    tagline: 'Automatisez vos candidatures avec CV et lettres de motivation IA.',
    body:
      "Plateforme de gestion de candidatures pour demandeurs d'emploi. Agrégation d'offres depuis Indeed, Apec, LinkedIn et 7 autres sources, filtrage avancé, suivi des statuts. Génération automatique de CV personnalisés et lettres de motivation adaptées à chaque offre via GPT-4.",
    metrics: [
      { value: '10', label: "sources d'offres agrégées" },
      { value: 'GPT-4', label: 'CV & lettres générés' },
      { value: '4', label: 'statuts de suivi' },
    ],
    href: 'https://jobmatch.nexperio.tech',
  },
]

const REALIZATIONS = [
  {
    name: 'Collectif Booster',
    handle: 'collectif-booster.com',
    role: 'Co-fondateur · Plateforme conçue & développée par Nexperio',
    tagline: "S'entraider pour rebondir plus vite et mieux.",
    body:
      "Le réseau des cadres et dirigeants en transition professionnelle. Plateforme co-fondée et conçue, designée, développée de bout en bout par Nexperio — la mention « Réalisé par Nexperio » apparaît dans le footer du site.",
    pillars: [
      'CoBook · annuaire des membres',
      'CoPlans · bons plans & opportunités',
      'CoMag · le mag du collectif',
      'CoHelp · matchmaking entraide',
      'Événements · multilingue FR/EN',
      "Messagerie temps réel",
    ],
    stack: [
      'Supabase + RLS',
      'Edge functions',
      'Import CV via IA (OpenAI)',
      'Dark mode',
      'i18n FR/EN',
      'RGPD-compliant',
    ],
    metrics: [
      { value: '80+', label: 'versions livrées' },
      { value: '~16 mois', label: 'en production' },
      { value: '6+6', label: 'modules · valeurs' },
    ],
    href: 'https://www.collectif-booster.com',
  },
]

export default function NexperioTechPage() {
  return (
    <div className="page-enter">
      {/* Dark hero */}
      <section
        style={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 140,
          paddingBottom: 80,
          background: 'var(--navy-deep)',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            pointerEvents: 'none',
            backgroundImage:
              'radial-gradient(circle at 80% 20%, #ff6600 0, transparent 45%), radial-gradient(circle at 15% 80%, #4376bd 0, transparent 45%)',
          }}
        />
        <div
          className="grid-bg"
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.05,
            pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow" style={{ color: '#ff6600', marginBottom: 32 }}>
            <span className="pulse-dot" /> Le lab IA & data
          </p>
          <h1 className="display" style={{ color: '#fff', maxWidth: 1100, marginBottom: 32 }}>
            Nexperio <span className="serif" style={{ color: '#fcc01e' }}>Tech.</span>
          </h1>
          <p
            style={{
              fontFamily: "'Prompt', sans-serif",
              fontSize: 24,
              color: 'rgba(255,255,255,0.78)',
              maxWidth: 820,
              lineHeight: 1.5,
              marginBottom: 24,
            }}
          >
            Là où le diagnostic devient code. Outils, GPTs et applications IA — conçus,
            développés et livrés par le Docteur Digital.
          </p>
          <p
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              fontSize: 24,
              color: '#fcc01e',
              marginBottom: 40,
            }}
          >
            Diagnostiquer, c&apos;est bien. Livrer, c&apos;est mieux.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#tools" className="btn btn-primary">
              Voir les outils <span className="arrow">→</span>
            </a>
            <Link
              href="/rdv"
              className="btn"
              style={{
                color: '#fff',
                border: '1.5px solid rgba(255,255,255,0.4)',
                background: 'transparent',
              }}
            >
              Briefer un projet
            </Link>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 64, maxWidth: 720 }}>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Les outils · 7 modules</p>
              <h2 className="display-2">
                La trousse <span className="serif accent">du Doc.</span>
              </h2>
              <p
                style={{
                  fontFamily: "'Prompt', sans-serif",
                  fontSize: 18,
                  color: 'var(--ink-soft)',
                  lineHeight: 1.6,
                  marginTop: 24,
                }}
              >
                Sept modules opérationnels — finance, pricing, marge, LTV, promo, QR, taille —
                pensés pour le pilotage d&apos;un e-commerce sans friction Excel. En cours de
                réhébergement sur cette nouvelle infra.
              </p>
            </div>
          </Reveal>

          <Reveal stagger>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 24,
              }}
            >
              {TOOLS.map((t) => {
                const live = 'href' in t && (t as { href?: string }).href
                const target = live || t.legacy
                return (
                  <a
                    key={t.slug}
                    href={target}
                    target="_blank"
                    rel="noreferrer"
                    className="card"
                    style={{ display: 'flex', flexDirection: 'column' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
                      <span className="tag">{t.tag}</span>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 13,
                          color: 'var(--ink-mute)',
                        }}
                      >
                        {t.num}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Prompt', sans-serif",
                        fontWeight: 700,
                        fontSize: 24,
                        marginBottom: 16,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {t.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Prompt', sans-serif",
                        fontSize: 15,
                        color: 'var(--ink-soft)',
                        lineHeight: 1.6,
                        marginBottom: 24,
                        flex: 1,
                      }}
                    >
                      {t.body}
                    </p>
                    <div
                      style={{
                        paddingTop: 24,
                        borderTop: '1px solid var(--line)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 12,
                      }}
                    >
                      {live ? (
                        <span
                          style={{
                            fontFamily: "'Prompt', sans-serif",
                            fontSize: 13,
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: 'var(--orange)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                          }}
                        >
                          <span className="pulse-dot" style={{ width: 6, height: 6 }} />
                          Lancer →
                        </span>
                      ) : (
                        <span
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 10,
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: 'var(--ink-mute)',
                          }}
                        >
                          Réhébergement en cours
                        </span>
                      )}
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 11,
                          color: 'var(--ink-mute)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {live ? new URL(target).hostname : 'v1 (Wix)'}
                      </span>
                    </div>
                  </a>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GPTs */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 64, maxWidth: 720 }}>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Les GPTs · 5 agents custom</p>
              <h2 className="display-2">
                Des agents <span className="serif accent">sur-mesure.</span>
              </h2>
              <p
                style={{
                  fontFamily: "'Prompt', sans-serif",
                  fontSize: 18,
                  color: 'var(--ink-soft)',
                  lineHeight: 1.6,
                  marginTop: 24,
                }}
              >
                Cinq GPTs publics conçus pour des cas d&apos;usage précis — viral, recrutement,
                identité visuelle, prompts API, branding. Accessibles directement sur ChatGPT.
              </p>
            </div>
          </Reveal>

          <Reveal stagger>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 24,
              }}
            >
              {GPTS.map((g, i) => (
                <a
                  key={g.title}
                  href={g.href}
                  target="_blank"
                  rel="noreferrer"
                  className="card"
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                    <span className="tag" style={{ background: 'rgba(67, 118, 189, 0.1)', color: 'var(--blue)', borderColor: 'rgba(67, 118, 189, 0.25)' }}>
                      GPT
                    </span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 13,
                        color: 'var(--ink-mute)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Prompt', sans-serif",
                      fontWeight: 700,
                      fontSize: 22,
                      marginBottom: 16,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {g.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Prompt', sans-serif",
                      fontSize: 14,
                      color: 'var(--ink-soft)',
                      lineHeight: 1.6,
                      marginBottom: 24,
                      flex: 1,
                    }}
                  >
                    {g.body}
                  </p>
                  <span
                    style={{
                      fontFamily: "'Prompt', sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: 'var(--orange)',
                      paddingTop: 20,
                      borderTop: '1px solid var(--line)',
                    }}
                  >
                    Tester sur ChatGPT →
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Applications */}
      <section className="section" style={{ background: 'var(--navy-deep)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.06,
            pointerEvents: 'none',
            backgroundImage:
              'radial-gradient(circle at 70% 30%, #ff6600 0, transparent 50%)',
          }}
        />
        <div className="container" style={{ position: 'relative' }}>
          <Reveal>
            <div style={{ marginBottom: 64, maxWidth: 720 }}>
              <p className="eyebrow" style={{ color: '#ff6600', marginBottom: 16 }}>Les applications · livrées</p>
              <h2 className="display-2" style={{ color: '#fff' }}>
                Du code en <span className="serif" style={{ color: '#fcc01e' }}>production.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal stagger>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                gap: 32,
              }}
            >
              {APPS.map((app) => (
                <a
                  key={app.name}
                  href={app.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    padding: 40,
                    color: '#fff',
                    transition: 'border-color 250ms, transform 250ms',
                    display: 'block',
                  }}
                  className="app-card"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: '#fcc01e',
                      }}
                    >
                      {app.status}
                    </span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 13,
                        color: 'rgba(255,255,255,0.5)',
                      }}
                    >
                      {app.name}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Prompt', sans-serif",
                      fontWeight: 700,
                      fontSize: 32,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.15,
                      marginBottom: 24,
                      color: '#fff',
                    }}
                  >
                    {app.tagline}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Prompt', sans-serif",
                      fontSize: 16,
                      color: 'rgba(255,255,255,0.72)',
                      lineHeight: 1.6,
                      marginBottom: 32,
                    }}
                  >
                    {app.body}
                  </p>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: 16,
                      paddingTop: 24,
                      borderTop: '1px solid rgba(255,255,255,0.12)',
                      marginBottom: 24,
                    }}
                  >
                    {app.metrics.map((m, i) => (
                      <div key={i}>
                        <p
                          style={{
                            fontFamily: "'Prompt', sans-serif",
                            fontWeight: 700,
                            fontSize: 28,
                            color: '#fcc01e',
                            letterSpacing: '-0.02em',
                            lineHeight: 1,
                            marginBottom: 6,
                          }}
                        >
                          {m.value}
                        </p>
                        <p
                          style={{
                            fontFamily: "'Prompt', sans-serif",
                            fontSize: 12,
                            color: 'rgba(255,255,255,0.55)',
                            lineHeight: 1.4,
                          }}
                        >
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <span
                    style={{
                      fontFamily: "'Prompt', sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#fcc01e',
                    }}
                  >
                    Voir le site →
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Realizations (sites livrés) */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 64, maxWidth: 720 }}>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Sites & projets livrés</p>
              <h2 className="display-2">
                Au-delà du <span className="serif accent">conseil.</span>
              </h2>
              <p
                style={{
                  fontFamily: "'Prompt', sans-serif",
                  fontSize: 18,
                  color: 'var(--ink-soft)',
                  lineHeight: 1.6,
                  marginTop: 24,
                }}
              >
                Quand le diagnostic appelle une livraison concrète — co-création, design, dev,
                contenu. De bout en bout.
              </p>
            </div>
          </Reveal>

          {REALIZATIONS.map((r) => (
            <Reveal key={r.name}>
              <div
                style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--line)',
                  padding: 'clamp(32px, 4vw, 56px)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    flexWrap: 'wrap',
                    gap: 12,
                    marginBottom: 24,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--orange)',
                    }}
                  >
                    {r.role}
                  </p>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 13,
                      color: 'var(--ink-mute)',
                      borderBottom: '1px solid var(--line)',
                    }}
                  >
                    {r.handle} →
                  </a>
                </div>

                <h3
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(36px, 4.5vw, 56px)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.05,
                    marginBottom: 12,
                  }}
                >
                  {r.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: 'italic',
                    fontSize: 26,
                    color: 'var(--orange)',
                    marginBottom: 32,
                  }}
                >
                  « {r.tagline} »
                </p>
                <p
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: 17,
                    color: 'var(--ink-soft)',
                    lineHeight: 1.65,
                    maxWidth: 880,
                    marginBottom: 40,
                  }}
                >
                  {r.body}
                </p>

                {/* Metrics */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: 24,
                    paddingBottom: 40,
                    marginBottom: 40,
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  {r.metrics.map((m, i) => (
                    <div key={i}>
                      <p
                        style={{
                          fontFamily: "'Prompt', sans-serif",
                          fontWeight: 700,
                          fontSize: 44,
                          color: 'var(--ink)',
                          letterSpacing: '-0.03em',
                          lineHeight: 1,
                          marginBottom: 6,
                        }}
                      >
                        {m.value}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Prompt', sans-serif",
                          fontSize: 13,
                          color: 'var(--ink-mute)',
                          lineHeight: 1.4,
                        }}
                      >
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Pillars + Stack */}
                <div
                  className="real-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 48,
                  }}
                >
                  <div>
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
                      Modules livrés
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {r.pillars.map((p, i) => (
                        <li
                          key={i}
                          style={{
                            fontFamily: "'Prompt', sans-serif",
                            fontSize: 15,
                            color: 'var(--ink)',
                            padding: '8px 0',
                            borderBottom:
                              i < r.pillars.length - 1 ? '1px solid var(--line)' : 'none',
                            display: 'flex',
                            gap: 10,
                          }}
                        >
                          <span style={{ color: 'var(--orange)' }}>—</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
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
                      Stack technique
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {r.stack.map((s, i) => (
                        <li
                          key={i}
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 14,
                            color: 'var(--ink-soft)',
                            padding: '8px 0',
                            borderBottom:
                              i < r.stack.length - 1 ? '1px solid var(--line)' : 'none',
                          }}
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={r.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ marginTop: 40 }}
                >
                  Voir Collectif Booster <span className="arrow">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <style>{`
          @media (max-width: 800px) {
            .real-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      <CTASection />

      <style>{`
        .app-card:hover { border-color: rgba(255,140,0,0.5) !important; transform: translateY(-4px); }
      `}</style>
    </div>
  )
}
