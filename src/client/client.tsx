import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const client = <App />;

const root = document.getElementById('root');

ReactDOM.hydrate(client, root);
