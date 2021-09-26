import * as yup from 'yup';

export const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required')
    .max(191, 'Email không quá 191 kí tự'),
  password: yup
    .string()
    .required('password is required')
    .max(191, 'password không quá 191 kí tự'),
});

export interface LoginProps {
  submit: () => void;
}

export const INIT_VALUE = {
  email: '',
  password: '',
};
