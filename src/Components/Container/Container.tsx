import { forwardRef } from 'react';
import { IContainerProps } from './types';
import { StyledContainer } from './styles';

const Container = forwardRef<HTMLDivElement, IContainerProps>(
  (
    {
      display = 'flex',
      flexDirection = 'row',
      alignItems,
      justifyContent,
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
        $alignItems={alignItems}
        $justifyContent={justifyContent}
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
