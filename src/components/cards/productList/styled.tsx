import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  gap: 30px;
  padding: 1%;
  @media (max-width: 780px) {
    grid-template-columns: 2fr;
    gap: 10px;
  }
`;
