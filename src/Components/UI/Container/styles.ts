import styled, { css } from 'styled-components';
import { IStyledContainerProps } from './types';

export const StyledContainer = styled.div<IStyledContainerProps>`
  ${({
    $position,
    $display,
    $flexDirection,
    $flex,
    $alignItems,
    $justifyContent,
    $gridTemplateColumns,
    $width,
    $height,
    $color,
    $backgroundColor,
  }) => css`
    position: ${$position};
    display: ${$display};
    flex-direction: ${$flexDirection};
    flex: ${$flex};
    align-items: ${$alignItems};
    justify-content: ${$justifyContent};
    grid-template-columns: ${$gridTemplateColumns};
    width: ${$width};
    height: ${$height};
    color: ${$color};
    background-color: ${$backgroundColor};
  `}
`;
