import { client } from '../../sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'
import groq from 'groq'
import { format } from 'date-fns'
import { PortableText } from '@portabletext/react'

async function getPosts() {
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
    console.log('Fetched posts:', posts)
    return posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}

function trimBodyContent(body: any) {
  if (typeof body === 'string') {
    const words = body.split(' ')
    return words.slice(0, 20).join(' ') + (words.length > 20 ? '...' : '')
  } else if (Array.isArray(body)) {
    let wordCount = 0
    let trimmedBody = []
    for (let block of body) {
      if (block._type === 'block') {
        //@ts-ignore
        const words = block.children.flatMap(child  => child.text.split(' '))
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

export default async function BlogPage() {
  try {
    const posts = await getPosts()
    
    if (!posts || posts.length === 0) {
      return <div className="text-center text-2xl mt-10">No posts found</div>
    }

    return (
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">Our Blog</h1>
        <div className="space-y-16">
          {posts.map((post: any) => (
            <div key={post._id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {post.mainImage && post.mainImage.asset && (
                <div className="relative h-64 w-full">
                  <Image 
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
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
    )
  } catch (error) {
    console.error('Error in BlogPage:', error)
    return <div className="text-center text-2xl mt-10 text-red-600">Error loading blog posts</div>
  }
}
