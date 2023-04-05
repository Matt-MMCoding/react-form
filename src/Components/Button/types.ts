import { StyledTransientProps } from '@/types';
import { ButtonHTMLAttributes, ElementType, PropsWithChildren } from 'react';
import { CSSProperties } from 'styled-components';

type ButtonCssProps = Pick<
  CSSProperties,
  'width' | 'padding' | 'backgroundColor'
>;

interface IBaseButtonProps extends ButtonCssProps {}

export interface IStyledButtonProps
  extends StyledTransientProps<ButtonCssProps> {}

export interface IButtonProps extends PropsWithChildren<IBaseButtonProps> {
  as?: ElementType;
  disabled?: boolean;
}
