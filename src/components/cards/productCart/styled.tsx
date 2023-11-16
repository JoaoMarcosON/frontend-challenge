import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #141313;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #FFF;
  border-radius: 10px;
  width: 90%;
  padding: 1%;
  margin-bottom: 7px;
  margin-top: 7px;
`;

export const ContainerNameAndPrice = styled.div`
  display: flex;
`

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 7rem;
  min-height: 100%;
`;

export const ImgProduct = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 400px) {
    text-align: center;
    max-width: 3rem;
    min-width: 3rem;
    max-height: 3rem;
    min-height: 3rem;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 12rem;
  min-width: 12rem;

  @media (max-width: 400px) {
    text-align: center;
    max-width: 5rem;
    min-width: 5rem;
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
    font-size: calc(0.7vw + 0.8rem);
  }
`;

export const ContainerQuantityProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100;
  justify-content: center;
  padding: 3px;
`;

export const QuantityProductsName = styled.p`
  position: absolute;
  width: 100;
  font-size: calc(0.7vw + 0.3rem);
  margin-bottom: 40px;
`;

export const QuantityButton = styled.div`
  display: flex;
  border-radius: 4px;
  border: 1px #BFBFBF solid;
  height: auto;
  width: 100%;
  padding: 2px;
  align-items: center;
`;
  
export const ReduceProducts = styled.div`
  padding: 1px 5px 1px 5px;
  border-right: 0.1px #BFBFBF solid;
  margin-right: 4px;
  cursor: pointer;
`;

export const IncreaseProducts = styled.div`
  padding: 1px 5px 1px 5px;
  border-left: 0.1px #BFBFBF solid;
  margin-left: 4px;
  cursor: pointer;
`;

export const QuantityNumber = styled.p`
  font-size  : 0.9rem;
`;

export const ProductPrice = styled.div`
display: flex;
align-items: center;
`;

export const Price = styled.p`
  padding: 0.5rem;
  color: #000000;
  font-size: calc(0.7vw + 0.5rem);
  font-style: normal;
  font-weight: 1000;
  
@media (max-width: 865px) {
  font-size: calc(0.7vw + 0.8rem);
}
`;

export const ContainerRemoveButton = styled.div`
`;

export const RemoveButton = styled.button`
  position: absolute;
  max-width: 20px;
  min-width: 20px;
  min-height: 20px;
  max-height: 20px;
  background-color: #000;
  color: #FFF;
  border-radius: 50%;
  margin-top: -1rem;
  margin-left: -1rem;
  cursor: pointer;
`;
