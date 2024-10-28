import { groq } from 'next-sanity'
import {client} from './client'
export async function getPosts() {
  return client.fetch(groq`
    *[_type == "post"] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt
    }
  `)
}
