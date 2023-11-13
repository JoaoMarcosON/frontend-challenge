
import { ProductResponse, ProductsParams } from '../types/types';
import { useQuery } from 'react-query';

export default function RequestProducts ({ page, rows, sortBy, orderBy }: ProductsParams) {
    return useQuery<ProductResponse, Error>(
        ['products', { page, rows, sortBy, orderBy }],
        async () => {
          const apiUrl = `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`;
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Erro ao obter os produtos');
          }
          return response.json();
        }
      );
}


