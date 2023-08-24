import slug from 'slug'

export function slugify(str: string | null | undefined) {
  return slug(String(str))
}
