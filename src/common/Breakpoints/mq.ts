export const Breakpoints = {
  sm: 320,
  md: 500,
  lg: 900,
};

export const MQ = (minWidth: number) => {
  return `@media screen and (min-width: ${minWidth}px)`;
};

export const MQmax = (minWidth: number) => {
  return `@media screen and (max-width: ${minWidth}px)`;
};
