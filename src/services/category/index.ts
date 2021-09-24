import BaseServices from '../api';
import * as interfaces from './interface';

class CategoryServices extends BaseServices {
  getListCategory = (params: interfaces.GetListCategoryParams) =>
    this.initAxios().get(
      `/mangas/categories?page=${params.currentPage}&limit=${params.perPage}&q=${params.textSearch}`
    );
}

export default new CategoryServices();
