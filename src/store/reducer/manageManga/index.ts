import * as Types from './../../action/manageManga/types';

const initialState = {
  listManga: undefined,
};

export default function manageManga(state: any = initialState, action: any) {
  switch (action.type) {
    case Types.GET_LIST_MANGA_SUCCESS:
      return {
        ...state,
        listManga: action.data,
      };

    default:
      return state;
  }
}
