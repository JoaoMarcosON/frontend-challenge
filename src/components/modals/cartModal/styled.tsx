import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background: transparent;

    @media (max-width: 700px) {
        width: 100%;
        height: 100%;
    }
`;

export const CartContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 55rem;
    background-color: #0f53bae6;
    text-align: left;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 700px) {
        width: 100%;
    }
`;

export const ContainerContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const ContainerHeaderCart = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px 20px 0px;
`;

export const ContainerText = styled.div`
    margin-left: 15px ;
    max-width: 19rem;
`;

export const ContainerBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    margin-right: 15px ;
    max-width: 19rem;
    background-color: #000000;
    border-radius: 20px;
    cursor: pointer;
    
    @media (max-width: 700px) {
        margin-left: 2rem ;
        width: 2rem;
        height: 2rem;
    }
`;

export const CloseBtn = styled.span`
    font-size: calc(0.5vw + 1.5rem);
    color: #fff;
    padding: 5px;
    @media (max-width: 700px) {
        font-size: calc(0.5vw + 1rem);
    }
`;

export const ContainerProduct = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Text = styled.h2`
    font-size: calc(0.7vw + 1.5rem);
    @media (max-width: 700px) {
        font-size: calc(0.5vw + 1rem);
    }
`;

export const CartItemList = styled.ul`
`;

export const PurchaseContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

export const ContainerItem = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    max-height: 70rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
    box-sizing: border-box;
    position: relative;
    padding-top: 6px;
`;

export const CardItem = styled.div`
    text-align: center;
    background-color: #fff;
    min-width: 19rem;
    min-height: 44px;
    border-radius: 10px;
    margin: 4px;
`;

export const ContainerPricePurchase = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 5rem;
`;

export const ContainerButtonPurchase = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
    background-color: #000;
    cursor: pointer;

    &:hover{
        background-color: #044e04;
    }
`;

export const Purchase = styled.button`
    color: #ffffff;
    border: none;
    outline: none;
    box-shadow: none;
    background-color: transparent;
    text-transform: capitalize;
    font-size: calc(0.5vw + 1rem);
    font-weight: 600;
    letter-spacing: 1px;
`;
