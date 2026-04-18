import type { Metadata } from 'next'
import Link from 'next/link'
import { getBlogPosts } from '@/lib/supabase'
import CTASection from '@/components/CTASection'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Les dernières piqûres de rappel du Docteur Digital. E-commerce, expérience client, IA.',
}

const FALLBACK_POSTS = [
  {
    id: '1',
    title: 'E-commerce : Et si votre croissance était freinée par l\'un de ces 7 pièges invisibles ?',
    slug: 'e-commerce-et-si-votre-croissance-etait-freinee-par-les-7-pieges',
    excerpt:
      'Le marché e-commerce français a atteint un point de bascule. En 2025, l\'accélération ne suffit plus : il faut de la précision, de la résilience et une expérience client irréprochable.',
    first_published_at: '2025-04-17T15:15:09.125Z',
    featured: true,
    minutes_to_read: 2,
    category_names: ['E-commerce', 'Stratégie'],
  },
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPage() {
  let posts: any[] = []
  try {
    posts = await getBlogPosts()
  } catch {
    posts = FALLBACK_POSTS
  }

  const featured = posts.find((p: any) => p.featured) || posts[0]
  const rest = posts.filter((p: any) => p.id !== featured?.id)

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container-max">
          <p className="font-heading text-brand-orange text-sm tracking-widest uppercase mb-4">
            Le blog du Docteur Digital
          </p>
          <h1 className="font-heading font-bold text-5xl md:text-6xl leading-tight">
            Nos dernières <span className="text-brand-orange">piqûres de rappel</span>
          </h1>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="section-padding bg-brand-navy text-white">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="tag border-brand-orange/50 text-brand-orange bg-brand-orange/10">
                    Article vedette
                  </span>
                  {featured.category_names?.map((cat: string) => (
                    <span key={cat} className="text-xs font-heading text-gray-400 uppercase tracking-wide">
                      {cat}
                    </span>
                  ))}
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl leading-tight mb-6">
                  {featured.title}
                </h2>
                <p className="font-heading text-gray-300 leading-relaxed mb-8">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-6 mb-8">
                  <span className="font-heading text-xs text-gray-500">
                    {formatDate(featured.first_published_at)}
                  </span>
                  <span className="font-heading text-xs text-gray-500">
                    {featured.minutes_to_read} min de lecture
                  </span>
                </div>
                <Link href={`/blog/${featured.slug}`} className="btn-primary">
                  Lire l'article
                </Link>
              </div>
              <div className="bg-gray-900 p-10 border border-gray-700">
                <p className="font-heading text-brand-orange text-sm tracking-widest uppercase mb-4">
                  💉 Prescription du Docteur
                </p>
                <p className="font-heading text-white font-bold text-xl leading-relaxed">
                  "J'ai vu des business e-commerce doubler leurs ventes en ligne en une année.
                  Ça vous intéresse que je vous raconte ?"
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All posts */}
      {rest.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post: any) => (
                <article key={post.id} className="bg-white border border-gray-100 hover:border-brand-orange transition-colors duration-300 group">
                  <div className="p-8">
                    <div className="flex gap-2 mb-4 flex-wrap">
                      {post.category_names?.slice(0, 2).map((cat: string) => (
                        <span key={cat} className="tag text-xs">{cat}</span>
                      ))}
                    </div>
                    <h3 className="font-heading font-bold text-xl leading-snug mb-4 group-hover:text-brand-orange transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-heading text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-xs text-gray-400">
                        {formatDate(post.first_published_at)}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="font-heading text-sm font-semibold text-brand-blue hover:text-brand-orange transition-colors"
                      >
                        Lire →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
