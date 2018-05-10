import * as actions from '../index';
import { AxiosInstance } from 'axios';
import { Dispatch } from 'redux';

const mockStrings: String[] = ['a', 'b', 'c'];
const error = new Error('There was an error :(');
let dispatch: any;
let getState: any;
let api: any;

describe('fetchStrings', () => {
  beforeEach(() => {
    dispatch = jest.fn() as Dispatch<any>;
    getState = jest.fn() as () => any;
    api = {} as AxiosInstance;
  });

  test('should dispatch an action when data is returned', () => {
    api.get = jest.fn(() => Promise.resolve(mockStrings));

    return actions
      .fetchStrings()(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toBeCalledWith({
          type: actions.FETCH_STRINGS,
          meta: {},
          payload: mockStrings,
        });
      });
  });

  test('should dispatch an error when api cannot get data', () => {
    api.get = jest.fn(() => Promise.reject(error));

    return actions
      .fetchStrings()(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toBeCalledWith({
          type: actions.FETCH_STRINGS,
          payload: error,
          error: true,
        });
      });
  });

  test('should call /resume endpoint', () => {
    api.get = jest.fn(() => Promise.resolve());

    return actions
      .fetchStrings()(dispatch, getState, api)
      .then(() => {
        expect(api.get).toBeCalledWith('/strings');
      });
  });
});
