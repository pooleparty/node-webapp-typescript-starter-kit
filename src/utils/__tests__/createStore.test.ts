import createStore from '../createStore';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as redux from 'redux';

test('create a store with default state', () => {
  const axiosInstance = axios.create();
  const store = createStore(axiosInstance);
  const result: AppState = store.getState();

  expect(result).toEqual({});
});

test('create a store with initialized state', () => {
  const state: AppState = {};

  const axiosInstance = axios.create();
  const store = createStore(axiosInstance, state);
  const result: AppState = store.getState();

  expect(result).toEqual({});
});

describe('axios instance', () => {
  let originalThunkWithExtraArgument: any;
  let originalApplyMiddleware: any;

  beforeEach(() => {
    originalApplyMiddleware = redux.applyMiddleware;
    originalThunkWithExtraArgument = thunk.withExtraArgument;

    (<any>redux).applyMiddleware = jest.fn();
    thunk.withExtraArgument = jest.fn();
  });

  afterEach(() => {
    (<any>redux).applyMiddleware = originalApplyMiddleware;
    thunk.withExtraArgument = originalThunkWithExtraArgument;
  });

  test('should pass the axios instance to thunk', () => {
    const axiosInstance = axios.create();
    createStore(axiosInstance);
    expect(thunk.withExtraArgument).toBeCalledWith(axiosInstance);
  });
});

test('should use custom compose method', () => {
  const axiosInstance = axios.create();
  const mockCompose = jest.fn();
  createStore(axiosInstance, undefined, mockCompose);
  expect(mockCompose).toBeCalled();
});
