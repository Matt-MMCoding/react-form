import { FormHTMLAttributes } from 'react';

export interface ISigninFormProps extends FormHTMLAttributes<HTMLFormElement> {}

export type SignInFormData = {
  email: string;
  password: string;
};
