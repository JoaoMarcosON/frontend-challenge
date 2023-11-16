"use client";
import React from "react";
import { OrderBy, ProductsParams, SortBy } from "../../services/requests/types/types";
import RequestProducts from "../../services/requests/requestBasisQuery/requestBasis";
import ProductList from "../cards/productList/productList";
import { CartProduct } from "../../context/cartContext/types";

export default function ProductsPage() {
  const productsParams: ProductsParams = {
    page: 1,
    rows: 8,
    sortBy: SortBy.ID,
    orderBy: OrderBy.ASC,
  };

  const { data: response, isLoading } = RequestProducts(productsParams);
  const products = response ? response.products : [];

  return (
    <>
      <ProductList products={products as CartProduct[]} isLoading={isLoading} />
    </>
  );
};
