import { forwardRef } from 'react';
import { StyledButton } from './styles';
import { IButtonProps } from './types';
import { Typography } from '../Typography';

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      width,
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
    );
  }
);

export default Button;
Button.displayName = 'Button';
