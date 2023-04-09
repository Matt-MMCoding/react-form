import { FormHTMLAttributes } from 'react';

export interface ISignupFormProps extends FormHTMLAttributes<HTMLFormElement> {}
{
}

export type SignUpFormData = {
  email: string;
  password: string;
};
