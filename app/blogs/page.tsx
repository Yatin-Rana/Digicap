import { client } from '../../sanity/lib/client'
import Link from 'next/link'
import groq from 'groq'
import { format } from 'date-fns'

async function getPosts() {
  return client.fetch(groq`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage
    }
  `)
}

export default async function BlogPage() {
  const posts = await getPosts()
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <Link href={`/blog/${post.slug.current}`} key={post._id} className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              {post.mainImage && (
                <img 
                  src={post.mainImage.asset.url} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4">
                  {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                </p>
                {post.excerpt && (
                  <p className="text-gray-700 line-clamp-3">{post.excerpt}</p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
