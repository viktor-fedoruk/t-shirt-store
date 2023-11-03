import { FC, useState } from "react";
import HeaderCartList from "./HeaderCartList/HeaderCartList.tsx";
import iProduct from "../../../types/types.ts";
import "./Header.css"

interface HeaderProps {
    cartProducts: iProduct[],
}

const Header:FC<HeaderProps> = (props) => {
    const {
        cartProducts,
    } = props;

    const [isHeaderCartOpen, setIsHeaderCartOpen] = useState<boolean>(false);
    const productsQuantityInCart = cartProducts
        .map(productQuantity => productQuantity.quantity)
        .reduce((sum, current) => ((sum || 0) + (current || 0)), 0);

    const handleToggleIsHeaderList = () => {
        setIsHeaderCartOpen(!isHeaderCartOpen);
    }

    return (
        <div className="header">
            <div className="header-cart">
                <button
                    onClick={handleToggleIsHeaderList}
                    className={`cart ${isHeaderCartOpen ? "open" : "closed"}`}
                >
                    {!isHeaderCartOpen && (
                        <span className="cart-quantity">{productsQuantityInCart}</span>
                    )}
                </button>

                {isHeaderCartOpen && (
                    <HeaderCartList
                        productsQuantityInCart={productsQuantityInCart}
                        cartProducts={cartProducts}
                    />
                )}
            </div>
        </div>
    )};

export default Header;