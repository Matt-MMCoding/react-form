import styled from 'styled-components';
import { Container } from '@/Components/UI/Container';

export const StyledContainer = styled(Container)`
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  z-index: 3;
  background: #fff;
  color: #000;
  border-radius: 8px 0 0 8px;
`;
