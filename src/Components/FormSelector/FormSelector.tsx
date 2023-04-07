import { FC } from 'react';
import { IFormSelectorProps } from './types';
import { Typography } from '../UI/Typography';
import { Button } from '@/Components/UI/Button';
import { StyledContainer } from './styles';

const FormSelector: FC<IFormSelectorProps> = ({
  heading,
  subheading,
  cta,
  handleButtonClick,
}) => {
  return (
    <StyledContainer>
      <Typography as="h3">{heading}</Typography>
      <Typography>{subheading}</Typography>
      <Button
        width="50%"
        onClick={handleButtonClick}
      >
        {cta}
      </Button>
    </StyledContainer>
  );
};

export default FormSelector;
FormSelector.displayName = 'FormSelector';
