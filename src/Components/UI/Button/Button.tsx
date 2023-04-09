import { forwardRef } from 'react';
import { StyledButton } from './styles';
import { IButtonProps } from './types';
import { Typography } from '../Typography';
import { Container } from '../Container';

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      width = '100%',
      padding = '8px 0',
      backgroundColor = '#22a6b3',
      as = 'button',
      disabled = false,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <Container
        width="100%"
        justifyContent="center"
      >
        <StyledButton
          $width={width}
          $padding={padding}
          $backgroundColor={backgroundColor}
          as={as}
          ref={ref}
          disabled={disabled}
          {...rest}
        >
          <Typography>{children}</Typography>
        </StyledButton>
      </Container>
    );
  }
);

export default Button;
Button.displayName = 'Button';
