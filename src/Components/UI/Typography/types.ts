import { ElementType, PropsWithChildren } from 'react';

interface IBaseTypographyProps {
  color?: string;
  as?: ElementType;
}

export interface ITypographyProps
  extends PropsWithChildren<IBaseTypographyProps> {}

export interface StyledTypographyProps {
  $color: string;
}
