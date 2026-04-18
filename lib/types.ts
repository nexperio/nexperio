export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  cover_image_url: string | null
  first_published_at: string
  last_published_at: string
  featured: boolean
  minutes_to_read: number
  category_names: string[]
  tag_names: string[]
  wix_id: string
}

export interface CaseStudy {
  id: string
  title: string
  subtitle: string
  context: string
  challenge: string
  treatment: string
  results: string[]
  conclusion: string
}

export interface NavItem {
  label: string
  href: string
}
