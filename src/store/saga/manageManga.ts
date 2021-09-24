import { takeLatest } from '@redux-saga/core/effects';
import { call, put } from 'redux-saga/effects';
import * as Types from './../action/manageManga/types';
import * as InterfaceManga from '../../services/MangaServices/interface';
import MangaServices from './../../services/MangaServices';
import { hideLoading } from '../action/loading';

interface ResponseTypeAPI {
  code: number;
  data: any;
}

function* fetchListManga(action: {
  params: InterfaceManga.ParamsGetListManga;
  type: string;
}) {
  const { params } = action;
  try {
    const response: ResponseTypeAPI = yield call(() =>
      MangaServices.getListManga(params)
    );
    yield put({ type: Types.GET_LIST_MANGA_SUCCESS, data: response.data.data });
    yield put(hideLoading());
  } catch (error) {
    return;
  }
}

export default function* manageManga() {
  yield takeLatest(Types.GET_LIST_MANGA, fetchListManga);
}
