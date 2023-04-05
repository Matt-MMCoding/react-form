import styled, { css } from 'styled-components';
import { IStyledContainerProps } from './types';

export const StyledContainer = styled.div<IStyledContainerProps>`
  ${({
    $display,
    $flexDirection,
    $alignItems,
    $justifyContent,
    $width,
    $height,
    $backgroundColor,
  }) => css`
    display: ${$display};
    flex-direction: ${$flexDirection};
    align-items: ${$alignItems};
    justify-content: ${$justifyContent};
    width: ${$width};
    height: ${$height};
    background-color: ${$backgroundColor};
  `}
`;
