import { ProductResponse, ProductsParams } from '../types/types';
import { useQuery } from 'react-query';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

export default function RequestProducts ({ page, rows, sortBy, orderBy }: ProductsParams) {
  const apiUrl = `${baseUrl}/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`;

    return useQuery<ProductResponse, Error>(
        ['products', { page, rows, sortBy, orderBy }],
        async () => {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Erro ao obter os produtos');
          }
          return response.json();
        }
      );
};
