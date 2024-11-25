import groq from 'groq';
import { s as sanityClient } from './page-ssr_CZvOfM4M.mjs';

async function getPosts() {
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
  `;
  try {
    const posts = await sanityClient.fetch(query);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
async function getGroups() {
  const query = groq`
  *[_type == "group"] | order(day desc, time desc) {
    title,
    day,
    time,
    authors,
    description,
    link
  }
  `;
  try {
    const groups = await sanityClient.fetch(query);
    return groups || null;
  } catch (error) {
    console.error(`Error fetching groups:`, error);
    return null;
  }
}
async function getPost(slug) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0]{
      title,
      slug,
      date,
      mainImage,
      description,
      _createdAt,
      author->{
        name,
        picture
      }
    }
  `;
  try {
    const post = await sanityClient.fetch(query, { slug });
    return post || null;
  } catch (error) {
    console.error(`Error fetching post with slug "${slug}":`, error);
    return null;
  }
}

export { getPosts as a, getPost as b, getGroups as g };
