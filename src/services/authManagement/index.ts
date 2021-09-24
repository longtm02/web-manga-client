import BaseServices from '../api';
import * as interfaces from './interface';

class AuthServices extends BaseServices {
  register = (params: interfaces.RegisterParams) =>
    this.initAxios().post('/users/register', {
      name: params.name,
      email: params.email,
      password: params.password,
      password_confirmation: params.confirmPassword,
    });
  login = (params: interfaces.LoginParams) =>
    this.initAxios().post('/users/login', {
      email: params.email,
      password: params.password,
    });
  forgotPassword = (email: string) =>
    this.initAxios().post('/users/forgot', {
      email,
    });
}

export default new AuthServices();
