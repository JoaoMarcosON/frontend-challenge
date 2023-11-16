import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #0F52BA;;
  color: #fff;
  padding: 2rem 6rem;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  margin-right: 5%;
`;

export const SubTitle = styled.h2`
 font-size: 1.5rem;
 font-weight: 300;
 padding-bottom: 4.3%;
`;

export const ContainerCart = styled.div`
`;

export const ButtonCart = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0.6rem;
  border: none;
  outline: none;
  box-shadow: none;
  background-color: #FFF;
  padding: 20% 50% 20% 50%;

&:hover {
    background-color: #87ca50;
    cursor: pointer;
}
`;

export const ImgCart = styled.img`
  color: #000000;
  width: 15px;
`;

export const AmountCart = styled.p`
  padding-left: 1rem;
  font-size: 1.2rem;
  font-weight: 800;
`;
