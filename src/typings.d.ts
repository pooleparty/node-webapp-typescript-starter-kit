declare module '*.jpg' {
  const value: string;
  export default value;
}

interface AppState {}

interface AppWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  INITIAL_STATE?: any;
}

interface Context {
  url?: string;
  notFound?: boolean;
}
