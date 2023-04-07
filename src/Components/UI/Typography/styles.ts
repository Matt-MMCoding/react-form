import styled, { css } from 'styled-components';
import { StyledTypographyProps } from './types';

export const StyledContainer = styled.p<StyledTypographyProps>`
  ${({ $color }) => css`
    color: ${$color};
  `}
`;
