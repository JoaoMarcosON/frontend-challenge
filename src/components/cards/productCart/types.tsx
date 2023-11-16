import { CartProduct } from "../../../context/cartContext/types";

export interface ProductCartProps {
    product: CartProduct;
    addToCart: () => void;
    removeFromCart: () => void;
    removeFromCartById: () => void;
  };
