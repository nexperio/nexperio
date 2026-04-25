export type BlogPost = {
  /** URL slug used in /blog/[slug] */
  slug: string
  /** Original Wix slug for legacy redirects */
  legacySlug?: string
  title: string
  excerpt: string
  /** ISO date YYYY-MM-DD */
  date: string
  /** Display date FR */
  dateLabel: string
  readTime: string
  category: string
  tags: string[]
  author: string
  /** Markdown body */
  body: string
  /** Cover illustration (resolved from BLOG_IMAGES) */
  image?: string
}

import { POSTS as BLOG_POSTS_DATA } from './blog/data'

const BLOG_IMAGES: Record<string, string> = {
  'ecommerce-7-pieges-invisibles': '/blog/ecommerce-7-pieges-invisibles.jpg',
  'doubler-ventes-ecommerce-upsell': '/blog/doubler-ventes-ecommerce-upsell.jpg',
  'beaute-strategie-ecommerce-miroir': '/blog/beaute-strategie-ecommerce-miroir.jpg',
  'levier-strategique-meconnu-recherche-interne': '/blog/levier-strategique-meconnu-recherche-interne.jpg',
  'digital-river-depot-de-bilan': '/blog/digital-river-depot-de-bilan.jpg',
  'mobile-conversion-superieure': '/blog/mobile-conversion-superieure.jpg',
  'qwen-alibaba-ia': '/blog/qwen-alibaba-ia.jpg',
  'commerce-social-2025-transformation': '/blog/commerce-social-2025-transformation.jpg',
  'bataille-intelligence-artificielle-openai-deepseek': '/blog/bataille-intelligence-artificielle-openai-deepseek.jpg',
  'deepseek-grain-de-sel': '/blog/deepseek-grain-de-sel.jpg',
  'perplexity-assistant-autonome': '/blog/perplexity-assistant-autonome.jpg',
  'lighthouse-google-audit': '/blog/lighthouse-google-audit.jpg',
  'realite-augmentee-essayage-virtuel-shopify': '/blog/realite-augmentee-essayage-virtuel-shopify.jpg',
  'commerce-social-poule-aux-oeufs-d-or': '/blog/commerce-social-poule-aux-oeufs-d-or.jpg',
  'ia-ecommerce-science-fiction-realite': '/blog/ia-ecommerce-science-fiction-realite.jpg',
  'forrester-predictions-2025-ia': '/blog/forrester-predictions-2025-ia.jpg',
  'ecommerce-du-minitel-aux-achats-vocaux': '/blog/ecommerce-du-minitel-aux-achats-vocaux.jpg',
  'revolution-paiement-ecommerce': '/blog/revolution-paiement-ecommerce.jpg',
  'e-tourisme-francais-essor': '/blog/e-tourisme-francais-essor.jpg',
  'or-olympique-logistique-ecommerce': '/blog/or-olympique-logistique-ecommerce.jpg',
  'art-assortiment-produits-ecommerce': '/blog/art-assortiment-produits-ecommerce.jpg',
  'ecommerce-b2b-7-tactiques': '/blog/ecommerce-b2b-7-tactiques.jpg',
  'formule-magique-ecommerce-trafic-conversion-panier': '/blog/formule-magique-ecommerce-trafic-conversion-panier.jpg',
  'reseaux-sociaux-toile-innovation': '/blog/reseaux-sociaux-toile-innovation.jpg',
}

export const POSTS: BlogPost[] = [...BLOG_POSTS_DATA]
  .map((p) => ({ ...p, image: BLOG_IMAGES[p.slug] }))
  .sort((a, b) => b.date.localeCompare(a.date))

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug || p.legacySlug === slug)
}

export function getAllSlugs(): string[] {
  return POSTS.map((p) => p.slug)
}
