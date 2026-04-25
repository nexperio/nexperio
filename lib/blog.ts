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
  'ecommerce-7-pieges-invisibles': '/blog/ecommerce-7-pieges-invisibles.png',
  'doubler-ventes-ecommerce-upsell': '/blog/doubler-ventes-ecommerce-upsell.png',
  'beaute-strategie-ecommerce-miroir': '/blog/beaute-strategie-ecommerce-miroir.png',
  'levier-strategique-meconnu-recherche-interne': '/blog/levier-strategique-meconnu-recherche-interne.png',
  'digital-river-depot-de-bilan': '/blog/digital-river-depot-de-bilan.png',
  'mobile-conversion-superieure': '/blog/mobile-conversion-superieure.png',
  'qwen-alibaba-ia': '/blog/qwen-alibaba-ia.png',
  'commerce-social-2025-transformation': '/blog/commerce-social-2025-transformation.png',
  'bataille-intelligence-artificielle-openai-deepseek': '/blog/bataille-intelligence-artificielle-openai-deepseek.png',
  'deepseek-grain-de-sel': '/blog/deepseek-grain-de-sel.png',
  'perplexity-assistant-autonome': '/blog/perplexity-assistant-autonome.png',
  'lighthouse-google-audit': '/blog/lighthouse-google-audit.png',
  'realite-augmentee-essayage-virtuel-shopify': '/blog/realite-augmentee-essayage-virtuel-shopify.png',
  'commerce-social-poule-aux-oeufs-d-or': '/blog/commerce-social-poule-aux-oeufs-d-or.png',
  'ia-ecommerce-science-fiction-realite': '/blog/ia-ecommerce-science-fiction-realite.png',
  'forrester-predictions-2025-ia': '/blog/forrester-predictions-2025-ia.png',
  'ecommerce-du-minitel-aux-achats-vocaux': '/blog/ecommerce-du-minitel-aux-achats-vocaux.jpeg',
  'revolution-paiement-ecommerce': '/blog/revolution-paiement-ecommerce.png',
  'e-tourisme-francais-essor': '/blog/e-tourisme-francais-essor.png',
  'or-olympique-logistique-ecommerce': '/blog/or-olympique-logistique-ecommerce.png',
  'art-assortiment-produits-ecommerce': '/blog/art-assortiment-produits-ecommerce.png',
  'ecommerce-b2b-7-tactiques': '/blog/ecommerce-b2b-7-tactiques.png',
  'formule-magique-ecommerce-trafic-conversion-panier': '/blog/formule-magique-ecommerce-trafic-conversion-panier.png',
  'reseaux-sociaux-toile-innovation': '/blog/reseaux-sociaux-toile-innovation.png',
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
