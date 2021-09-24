export interface ParamsGetListManga {
  currentPage?: number;
  perPage?: number;
  textSearch?: string;
  status?: string;
  sortByName?: string;
  sortByCreateAt?: string;
  searchByCategory?: string;
  searchByMangaId?: string;
}

export const initParamsGetListManga = {
  currentPage: 1,
  perPage: 10,
  textSearch: '',
  status: '',
  sortByName: '',
  sortByCreateAt: '',
  searchByCategory: '',
  searchByMangaId: '',
};
