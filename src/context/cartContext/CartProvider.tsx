import React, { ReactNode, useEffect, useState } from "react";
import CartContext from "./cartContext";
import { CartProduct } from "./types";

const CART_STORAGE_KEY = process.env.NEXT_PUBLIC_CART_STORAGE_KEY as string;

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  function saveCartToLocalStorage(cartData: CartProduct[]) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartData));
  };

  function clearCartFromLocalStorage(updatedCart: CartProduct[]) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
  };

  function addToCart(product: CartProduct) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        const updatedCart = prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        saveCartToLocalStorage(updatedCart);
        return updatedCart;
      } else {
        const updatedCart = [...prevCart, { ...product, quantity: product.quantity || 1 }];
        saveCartToLocalStorage(updatedCart);
        return updatedCart;
      };
    });
  };

  function removeCartItem(productId: string) {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === productId);

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity -= 1;

        if (updatedCart[existingProductIndex].quantity <= 0) {
          updatedCart.splice(existingProductIndex, 1);
        };
        clearCartFromLocalStorage(updatedCart);
        return updatedCart;
      };

      return prevCart;
    });
  };

  function removeCartById(productId: string) {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      clearCartFromLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCart((prevCart) => [...prevCart, ...parsedCart])
    };
  }, []);

  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeCartItem, removeCartById }}>
      {children}
    </CartContext.Provider>
  );
};
