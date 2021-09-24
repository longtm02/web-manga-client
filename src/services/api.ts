import axios from 'axios';
const API_BASE_URL = 'https://hidden-brook-10172.herokuapp.com/api/v1';

export default class BaseServices {
  initAxios = () => {
    const axiosClient = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      },
    });

    axiosClient.interceptors.request.use(function (config) {
      config.headers.Authorization =
        'Bearer ' + localStorage.getItem('access_token');
      return config;
    });

    return axiosClient;
  };
}
