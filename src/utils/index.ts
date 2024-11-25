export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("ru-RU", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
