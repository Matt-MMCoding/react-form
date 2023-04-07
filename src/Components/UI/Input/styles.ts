import styled from 'styled-components';
import { IStyledInputProps } from './types';
import { Container } from '@/Components/UI/Container';

export const StyledContainer = styled(Container)<IStyledInputProps>``;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  background: #ccc;
  padding: 6px;
  border-radius: 4px;
  color: black;

  &:focus {
    outline: none;
  }
`;
