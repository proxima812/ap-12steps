import { defineField, defineType } from "sanity"

export default defineType({
	name: "group",
	title: "Группа",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Название группы",
			initialValue: "Группа АПРО",
			type: "string",
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: "time",
			title: "Время",
			initialValue: "18:00",
			type: "string",
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: "authors",
			title: "Ведущий(-ая)",
			initialValue: "Иван",
			type: "string",
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: "day",
			title: "День недели",
			type: "string",
			initialValue: "Понедельник",
			options: {
				list: [
					{ title: "Понедельник", value: "Понедельник" },
					{ title: "Вторник", value: "Вторник" },
					{ title: "Среда", value: "Среда" },
					{ title: "Четверг", value: "Четверг" },
					{ title: "Пятница", value: "Пятница" },
					{ title: "Суббота", value: "Суббота" },
					{ title: "Воскресенье", value: "Воскресенье" },
				],
			},
			validation: Rule => Rule.required(),
		}),
		// defineField({
		// 	name: "slug",
		// 	title: "Slug",
		// 	type: "slug",
		// 	validation: Rule => Rule.required(),
		// 	options: {
		// 		source: "title",
		// 		maxLength: 96,
		// 	},
		// }),
		defineField({
			name: "description",
			title: "Формат встречи",
			initialValue: "По темам.",
			type: "text",
			rows: 4,
		}),
		defineField({
			name: "link",
			title: "Ссылка на группу",
			initialValue: "https://t.me/community_pa",
			type: "url",
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
			day: "day",
			time: "time",
		},
		prepare({ title, day, time }) {
			const daysMap = {
				monday: "Понедельник",
				tuesday: "Вторник",
				wednesday: "Среда",
				thursday: "Четверг",
				friday: "Пятница",
				saturday: "Суббота",
				sunday: "Воскресенье",
			}

			return {
				title,
				subtitle: `${daysMap[day]} в ${time || "N/A"}`,
			}
		},
	},
})
