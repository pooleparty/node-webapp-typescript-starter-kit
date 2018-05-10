import * as React from 'react';
import { Store } from 'redux';
import { RouteConfig } from 'react-router-config';
import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

export interface RouteConfigWithLoadData extends RouteConfig {
  component: React.ComponentType<any>;
  loadData?: (store: Store<any>, ...rest: any[]) => Promise<any>;
  routes?: RouteConfigWithLoadData[];
}

const Routes: RouteConfigWithLoadData[] = [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];

export default Routes;
