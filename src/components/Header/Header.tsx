import { FC, useState } from "react";
import HeaderCartList from "./HeaderCartList/HeaderCartList.tsx";
import iProduct from "../../../types/types.ts";
import "./Header.css"

interface HeaderProps {
    cartProducts: iProduct[],
    setCartProducts: (products: iProduct[]) => void,
}

const Header:FC<HeaderProps> = (props) => {
    const {
        cartProducts,
        setCartProducts,
    } = props;

    const [isHeaderCartOpen, setIsHeaderCartOpen] = useState<boolean>(false);
    const productsQuantityInCart = cartProducts
        .map(productQuantity => productQuantity.quantity)
        .reduce((sum, current) => ((sum || 0) + (current || 0)), 0);

    const handleToggleIsHeaderList = () => {
        setIsHeaderCartOpen(isHeaderCartOpen => !isHeaderCartOpen);
    }

    const closeModal = () => {
        setIsHeaderCartOpen(false);
    }

    return (
        <div className="header">
            <div className="header-cart" onClick={(e) => e.stopPropagation()}>
                <div
                    onClick={handleToggleIsHeaderList}
                    className={`cart ${isHeaderCartOpen ? "open" : "closed"}`}
                >
                    {!isHeaderCartOpen && (
                        <span className="cart-quantity">{productsQuantityInCart}</span>
                    )}
                </div>
            </div>

            <HeaderCartList
                productsQuantityInCart={productsQuantityInCart}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                onCloseHeaderCartModal={closeModal}
                isHeaderCartOpen={isHeaderCartOpen}
            />
        </div>
    )};

export default Header;