import { all, fork } from 'redux-saga/effects';
import manageManga from './manageManga';

export default function* rootSaga() {
  yield all([fork(manageManga)]);
}
