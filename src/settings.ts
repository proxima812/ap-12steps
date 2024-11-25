export const config = {
	site: {
		base: {
			url: "https://papro.vercel.app/",
		},
		OG: {
			site_name: "АПРО - анонимные прокрастинаторы",
			author: "samgold",
			title: "АПРО - Анонимные Прокрастинаторы",
			description:
				"У тебя проблема с прокрастинацией - возможно, мы поможем! Рады всем из всех стран мира.",
			locale: "ru",
			defaultImage: "default-ogImage.png",
		},
	},
	verifications: {
		yandex: "",
		google: "",
		bing: "",
		//...
	},
	manifest: {
		short_name: "АПРО - сайт",
		theme_color: "#888",
		background_color: "#888",
		// fullscreen / standalone / minimal-ui / browser
		display: "minimal-ui",
	},
}
