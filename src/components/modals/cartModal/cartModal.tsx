import React from "react";
import { CartContent, CartItemList, CloseBtn, Container, ContainerBtn, ContainerButtonPurchase, ContainerContent, ContainerHeaderCart, ContainerItem, ContainerPricePurchase, ContainerProduct, ContainerText, Purchase, PurchaseContainer, Text } from "./styled";
import { CartModalProps } from "./types";
import ProductCart from "../../cards/productCart/productCart";
import { useCart } from "../../../context/cartContext/useCart";
import formatPrice from "../../../utils/formatPrice";
import { CartProduct } from "../../../context/cartContext/types";

export default function CartModal({ onClose }: CartModalProps) {
    const { cart, addToCart, removeCartItem, removeCartById } = useCart();

    function closeCart() {
        onClose()
    };
    
    const totalAmount = cart.map(item => (item.price || 0) * item.quantity).reduce((total, price) => total + price, 0);
    const formatedPrice = formatPrice(totalAmount);

    const groupedProducts = cart.reduce((grouped, product) => {
        const index = grouped.findIndex((item) => item.product.id === product.id);
        if (index !== -1) {
            grouped[index].quantity += 1;
        } else {
            grouped.push({ product, quantity: 1 });
        };

        return grouped;
    }, [] as {
        quantity: number; product: CartProduct
}[]);
    
    return (
        <Container id="carrinho-modal">
            <CartContent>
                <ContainerContent>
                    <ContainerHeaderCart>
                        <ContainerText>
                            <Text>Carrinho</Text>
                            <Text>de Compras</Text>
                        </ContainerText>
                        <ContainerBtn>
                            <CloseBtn onClick={() => closeCart()}>X</CloseBtn>
                        </ContainerBtn>
                    </ContainerHeaderCart>

                    <ContainerProduct>
                        <CartItemList id="lista-itens-carrinho"></CartItemList>
                    </ContainerProduct>
                </ContainerContent>
                <ContainerItem>
                    {groupedProducts.map((item) => (
                        <ProductCart
                            key={item.product.id}
                            product={item.product}
                            addToCart={() => addToCart(item.product)}
                            removeFromCart={() => removeCartItem(item.product.id)}
                            removeFromCartById={() => removeCartById(item.product.id)}
                        />
                    ))};
                </ContainerItem>
                <PurchaseContainer>
                    <ContainerPricePurchase>
                        <Purchase>Total:</Purchase>
                        <Purchase>{formatedPrice}</Purchase>
                    </ContainerPricePurchase>
                    <ContainerButtonPurchase>
                        <Purchase>finalizar compra</Purchase>
                    </ContainerButtonPurchase>
                </PurchaseContainer>
            </CartContent>
        </Container >
    );
};
