// https://gist.github.com/codeguy/6684588
export function slugify(str: string | null | undefined) {
  return String(str)
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -_]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/\_+/g, '-') // replace underscores with hyphens
    .replace(/-+/g, '-'); // remove consecutive hyphens
}
