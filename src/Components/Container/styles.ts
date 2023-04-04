import styled, { css } from 'styled-components';
import { IStyledContainerProps } from './types';

export const StyledContainer = styled.div<IStyledContainerProps>`
  ${({ $display, $flexDirection, $width, $height, $backgroundColor }) => css`
    display: ${$display};
    flex-direction: ${$flexDirection};
    width: ${$width};
    height: ${$height};
    background-color: ${$backgroundColor};
  `}
`;
