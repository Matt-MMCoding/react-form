import { forwardRef } from 'react';
import { IInputProps } from './types';
import { StyledContainer, StyledInput } from './styles';

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ validationState = 'default', disabled = false, ...inputProps }, ref) => {
    return (
      <StyledContainer
        $disabled={disabled}
        $validationState={validationState}
        width="70%"
      >
        <StyledInput
          ref={ref}
          disabled={disabled}
          {...inputProps}
        ></StyledInput>
      </StyledContainer>
    );
  }
);

export default Input;

Input.displayName = 'Input';
