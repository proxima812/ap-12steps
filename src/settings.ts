export const config = {
	site: {
		base: {
			url: "https://ap-12steps.pages.dev",
		},
		OG: {
			site_name: "АП - анонимные прокрастинаторы",
			author: "samgold",
			title: "АП - анонимные прокрастинаторы",
			description:
				"У тебя проблема с прокрастинацией, ленью и СДВГ - возможно, мы поможем! Рад всем из всех стран мира.",
			locale: "ru",
			defaultImage: "default-ogImage.png",
		},
	},
	verifications: {
		yandex: "",
		google: "",
		bing: "",
		// ...
	},
	manifest: {
		short_name: "АП - сайт",
		theme_color: "#888",
		background_color: "#888",
		// fullscreen / standalone / minimal-ui / browser
		display: "minimal-ui",
	},
}
