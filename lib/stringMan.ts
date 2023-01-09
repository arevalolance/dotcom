export const shortener = (string: string, length: number) => {
  return string?.slice(0, length) + "...";
};
