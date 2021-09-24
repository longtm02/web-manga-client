import BaseServices from '../api';
import * as interfaces from './interface';

class MangaServices extends BaseServices {
  getListManga = (params: interfaces.ParamsGetListManga) =>
    this.initAxios().get(
      `/mangas?page=${params.currentPage}&limit=${params.perPage}&q=${params.textSearch}&filter[manga_status]=${params.status}&sort[manga_name]=${params.sortByName}&sort[manga_created_at]=${params.sortByCreateAt}&search[category_manga_name]=${params.searchByCategory}&search[category_manga_id]=${params.searchByMangaId}`
    );
  getMangaDetail = (id: string) => this.initAxios().get(`/mangas/${id}`);
  addMangaFavorite = (id: string) =>
    this.initAxios().patch(`/mangas/${id}/favorite`);
}

export default new MangaServices();
