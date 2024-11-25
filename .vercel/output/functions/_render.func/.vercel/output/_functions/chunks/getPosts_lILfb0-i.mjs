import { g as getCollection } from './_astro_content_CHOSZeGP.mjs';

const getAllPosts = async (content) => {
  const posts = (await getCollection(content)).filter(({ data }) => data.draft !== true ).sort((a, b) => +new Date(b.data.datePublished) - +new Date(a.data.datePublished));
  return posts;
};

export { getAllPosts as g };
