import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  width: 100%;
`;

export const ContainerContent = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
`;

export const ContainerImg = styled.div`
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
`;

export const ContentImg = styled.div`
  max-width: 10rem;
  max-height: 10rem;
  border-radius: 8px;
  margin: 8px;
`;

export const ImgProduct = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContainerNameAndPrice = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerName = styled.div`
  display: flex;
  border-radius: 8px;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 865px) {
    max-height: auto;
  }
`;

export const Name = styled.p`
  height: 100%;
  color: #2C2C2C;
  font-size: calc(0.7vw + 1rem);
  font-style: normal;
  font-weight: 400;
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
`;

export const ContainerDescription = styled.div`
  width: 100%;
  display: flex;
  border-radius: 8px;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  min-height: 7rem;
`;

export const Description = styled.p`
  font-size: calc(0.7vw + 0.6rem);

  @media (max-width: 600px) {
    font-size: calc(1vw + 0.8rem);
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
`;