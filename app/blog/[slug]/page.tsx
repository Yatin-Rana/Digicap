import { client } from '../../../sanity/lib/client'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import { format } from 'date-fns'

async function getPost(slug: string) {
  return client.fetch(groq`
    *[_type == "post" && slug.current == $slug][0] {
      title,
      body,
      publishedAt,
      mainImage {
        asset-> {
          _id,
          url
        }
      }
    }
  `, { slug })
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  
  if (!post) {
    return <div className="container mx-auto px-4 py-8 text-center">Post not found</div>
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      {post.publishedAt && (
        <p className="text-gray-600 mb-6">
          Published on {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
        </p>
      )}
      {post.mainImage && (
        <img 
          src={post.mainImage.asset.url} 
          alt={post.title}
          className="w-full h-auto rounded-lg mb-8"
        />
      )}
      <div className="prose prose-lg max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  )
}

export async function generateStaticParams() {
  const posts = await client.fetch(groq`
    *[_type == "post"] {
      slug
    }
  `)

  return posts.map((post: any) => ({
    slug: post.slug.current,
  }))
}
