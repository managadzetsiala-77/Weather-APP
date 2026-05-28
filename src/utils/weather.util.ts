export function formatDate(array: string | undefined | []): string | null {
  if (!array) return null;

  const date = array[0];

  const formatedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  return formatedDate;
}

export function getDay(param: string) {
  const day = new Date(param).toLocaleDateString("en-US", {
    weekday: "long",
  });

  return day;
}
