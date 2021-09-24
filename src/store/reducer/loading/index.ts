import * as actions from './../../action/loading/types';
const initialState = false;

export default function loadingReducer(
  state: boolean = initialState,
  action: any
) {
  switch (action.type) {
    case actions.SHOW_LOADING:
      return true;

    case actions.HIDDEN_LOADING:
      return false;

    default:
      return state;
  }
}
