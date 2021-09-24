import * as Types from './types';
import * as InterfaceManageManga from './../../../services/MangaServices/interface';

export const getListManga = (
  params?: InterfaceManageManga.ParamsGetListManga
) => ({
  type: Types.GET_LIST_MANGA,
  params,
});
