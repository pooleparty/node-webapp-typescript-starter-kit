import { ThunkActionCreator } from '../../types.d';
import { dispatcher } from '../../utils/actions';

/* Exmaple Action: */
export const fetchBooks: ThunkActionCreator<any> = () => async (
  dispatch,
  getState,
  api,
) => dispatcher<String[]>(dispatch, 'FETCH_STRINGS')(api.get(`/strings`));
