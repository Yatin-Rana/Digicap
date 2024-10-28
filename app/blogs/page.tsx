// pages/blog/index.tsx or app/blog/page.tsx (depending on your Next.js version)
'use client'
import { client } from '../../sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'
import groq from 'groq'
import { format } from 'date-fns'
import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import ErrorBoundary from '../components/errorBoundary' // You need to create this component
import { useState, useEffect } from 'react'

interface Post {
  _id: string
  title: string
  body: PortableTextBlock[]
  slug: { current: string }
  publishedAt: string
  excerpt?: string
  mainImage?: { asset: { url: string } }
}

async function getPosts(): Promise<Post[]> {
  try {
    const posts = await client.fetch(groq`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        body,
        slug,
        publishedAt,
        excerpt,
        mainImage
      }
    `)
    return posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}

function trimBodyContent(body: PortableTextBlock[] | string): string {
  if (typeof body === 'string') {
    const words = body.split(' ')
    return words.slice(0, 20).join(' ') + (words.length > 20 ? '...' : '')
  } else if (Array.isArray(body)) {
    let wordCount = 0
    let trimmedBody: string[] = []
    for (let block of body) {
      if (block._type === 'block' && Array.isArray(block.children)) {
        const words = block.children.flatMap((child) => {
          if (typeof child === 'object' && 'text' in child && typeof child.text === 'string') {
            return child.text.split(' ')
          }
          return []
        })
        for (let word of words) {
          if (wordCount < 20) {
            trimmedBody.push(word)
            wordCount++
          } else {
            break
          }
        }
        if (wordCount >= 20) break
      }
    }
    return trimmedBody.join(' ') + '...'
  }
  return ''
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getPosts()
        setPosts(fetchedPosts)
      } catch (err) {
        setError('Failed to load blog posts')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (isLoading) {
    return <div className="text-center text-2xl mt-10">Loading...</div>
  }

  if (error) {
    return <div className="text-center text-2xl mt-10 text-red-600">{error}</div>
  }

  if (!posts || posts.length === 0) {
    return <div className="text-center text-2xl mt-10">No posts found</div>
  }

  return (
    <ErrorBoundary>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">Our Blog</h1>
        <div className="space-y-16">
          {posts.map((post) => (
            <div key={post._id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {post.mainImage && post.mainImage.asset && (
                <div className="relative h-64 w-full">
                  <Image 
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-3xl font-semibold mb-3 text-gray-800">
                  {post.title}
                </h2>
                {post.publishedAt && (
                  <p className="text-sm text-gray-500 mb-4">
                    {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                  </p>
                )}
                {post.excerpt && (
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                )}
                <div className="prose prose-lg max-w-none mb-6">
                  {trimBodyContent(post.body)}
                </div>
                <Link href={`/blog/${post.slug.current}`} className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600">
                  Read Full Post
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ErrorBoundary>
  )
}
