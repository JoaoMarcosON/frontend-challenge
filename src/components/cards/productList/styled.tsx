import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23%, 1fr));
  gap: 20px;
  
  @media (max-width: 280px) {
  grid-template-columns: repeat(auto-fill, minmax(32%, 1fr));
  }
`;
