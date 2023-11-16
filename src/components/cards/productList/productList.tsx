import React from 'react';
import ProductCard from '../productCard/productCard';
import { Container, Content } from './styled';
import { useCart } from '../../../context/cartContext/useCart';
import Skeleton from '../../skeleton/skeleton';
import { ProductListProps } from './types';

export default function ProductList({ products, isLoading }: ProductListProps) {
  const { addToCart } = useCart();

  if (isLoading || !products) {
    return (<Skeleton />)
  };

  return (
    <Container>
      <Content>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} isLoading={isLoading} addToCart={() => { addToCart(product) }} />
        ))}
      </Content>
    </Container>
  );
};
