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
      gridTemplateColumns = '1fr',
      gridTemplateRows = '1fr',
      order = 1,
      width,
      height,
      color,
      backgroundColor = 'inherit',
      borderRadius,
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
        $gridTemplateColumns={gridTemplateColumns}
        $gridTemplateRows={gridTemplateRows}
        $order={order}
        $width={width}
        $height={height}
        $color={color}
        $backgroundColor={backgroundColor}
        $borderRadius={borderRadius}
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
