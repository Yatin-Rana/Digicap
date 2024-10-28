// app/blog/[slug]/page.js
async function getPost(slug:any) {
    const res = await fetch(`http://localhost:3000/api/resources/${slug}`, { cache: 'no-store' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
  
  export default async function PostPage({ params }:any) {
    const post = await getPost(params.slug)
    
    return (
      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    )
  }
  