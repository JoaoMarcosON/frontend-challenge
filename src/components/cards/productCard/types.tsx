import { CartProduct } from "../../../context/cartContext/types";

export interface ProductListProps {
    product?: CartProduct | null;
    isLoading: boolean;
    addToCart: (cartProduct: CartProduct) => void;
};
  