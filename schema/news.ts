import { format, parseISO } from "date-fns"
import { defineField, defineType } from "sanity"

export default defineType({
	name: "news",
	title: "Новости",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Заголовок",
			type: "string",
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Слаг (URL)",
			type: "slug",
			validation: Rule => Rule.required(),
			options: {
				source: "title",
				maxLength: 96,
			},
		}),
		defineField({
			name: "description",
			title: "Описание",
			type: "text",
			rows: 4,
		}),
		defineField({
			name: "date",
			title: "Дата",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: "body",
			title: "Содержимое",
			type: "blockContent",
		}),
	],
	preview: {
		select: {
			title: "title",
			date: "date", // Подгружаем дату для подготовки подзаголовка
		},
		prepare({ title, date }) {
			const subtitles = [
				date && `Дата: ${format(parseISO(date), "dd.MM.yyyy")}`, // Форматируем дату
			].filter(Boolean) // Убираем пустые значения

			return {
				title,
				subtitle: subtitles.join(" | "), // Собираем подзаголовок
			}
		},
	},
})
