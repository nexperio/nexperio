import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CTASection from '@/components/CTASection'
import { Reveal } from '@/components/Reveal'
import { POSTS, getPost } from '@/lib/blog'

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return { title: 'Article introuvable' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: post.image
      ? { title: post.title, description: post.excerpt, images: [post.image] }
      : { title: post.title, description: post.excerpt },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const related = POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  ).slice(0, 3)

  return (
    <div className="page-enter">
      <article>
        <section
          style={{
            paddingTop: 140,
            paddingBottom: 64,
            background: 'var(--bg-soft)',
          }}
        >
          <div className="container" style={{ maxWidth: 860 }}>
            <Link
              href="/blog"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--ink-mute)',
                marginBottom: 32,
                display: 'inline-block',
              }}
            >
              ← Tous les articles
            </Link>
            <p className="eyebrow" style={{ marginBottom: 24 }}>
              <span className="pulse-dot" /> {post.category}
            </p>
            <h1
              className="display"
              style={{ marginBottom: 32, fontSize: 'clamp(32px, 4.6vw, 64px)' }}
            >
              {post.title}
            </h1>
            <div
              style={{
                display: 'flex',
                gap: 24,
                flexWrap: 'wrap',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink-mute)',
              }}
            >
              <span>{post.author}</span>
              <span>·</span>
              <span>{post.dateLabel}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </section>

        {post.image && (
          <section style={{ background: 'var(--bg-soft)', paddingBottom: 64 }}>
            <div className="container" style={{ maxWidth: 1100 }}>
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '16 / 9',
                  overflow: 'hidden',
                  borderRadius: 4,
                  background: 'var(--bg-section)',
                }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1100px) 100vw, 1100px"
                  priority
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </section>
        )}

        <section
          className="section"
          style={{ paddingTop: 64, paddingBottom: 64 }}
        >
          <div className="container blog-prose" style={{ maxWidth: 760 }}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
          </div>
        </section>

        {post.tags.length > 0 && (
          <section style={{ paddingBottom: 48 }}>
            <div
              className="container"
              style={{
                maxWidth: 760,
                display: 'flex',
                gap: 12,
                flexWrap: 'wrap',
              }}
            >
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </section>
        )}
      </article>

      {related.length > 0 && (
        <section className="section" style={{ background: 'var(--bg-section)' }}>
          <div className="container">
            <Reveal>
              <div style={{ marginBottom: 48 }}>
                <p className="eyebrow" style={{ marginBottom: 16 }}>
                  Sur le même sujet
                </p>
                <h2 className="display-2">
                  À lire <span className="serif accent">aussi.</span>
                </h2>
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
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="card"
                    style={{ display: 'flex', flexDirection: 'column' }}
                  >
                    {p.image && (
                      <div
                        style={{
                          position: 'relative',
                          aspectRatio: '16 / 10',
                          marginBottom: 20,
                          overflow: 'hidden',
                          borderRadius: 2,
                          background: 'var(--bg-soft)',
                        }}
                      >
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          sizes="(max-width: 700px) 100vw, 33vw"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    )}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 24,
                      }}
                    >
                      <span className="tag">{p.category}</span>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 11,
                          color: 'var(--ink-mute)',
                        }}
                      >
                        {p.readTime}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Prompt', sans-serif",
                        fontWeight: 700,
                        fontSize: 20,
                        lineHeight: 1.25,
                        letterSpacing: '-0.01em',
                        flex: 1,
                      }}
                    >
                      {p.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <CTASection />

      <style>{`
        .blog-prose {
          font-family: 'Prompt', sans-serif;
          font-size: 18px;
          line-height: 1.75;
          color: var(--ink);
        }
        .blog-prose > * + * { margin-top: 1.4em; }
        .blog-prose h2 {
          font-family: 'Prompt', sans-serif;
          font-weight: 700;
          font-size: clamp(28px, 3.2vw, 36px);
          letter-spacing: -0.01em;
          margin-top: 2.5em;
          margin-bottom: 0.6em;
          color: var(--ink);
        }
        .blog-prose h3 {
          font-family: 'Prompt', sans-serif;
          font-weight: 600;
          font-size: 22px;
          letter-spacing: -0.005em;
          margin-top: 2em;
          margin-bottom: 0.5em;
          color: var(--ink);
        }
        .blog-prose strong { font-weight: 600; color: var(--ink); }
        .blog-prose em { font-style: italic; }
        .blog-prose a {
          color: var(--orange);
          text-decoration: none;
          border-bottom: 1px solid var(--orange);
        }
        .blog-prose ul, .blog-prose ol { padding-left: 1.4em; }
        .blog-prose ul { list-style-type: disc; }
        .blog-prose ol { list-style-type: decimal; }
        .blog-prose li + li { margin-top: 0.4em; }
        .blog-prose blockquote {
          border-left: 3px solid var(--orange);
          padding-left: 24px;
          margin: 2em 0;
          font-family: 'Instrument Serif', serif;
          font-style: italic;
          font-size: 22px;
          color: var(--ink-soft);
        }
        .blog-prose code {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9em;
          background: var(--bg-soft);
          padding: 2px 6px;
          border-radius: 2px;
        }
        .blog-prose hr {
          border: 0;
          border-top: 1px solid var(--line);
          margin: 3em 0;
        }
      `}</style>
    </div>
  )
}
