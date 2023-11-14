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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  max-width: 38rem;

  @media (max-width: 280px) {
    min-width: 1rem;
  }
`;

export const ContainerContent = styled.div`
    margin: 0.89rem;
    width: 100%;
`;


export const ContainerImg = styled.div`
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
`;

export const ImgProduct = styled.img`
  border-radius: 8px;
  margin: 8px;
  max-width: calc(0.7vw + 20rem);
  min-width: calc(0.7vw + 20rem);
  max-height: calc(0.7vw + 20rem);
  min-height: calc(0.7vw + 20rem);

  @media (max-width: 768px) {
    min-width: 10rem;
    min-height: 10rem;
  }

  @media (max-width: 480px) {
    min-width: 5rem;
    min-height: 5rem;
  }
`;

export const ContainerNameAndPrice= styled.div`
    width: 100%;
    display: flex;
    border-radius: 8px;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem 0 1rem;
    margin-bottom: 1rem;
  
    @media (max-width: 865px) {
    display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 13rem;
    }
`;

export const ContainerName= styled.div`
    display: flex;
    border-radius: 8px;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 865px) {
      max-height: auto;
    }
`;

export const Name = styled.p`
    color: #2C2C2C;
    font-size: calc(0.7vw + 1rem);
    font-style: normal;
    font-weight: 400;
    line-height: 2.5rem;

    @media (max-width: 865px) {
        text-align: center;
    }
`;

export const ContainerPrice = styled.div`
    display: flex;
    align-items: center;
    padding: calc(0.1vw + 0.15rem);
    border-radius: 0.67rem;
    background: #373737;
`;

export const Price = styled.p`
    padding: 0.5rem;
    color: #FFF;
    font-size: calc(0.7vw + 0.5rem);
    font-style: normal;
    font-weight: 1000;

    @media (max-width: 865px) {
      font-size: calc(0.7vw + 0.8rem);
    }
`;

export const ContainerDescription= styled.div`
    width: 100%;
    display: flex;
    border-radius: 8px;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    min-height: 7rem;
    
    @media (max-width: 280px) {
      width: auto;
    }
`;

export const Description = styled.p`
    font-size: calc(0.7vw + 0.3rem);

    @media (max-width: 865px) {
      font-size: calc(0.7vw + 0.7rem);
    }
`;

export const ContainerBuyButton = styled.div`
    width: 100%;
    padding: 0.8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 0rem 0rem 0.5rem 0.5rem;
    background: #0F52BA;
    border-radius: 0px 0px 8px 8px;
    justify-content: center;

    &:hover {
        background: #0f76ba;
        cursor: pointer;
    }
`;

export const ImgBuy = styled.img`
  max-width: 2rem;
  max-height: 2rem;  

  @media (max-width: 280px) {
    height: 1rem;
  }
`;

export const Buy = styled.p`
    margin-left: 2rem;
    flex-shrink: 0;
    color: #ffffff;
    font-size: calc(0.7vw + 0.5rem);
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    
    @media (max-width: 280px) {
      margin-left: auto;
    }
`;

export const SkeletonContainer = styled.div`
  background: linear-gradient(90deg, #eee 25%, #ddd 37%, #eee 63%);
  background-size: 400% 100%;
  animation: ${loadingAnimation} 1.5s ease infinite;
  border-radius: 8px;
  height: 20rem;
  margin: 0.5rem;
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
  background: linear-gradient(90deg, #eee 25%, #ddd 37%, #eee 63%);
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