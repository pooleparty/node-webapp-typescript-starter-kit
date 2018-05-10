export const pxToRem = (value: number): string => {
  const base = 16;
  return `${value / base}rem`;
};

export const lighten = (color: string, amount: number) => {
  return `color: ${color}; opacity:  ${amount};`;
};
