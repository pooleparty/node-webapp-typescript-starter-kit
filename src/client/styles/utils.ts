export const pxToRem = (value: number): string => {
  const base = 16;
  return `${(value / base)}rem`;
};

export const baseFont = () => `font-family: 'Raleway', sans-serif`;
export const headerFont = () => `font-family: 'Montserrat', sans-serif`;
