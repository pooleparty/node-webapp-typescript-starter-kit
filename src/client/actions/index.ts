import { ThunkActionCreator } from '../../types.d';
import { dispatcher } from '../../utils/actions';

export const FETCH_STRINGS = 'FETCH_STRINGS';

/* Exmaple Action: */
export const fetchStrings: ThunkActionCreator<any> = () => async (
  dispatch,
  getState,
  api,
) => dispatcher<String[]>(dispatch, FETCH_STRINGS)(api.get(`/strings`));
