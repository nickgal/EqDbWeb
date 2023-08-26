import slug from 'slug'

export function slugify(str: string | null | undefined) {
  str = String(str).replace('_','-') // enforce replacement over removal
  return slug(str)
}
