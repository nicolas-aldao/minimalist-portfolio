export const formatDateToMonthYear = (date: string): string => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  });

  const formattedDate = formatter.format(new Date(date));

  return formattedDate; // example Dec 2024
};
