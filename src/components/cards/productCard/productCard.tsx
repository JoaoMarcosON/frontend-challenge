import React from 'react';
import { Container, ContainerImg, ContainerPrice, ContainerName, ContainerNameAndPrice, ImgProduct, Price, Name, ContainerDescription, ContainerBuyButton, ImgBuy, Buy, ContainerContent, Description, SkeletonContainer, SkeletonBuyButton, SkeletonNameAndPrice, SkeletonImg } from './styled'
import formatPrice from '../../../utils/formatPrice';
export default function ProductCard({ product, isLoading }) {
  if (isLoading || !product) {
    return (
      <SkeletonContainer>
        <ContainerImg>
          <SkeletonImg />
        </ContainerImg>
        <SkeletonNameAndPrice />
        <SkeletonBuyButton />
      </SkeletonContainer>
    );
  }

  const formatedPrice = formatPrice(product.price)
  return (
    <Container id={product.id}>
      <ContainerContent>
        <ContainerImg>
          <ImgProduct src={product.photo} alt={product.name} />
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
          <Description>Description: {product.description}</Description>
        </ContainerDescription>
      </ContainerContent>
      <ContainerBuyButton>
        <ImgBuy src='/common/icons/shoppingBag.svg' alt='shopping bag' />
        <Buy>Comprar</Buy>
      </ContainerBuyButton>
    </Container>
  );
}
