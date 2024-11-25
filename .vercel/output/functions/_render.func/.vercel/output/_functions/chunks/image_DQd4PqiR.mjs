import imageUrlBuilder from '@sanity/image-url';
import { s as sanityClient } from './page-ssr_CZvOfM4M.mjs';

function formatDate(date) {
  return new Date(date).toLocaleDateString("ru-RU", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export { formatDate as f, urlFor as u };
