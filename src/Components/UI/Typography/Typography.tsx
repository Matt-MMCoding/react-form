import { forwardRef } from 'react';
import { ITypographyProps } from './types';
import { StyledContainer } from './styles';

const Typography = forwardRef<HTMLElement, ITypographyProps>(
  ({ color = 'inherit', children, ...rest }, ref) => {
    return (
      <StyledContainer
        $color={color}
        ref={ref}
        {...rest}
      >
        {children}
      </StyledContainer>
    );
  }
);

export default Typography;

Typography.displayName = 'Typography';
