export const canEditOwnPosts = ({ currentUser }) => ({
	read: true,
	create: true,
	update: {
		filter: "author._ref == $currentUserId", // Разрешено обновление только своих постов
		params: { currentUserId: currentUser?.id }, // ID текущего пользователя
	},
	delete: {
		filter: "author._ref == $currentUserId", // Разрешено удаление только своих постов
		params: { currentUserId: currentUser?.id },
	},
})
