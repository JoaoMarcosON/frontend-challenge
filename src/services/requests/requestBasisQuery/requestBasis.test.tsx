import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { OrderBy, ProductsParams, SortBy } from '../types/types';
import RequestProducts from './requestBasis';

(global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue({
  ok: true,
  json: () => Promise.resolve({ products: [], count: 0 }),
} as Response);

describe('RequestProducts', () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient();
  });

  it('should fetch products successfully', async () => {
    const productsParams: ProductsParams = {
      page: 1,
      rows: 8,
      sortBy: SortBy.ID,
      orderBy: OrderBy.ASC,
    };

    const { result, waitFor } = renderHook(() => RequestProducts(productsParams), {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      ),
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual({ products: [], count: 0 });
    expect(result.current.error).toBeNull();
    expect(result.current.isLoading).toBeFalsy();
  });

  it('should handle API error', async () => {
    const productsParams: ProductsParams = {
      page: 1,
      rows: 8,
      sortBy: SortBy.ID,
      orderBy: OrderBy.ASC,
    };

    (global.fetch as jest.MockedFunction<typeof fetch>).mockImplementationOnce(async () => Promise.resolve({
      ok: false,
      json: () => Promise.resolve({}),
      text: () => Promise.resolve('Erro ao obter os produtos'),
    }) as unknown as Response
    );

    const { result, waitFor } = renderHook(() => RequestProducts(productsParams), {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      ),
    });

    await waitFor(() => result.current.isError);

    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toEqual(new Error('Erro ao obter os produtos'));
    expect(result.current.isLoading).toBeFalsy();
  });
});
