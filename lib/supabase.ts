import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Lazy client — only instantiated when env vars are present
let _client: SupabaseClient | null = null

function getClient(): SupabaseClient {
  if (_client) return _client
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) {
    throw new Error('Supabase env vars not configured')
  }
  _client = createClient(url, key)
  return _client
}

export async function getBlogPosts() {
  const { data, error } = await getClient()
    .from('blog_posts')
    .select('*')
    .order('first_published_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function getBlogPost(slug: string) {
  const { data, error } = await getClient()
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single()
  if (error) throw error
  return data
}

export async function getFeaturedPost() {
  try {
    const { data } = await getClient()
      .from('blog_posts')
      .select('*')
      .eq('featured', true)
      .limit(1)
      .single()
    return data
  } catch {
    return null
  }
}
