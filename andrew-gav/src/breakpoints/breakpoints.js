// deciding on breakpoints and creating importable template literals for reusability // 
const points = {
  S: '768px',
  M: '1024px',
  L: '1440px',
  XL: '2560px',
};

const breakpoints = {
  small: `(min-width: ${points.S})`,
  medium: `(min-width: ${points.M})`,
  large: `(min-width: ${points.L})`,
  extraLarge: `(min-width: ${points.XL})`,
};

export default breakpoints;