import { FC } from 'react';
import { IFormSelectorProps } from './types';
import { Typography } from '../UI/Typography';
import { Button } from '@/Components/UI/Button';
import { StyledContainer } from './styles';

const FormSelector: FC<IFormSelectorProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default FormSelector;
FormSelector.displayName = 'FormSelector';
