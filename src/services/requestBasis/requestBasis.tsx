
import { Product, ProductsParams } from './types';
import axios, { AxiosResponse } from 'axios';

export default class Request {
    
    async products({ page, rows, sortBy, orderBy }: ProductsParams): Promise<Product[]> {
        try {
            const apiUrl = `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`;
            const response: AxiosResponse<{ products: Product[] }> = await axios.get(apiUrl);
            return response.data.products;
        } catch (error) {
            console.error('Erro ao obter produtos:', error);
            return [];
        }
    }
}


