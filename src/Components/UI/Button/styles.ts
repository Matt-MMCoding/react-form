import styled, { css } from 'styled-components';
import { IStyledButtonProps } from './types';

export const StyledButton = styled.button<IStyledButtonProps>`
  ${({ $width, $padding, $backgroundColor }) => css`
    width: ${$width};
    padding: ${$padding};
    background-color: ${$backgroundColor};
    cursor: pointer;
  `}
`;
