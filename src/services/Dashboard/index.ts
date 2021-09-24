import BaseServices from '../api';

class DashboardServices extends BaseServices {
  getDataPageHome = () => this.initAxios().get('/masters/home');
}

export default new DashboardServices();
