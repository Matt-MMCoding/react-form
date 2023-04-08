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
    $gridTemplateRows,
    $order,
    $width,
    $height,
    $color,
    $backgroundColor,
    $borderRadius,
  }) => css`
    overflow: hidden;
    grid-template-rows: ${$gridTemplateRows};
    position: ${$position};
    display: ${$display};
    flex-direction: ${$flexDirection};
    flex: ${$flex};
    align-items: ${$alignItems};
    justify-content: ${$justifyContent};
    grid-template-columns: ${$gridTemplateColumns};
    order: ${$order};
    width: ${$width};
    height: ${$height};
    color: ${$color};
    background-color: ${$backgroundColor};
    border-radius: ${$borderRadius};
  `}
`;
