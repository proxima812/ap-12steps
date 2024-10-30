import rss from "@astrojs/rss"
import { getCollection } from "astro:content"

export async function GET(context) {
	const blog = await getCollection("posts")
	return rss({
		title: "АП RSS",
		description: "Посты и материалы",
		site: context.site,
		items: blog.map(post => ({
			title: post.data.title,
			pubDate: post.data.datePublished,
			description: post.data.description,
			link: `/posts/${post.slug}/`,
		})),
	})
}
