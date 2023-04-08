import { StyledTransientProps } from '@/types';
import { ElementType, PropsWithChildren } from 'react';
import { CSSProperties } from 'styled-components';

type ContainerCssProps = Pick<
  CSSProperties,
  | 'position'
  | 'display'
  | 'flexDirection'
  | 'flex'
  | 'alignItems'
  | 'justifyContent'
  | 'gridTemplateColumns'
  | 'gridTemplateRows'
  | 'order'
  | 'width'
  | 'height'
  | 'color'
  | 'backgroundColor'
  | 'borderRadius'
>;

interface IContainerStyleProps extends ContainerCssProps {}

interface IBaseContainerProps extends IContainerStyleProps {}

export interface IContainerProps
  extends PropsWithChildren<IBaseContainerProps> {
  as?: ElementType;
}

export interface IStyledContainerProps
  extends StyledTransientProps<IContainerStyleProps> {}
