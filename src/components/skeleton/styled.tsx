import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
`;

export const Content = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23%, 1fr));
  gap: 30px;
  
  @media (max-width: 280px) {
  grid-template-columns: repeat(auto-fill, minmax(32%, 1fr));
  }
`;

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  max-width: 38rem;
  animation: ${loadingAnimation} 1.5s ease infinite;
  padding: 2%;

  @media (max-width: 280px) {
    min-width: 1rem;
  }
`;

export const SkeletonImg = styled.div`
  background: linear-gradient(90deg, #eee 25%, #ddd 37%, #eee 63%);
  background-size: 400% 100%;
  animation: ${loadingAnimation} 1.5s ease infinite;
  border-radius: 8px;
  width: 20rem;
  height: 20rem;
`;

export const SkeletonNameAndPrice = styled.div`
  background: linear-gradient(90deg, #740505 25%, #180303 37%, #580808 63%);
  background-size: 400% 100%;
  animation: ${loadingAnimation} 1.5s ease infinite;
  border-radius: 8px;
  height: 3rem;
  margin-top: 1rem;
`;

export const SkeletonBuyButton = styled.div`
  background: linear-gradient(90deg, #eee 25%, #ddd 37%, #eee 63%);
  background-size: 400% 100%;
  animation: ${loadingAnimation} 1.5s ease infinite;
  border-radius: 0.5rem;
  height: 3rem;
  width: 8rem;
  margin-top: 1rem;
`;

export const ContainerImg = styled.div`
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
`;
