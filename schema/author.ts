import { defineField, defineType } from "sanity"

export default defineType({
	name: "author",
	title: "Автор", 
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Имя", 
			type: "string",
			validation: rule => rule.required(),
		}),
		defineField({
			name: "picture",
			title: "Фото", 
			type: "image",
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Альтернативный текст", 
					description: "Важно для SEO и доступности.",
				},
			],
			options: { hotspot: true },
			validation: rule => rule.required(),
		}),
	],
})
