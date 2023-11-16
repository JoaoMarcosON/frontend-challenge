import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './productCard';
import '@testing-library/jest-dom/extend-expect';
import { CartProduct } from '../../../context/cartContext/types';

const mockProduct: CartProduct = {
  id: '1',
  name: 'Sample Product',
  brand: 'Sample Brand',
  description: 'Sample Description',
  photo: 'sample.jpg',
  price: 10,
  createdAt: '2023-01-01T00:00:00Z',
  updatedAt: '2023-01-01T00:00:00Z',
  quantity: 1,
};

test('renders product card correctly', () => {
  const mockAddToCart = jest.fn();

  render(
    <ProductCard
      product={mockProduct}
      isLoading={false}
      addToCart={mockAddToCart}
    />
  );

  expect(screen.getByText(`${mockProduct.brand} ${mockProduct.name}`)).toBeTruthy();
  expect(screen.getByText(mockProduct.description)).toBeTruthy();
  expect(screen.getByText('Comprar')).toBeTruthy();

  fireEvent.click(screen.getByText('Comprar'));
  expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
});

test('renders skeleton loader when loading', () => {
  render(<ProductCard product={null} isLoading={true} addToCart={() => {}} />);

  expect(screen.getByTestId('skeleton-img')).toBeTruthy();
  expect(screen.getByTestId('skeleton-name-and-price')).toBeTruthy();
  expect(screen.getByTestId('skeleton-buy-button')).toBeTruthy();
});
