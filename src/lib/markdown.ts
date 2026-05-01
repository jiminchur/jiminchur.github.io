import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/blog')

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  category: "Story" | "Tech"
  content: string
  readingTime: number
}

export function getAllPostSlugs() {
  if (!fs.existsSync(contentDirectory)) return []
  const fileNames = fs.readdirSync(contentDirectory)
  return fileNames.filter((fileName) => fileName.endsWith('.md'))
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Calculate reading time (roughly 200 words per minute)
    const words = content.trim().split(/\s+/).length
    const readingTime = Math.ceil(words / 200)

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || 'No Date',
      description: data.description || '',
      category: data.category || 'Tech',
      content,
      readingTime,
    }
  } catch (e) {
    return null
  }
}

export function getAllPosts(): Post[] {
  const fileNames = getAllPostSlugs()
  const posts = fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      return getPostBySlug(slug)
    })
    .filter((post): post is Post => post !== null)
    .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
  
  return posts
}

export interface Heading {
  level: number
  text: string
  id: string
}

export function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.*)$/gm
  const headings: Heading[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2]
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')

    headings.push({ level, text, id })
  }

  return headings
}

