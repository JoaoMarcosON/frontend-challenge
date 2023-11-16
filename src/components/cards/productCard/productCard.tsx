import React from 'react';
import { Container, ContainerImg, ContainerPrice, ContainerName, ContainerNameAndPrice, ImgProduct, Price, Name, ContainerDescription, ContainerBuyButton, ImgBuy, Buy, ContainerContent, Description, ContentImg } from './styled'
import formatPrice from '../../../utils/formatPrice';
import Skeleton from '../../skeleton/skeleton';
import { ProductListProps } from './types';

export default function ProductCard({ product, isLoading, addToCart }: ProductListProps) {
  if (isLoading || !product) {
    return (
      <Skeleton />
    );
  };

  const formatedPrice = formatPrice(product.price)
  return (
    <Container id={product.id}>
      <ContainerContent>
        <ContainerImg>
          <ContentImg>
            <ImgProduct src={product.photo} alt={product.name} />
          </ContentImg>
        </ContainerImg>
        <ContainerNameAndPrice>
          <ContainerName>
            <Name>{product.brand} {product.name}</Name>
          </ContainerName>
          <ContainerPrice>
            <Price>{formatedPrice}</Price>
          </ContainerPrice>
        </ContainerNameAndPrice>
        <ContainerDescription>
          <Description>{product.description}</Description>
        </ContainerDescription>
      </ContainerContent>
      <ContainerBuyButton onClick={() => addToCart(product)}>
        <ImgBuy src='/common/icons/shoppingBag.svg' alt='shopping bag' />
        <Buy>Comprar</Buy>
      </ContainerBuyButton>
    </Container>
  );
};
