import { format, parseISO } from "date-fns"
import { defineField, defineType } from "sanity"

export default defineType({
	name: "post",
	title: "Публикация",
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
			name: "mainImage",
			title: "Главное изображение",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "date",
			title: "Дата",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: "author",
			title: "Автор",
			type: "reference",
			to: [{ type: "author" }],
			initialValue: currentUser => ({
				_type: "reference",
				_ref: currentUser?.id, // Текущий пользователь
			}),
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
			author: "author.name", // Разыменование имени автора
			media: "mainImage",
			date: "date", // Подгружаем дату для подготовки подзаголовка
		},
		prepare({ title, media, author, date }) {
			const subtitles = [
				author && `Автор: ${author}`, // Добавляем имя автора
				date && `Дата: ${format(parseISO(date), "dd.MM.yyyy")}`, // Форматируем дату
			].filter(Boolean) // Убираем пустые значения

			return {
				title,
				media,
				subtitle: subtitles.join(" | "), // Собираем подзаголовок
			}
		},
	},
})
