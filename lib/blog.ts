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
}

import { POSTS as BLOG_POSTS_DATA } from './blog/data'

export const POSTS: BlogPost[] = [...BLOG_POSTS_DATA].sort((a, b) =>
  b.date.localeCompare(a.date),
)

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug || p.legacySlug === slug)
}

export function getAllSlugs(): string[] {
  return POSTS.map((p) => p.slug)
}
