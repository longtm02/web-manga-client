export interface RegisterParams {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginParams {
  email: string;
  password: string;
}
