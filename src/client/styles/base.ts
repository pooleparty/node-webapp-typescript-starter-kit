import { pxToRem } from './utils';

export default `
  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }
`;
