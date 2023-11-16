import React, { useState } from 'react';
import { AmountCart, ButtonCart, Container, ContainerCart, ContainerTitle, ImgCart, SubTitle, Title } from './styled';
import CartModal from '../../modals/cartModal/cartModal';
import { useCart } from '../../../context/cartContext/useCart';

export default function Header() {
    const [isCartModalOpen, setCartModalOpen] = useState(false)
    const { cart } = useCart();
    function closeCartModal () {
        setCartModalOpen(false);
    };

    return (
        <Container>
            <ContainerTitle>
                <Title>MKS</Title>
                <SubTitle>Sistemas</SubTitle>
            </ContainerTitle>
            <ContainerCart>
                <ButtonCart id="carrinho-btn"  onClick={() => {setCartModalOpen(!isCartModalOpen)}}>
                    <ImgCart src='/common/icons/buttonCart.svg' alt='button cart'/>
                    <AmountCart>{cart.reduce((total, product) => total + product.quantity, 0)}</AmountCart>
                </ButtonCart>
                {isCartModalOpen && <CartModal onClose={closeCartModal}/>}
            </ContainerCart>
        </Container>
    );
};
