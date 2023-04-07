import { forwardRef } from 'react';
import { IContainerProps } from './types';
import { StyledContainer } from './styles';

const Container = forwardRef<HTMLDivElement, IContainerProps>(
  (
    {
      position = 'relative',
      display = 'flex',
      flexDirection = 'row',
      flex,
      alignItems,
      justifyContent,
      width,
      height,
      color,
      backgroundColor = 'inherit',
      as,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledContainer
        $position={position}
        $display={display}
        $flexDirection={flexDirection}
        $flex={flex}
        $alignItems={alignItems}
        $justifyContent={justifyContent}
        $width={width}
        $height={height}
        $color={color}
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
