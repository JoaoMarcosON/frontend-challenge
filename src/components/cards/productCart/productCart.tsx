import React from 'react';
import { Container, ContainerNameAndPrice, ContainerQuantityProducts, ContainerRemoveButton, ImgContainer, ImgProduct, IncreaseProducts, Name, NameContainer, Price, ProductContainer, ProductPrice, QuantityButton, QuantityNumber, QuantityProductsName, ReduceProducts, RemoveButton } from './styled'
import formatPrice from '../../../utils/formatPrice';
import { ProductCartProps } from './types';

export default function ProductCart({ product, addToCart, removeFromCart, removeFromCartById }: ProductCartProps) {
  const formatedPrice = formatPrice(product.quantity * product.price);
  return (
    <Container id={product.id}>
      <ProductContainer>
        <ContainerNameAndPrice>
          <ImgContainer>
            <ImgProduct src={product.photo} alt={product.name} />
          </ImgContainer>
          <NameContainer>
            <Name>{product.brand} {product.name}</Name>
          </NameContainer>
        </ContainerNameAndPrice>
        <ContainerQuantityProducts>
          <QuantityProductsName>
            Qtd:
          </QuantityProductsName>
          <QuantityButton>
            <ReduceProducts onClick={removeFromCart}>-</ReduceProducts>
            <QuantityNumber>{product.quantity}</QuantityNumber>
            <IncreaseProducts onClick={addToCart}>+</IncreaseProducts>
          </QuantityButton>
        </ContainerQuantityProducts>
        <ProductPrice>
          <Price>{formatedPrice}</Price>
        </ProductPrice>
        <ContainerRemoveButton>
          <RemoveButton onClick={removeFromCartById}>X</RemoveButton>
        </ContainerRemoveButton>
      </ProductContainer>
    </Container>
  );
};
