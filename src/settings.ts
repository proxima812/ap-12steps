export const config = {
	site: {
		base: {
			url: "https://papro.vercel.app/",
		},
		OG: {
			site_name: "АПРО - Анонимные Прокрастинаторы",
			author: "АПРО/APRO",
			title: "АПРО - Анонимные Прокрастинаторы",
			description:
				"У тебя проблема с прокрастинацией? - возможно, мы поможем! Рады вам из стран СНГ, ЕАЭС, ОДКБ, ЕС, ГУАМ, БРИКС, ОТГ.",
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
		short_name: "АПРО",
		theme_color: "#888",
		background_color: "#888",
		// fullscreen / standalone / minimal-ui / browser
		display: "minimal-ui",
	},
}
