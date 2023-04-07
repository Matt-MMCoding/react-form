import { forwardRef } from 'react';
import { IFormProps } from './types';
import { StyledForm } from './styles';

const Form = forwardRef<HTMLFormElement, IFormProps>(
  ({ onSubmit, children, ...formProps }, ref) => {
    return (
      <StyledForm
        onSubmit={onSubmit}
        ref={ref}
        {...formProps}
      >
        {children}
      </StyledForm>
    );
  }
);

export default Form;
Form.displayName = 'Form';
