export interface Product {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    createdAt: string;
    updatedAt: string;
}

export interface ProductResponse {
    products: Product[];
    count: number;
  }

export type ProductsParams = {
    page: number;
    rows: number;
    sortBy: SortBy;
    orderBy: OrderBy;
};

export enum SortBy {
    ID = 'id',
    NAME = 'name',
    PRICE = 'price',
}

export enum OrderBy {
    DESC = 'DESC',
    ASC = 'ASC',
}