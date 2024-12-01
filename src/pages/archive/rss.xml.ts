import { getPosts } from "@/utils/sanity"
import rss from "@astrojs/rss"

export async function GET(context) {
	const posts = await getPosts()
	return rss({
		title: "АПРО RSS",
		description: "Посты от авторов: опыт",
		site: context.site,
		items: posts.map(post => ({
			title: post.title,
			pubDate: post.date,
			description: post.description,
			link: `/arhive/${post.slug.current}/`,
		})),
	})
}
