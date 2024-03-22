export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour12: false,
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
};
