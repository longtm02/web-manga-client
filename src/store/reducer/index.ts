import { combineReducers } from 'redux';
import loadingReducer from './loading/index';
import manageManga from './manageManga/index';

const rootReducer = combineReducers({
  loadingContainer: loadingReducer,
  manageManga,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
