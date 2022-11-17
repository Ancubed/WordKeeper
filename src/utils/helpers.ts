export const trimAllString = (str: string): string => {
  return str
    .trim()
    .split(/\s+/)
    .map((elem) => elem.trim())
    .join(" ");
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
