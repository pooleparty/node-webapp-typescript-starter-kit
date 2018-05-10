import * as React from 'react';
import { injectGlobal } from 'styled-components';
import base from './styles/base';

injectGlobal`${base}`;

interface Props {
  className?: string;
}

const App: React.SFC<Props> = ({ className }) => (
  <div className={className}>
    <h1>Hello, Typescript World!</h1>
  </div>
);

export default App;
