import { forwardRef } from 'react';
import { IContainerProps } from './types';
import { StyledContainer } from './styles';

const Container = forwardRef<HTMLDivElement, IContainerProps>(
  (
    {
      display = 'flex',
      flexDirection = 'row',
      width,
      height,
      backgroundColor = 'inherit',
      as,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledContainer
        $display={display}
        $flexDirection={flexDirection}
        $width={width}
        $height={height}
        $backgroundColor={backgroundColor}
        ref={ref}
        as={as}
        {...rest}
      >
        {children}
      </StyledContainer>
    );
  }
);

export default Container;

Container.displayName = 'Container';
