import { StyledTransientProps } from '@/types';
import { ElementType, PropsWithChildren } from 'react';
import { CSSProperties } from 'styled-components';

type ContainerCssProps = Pick<
  CSSProperties,
  | 'display'
  | 'flexDirection'
  | 'alignItems'
  | 'justifyContent'
  | 'width'
  | 'height'
  | 'backgroundColor'
>;

interface IContainerStyleProps extends ContainerCssProps {}

interface IBaseContainerProps extends IContainerStyleProps {}

export interface IContainerProps
  extends PropsWithChildren<IBaseContainerProps> {
  as?: ElementType;
}

export interface IStyledContainerProps
  extends StyledTransientProps<IContainerStyleProps> {}
