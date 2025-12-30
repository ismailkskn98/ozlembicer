export const textLimitCharecter = (text, maxLenght = 30) => {
  if (text && text.lenght <= maxLenght) return text;
  return text ? text.slice(0, maxLenght) + "..." : "";
};
