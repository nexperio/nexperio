import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPost, getBlogPosts } from '@/lib/supabase'
import CTASection from '@/components/CTASection'

// Pages are generated on-demand (ISR) — no static params needed at build time
export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  try {
    const post = await getBlogPost(params.slug)
    return {
      title: post?.title,
      description: post?.excerpt,
    }
  } catch {
    return { title: 'Article' }
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Fallback post used when Supabase is not yet configured
const FALLBACK_POST = {
  id: '1',
  title: 'E-commerce : Et si votre croissance était freinée par l\'un de ces 7 pièges invisibles ?',
  slug: 'e-commerce-et-si-votre-croissance-etait-freinee-par-les-7-pieges',
  excerpt: 'Le marché e-commerce français a atteint un point de bascule. En 2025, l\'accélération ne suffit plus.',
  content: '<p>Contenu disponible après configuration de Supabase.</p>',
  first_published_at: '2025-04-17T15:15:09.125Z',
  minutes_to_read: 2,
  category_names: ['E-commerce', 'Stratégie'],
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  let post: any = null

  try {
    post = await getBlogPost(params.slug)
  } catch {
    // Supabase not configured or post not found — use fallback for known slugs
    if (params.slug.includes('e-commerce') || params.slug.includes('7-pieges')) {
      post = FALLBACK_POST
    }
  }

  if (!post) notFound()

  return (
    <>
      {/* Article header */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container-max max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/blog" className="font-heading text-sm text-gray-400 hover:text-brand-pink transition-colors">
              ← Blog
            </Link>
            {post.category_names?.map((cat: string) => (
              <span key={cat} className="tag">{cat}</span>
            ))}
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl leading-tight mb-6">
            {post.title}
          </h1>
          <p className="font-heading text-xl text-gray-500 leading-relaxed mb-8">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
            <div>
              <p className="font-heading font-semibold text-sm">Le Docteur Digital</p>
              <p className="font-heading text-xs text-gray-400">Arnaud Guedj — Nexperio</p>
            </div>
            <span className="text-gray-200">|</span>
            <p className="font-heading text-xs text-gray-400">
              {formatDate(post.first_published_at)}
            </p>
            <span className="text-gray-200">|</span>
            <p className="font-heading text-xs text-gray-400">
              {post.minutes_to_read} min de lecture
            </p>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          {post.content ? (
            <div
              className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-a:text-brand-blue prose-a:no-underline hover:prose-a:text-brand-pink max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p className="font-heading text-gray-500 italic">
              Contenu disponible après configuration de Supabase.
            </p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}
