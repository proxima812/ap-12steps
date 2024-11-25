import { format, parseISO } from "date-fns"
import { defineField, defineType } from "sanity"

export default defineType({
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			validation: Rule => Rule.required(),
			options: {
				source: "title",
				maxLength: 96,
			},
		}),
		defineField({
			name: "description",
			title: "description",
			type: "text",
			rows: 4,
		}),
		defineField({
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "date",
			title: "Date",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: "author",
			title: "Author",
			type: "reference",
			to: [{ type: "author" }],
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "blockContent",
		}),
	],
	preview: {
		select: {
			title: "title",
			author: "author.name", // Разыменование имени автора
			media: "mainImage",
			date: "date", // Подгружаем дату для подготовки подзаголовка
		},
		prepare({ title, media, author, date }) {
			const subtitles = [
				author && `by ${author}`, // Добавляем имя автора
				date && `on ${format(parseISO(date), "LLL d, yyyy")}`, // Форматируем дату
			].filter(Boolean) // Убираем пустые значения

			return {
				title,
				media,
				subtitle: subtitles.join(" "), // Собираем подзаголовок
			}
		},
	},
})
