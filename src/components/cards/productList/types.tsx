import { CartProduct } from "../../../context/cartContext/types";

export interface ProductListProps {
    products: CartProduct[] | null;
    isLoading: boolean;
  };
  