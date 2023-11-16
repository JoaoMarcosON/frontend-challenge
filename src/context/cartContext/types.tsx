import { Product as OriginalProduct } from "../../services/requests/types/types";

export interface CartContextProps {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeCartItem: (productId: string) => void;
  removeCartById: (productId: string) => void;
};

export interface CartProduct extends OriginalProduct {
  quantity: number;
};
