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
    font-size: ${pxToRem(14)};
    line-height: 1.35

    @media only screen and (min-width: 992px) {
      font-size: ${pxToRem(15)};
    }

    @media only screen and (min-width: 1200px) {
      font-size: ${pxToRem(16)};
    }
  }
`;
