import React from 'react';
import ProductCard from '../productCard/productCard';
import { Container } from './styled';

export default function ProductList({ products, isLoading }) {

  if (isLoading || !products) {
    return (
      <div id={''}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Container>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} isLoading={isLoading} />
        ))}
    </Container>
  );
}
