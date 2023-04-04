import { InputHTMLAttributes } from 'react';

export type InputValidationState = 'error' | 'success' | 'default';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  validationState?: InputValidationState;
}

export interface IStyledInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  $validationState: InputValidationState;
  $disabled: boolean;
}
