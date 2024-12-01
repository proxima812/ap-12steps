import groq from "groq"
import { sanityClient } from "sanity:client"

// Интерфейс поста
export interface Post {
	title: string
	slug: { current: string }
	mainImage: string | null
	excerpt: string
	_createdAt: string
	author: {
		name: string
		image?: string
	}
}

// Функция для получения всех постов
export async function getPosts(): Promise<Post[]> {
	const query = groq`
    *[_type == "post" && defined(slug.current)] | order(_createdAt desc){
      title,
      slug,
      mainImage,
      description,
      date,
      _createdAt,
      author->{
        name,
        picture
      }
    }
  `

	try {
		const posts = await sanityClient.fetch<Post[]>(query)
		return posts
	} catch (error) {
		console.error("Error fetching posts:", error)
		return [] // Возвращаем пустой массив в случае ошибки
	}
}

export async function getNews(): Promise<Post[]> {
	const query = groq`
    *[_type == "news" && defined(slug.current)] | order(_createdAt desc){
      title,
      slug,
      description,
      date,
      body,
      _createdAt,
    }
  `

	try {
		const posts = await sanityClient.fetch<Post[]>(query)
		return posts
	} catch (error) {
		console.error("Error fetching posts:", error)
		return [] // Возвращаем пустой массив в случае ошибки
	}
}

export async function getGroups() {
	const query = groq`
  *[_type == "group"] | order(day desc, time desc) {
    title,
    day,
    time,
    authors,
    description,
    link
  }
  `
	try {
		const groups = await sanityClient.fetch(query)
		return groups || null // Если данных нет, возвращаем null
	} catch (error) {
		console.error(`Error fetching groups:`, error)
		return null // Возвращаем null в случае ошибки
	}
}

// export async function getGroup(slug) {
// 	const query = groq`
//     *[_type == "group" && slug.current == $slug][0]{
//       title,
//       slug,
//       time,
//       authors,
//       description,
//       day,
//       _createdAt,
//       link
//     }
//   `
// 	try {
// 		const group = await sanityClient.fetch(query, { slug })
// 		return group || null // Если пост не найден, возвращаем null
// 	} catch (error) {
// 		console.error(`Error fetching post with slug "${slug}":`, error)
// 		return null // Возвращаем null в случае ошибки
// 	}
// }

// Функция для получения одного поста по slug
export async function getPost(slug: string): Promise<Post | null> {
	const query = groq`
    *[_type == "post" && slug.current == $slug][0]{
      title,
      slug,
      date,
      body,
      mainImage,
      description,
      _createdAt,
      author->{
        name,
        picture
      }
    }
  `
	try {
		const post = await sanityClient.fetch<Post>(query, { slug })
		return post || null // Если пост не найден, возвращаем null
	} catch (error) {
		console.error(`Error fetching post with slug "${slug}":`, error)
		return null // Возвращаем null в случае ошибки
	}
}
