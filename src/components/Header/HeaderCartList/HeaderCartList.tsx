import { FC } from "react";
import Modal from "../../Modal/Modal.tsx";
import Button from "../../Button/Button.tsx";
import HeaderCartItem from "../HeaderCartItem/HeaderCartItem.tsx";
import iProduct from "../../../../types/types.ts";
import "./HeaderCartList.css";

interface HeaderCartList {
    cartProducts: iProduct[],
    setCartProducts: (products: iProduct[]) => void,
    onCloseHeaderCartModal: () => void,
    productsQuantityInCart?: number,
    isHeaderCartOpen: boolean,
}

const HeaderCartList:FC<HeaderCartList> = (props) => {
    const {
        cartProducts,
        setCartProducts,
        onCloseHeaderCartModal,
        productsQuantityInCart,
        isHeaderCartOpen,
    } = props;

    const sumProductsPrices = cartProducts
        .map(product => (product.price * (product.quantity || 0) ))
        .reduce( (sum, current) => sum + current, 0)
        .toFixed(2);

    return (
        <>
            {isHeaderCartOpen && (
                <Modal
                    onClose={onCloseHeaderCartModal}
                    classNameWrapper="cart-list-container"
                    classNameContent="cart-list"
                    portalClassName="header-cart"
                >
                    <div className="header-cart-icon-wrapper">
                    <span className="cart-icon">
                        <span className="cart-products-quantity">{productsQuantityInCart}</span>
                    </span>
                        <p className="cart-title">Cart</p>
                    </div>
                    <ul className="cart-item-container">
                        {cartProducts.map(product => (
                            <HeaderCartItem
                                key={product.id}
                                product={product}
                                cartProducts={cartProducts}
                                setCartProducts={setCartProducts}
                            />
                        ))}
                    </ul>
                    <div className="header-cart-checkout">
                        <div className="header-cart-subtotal">
                            <div className="header-cart-subtotal-title">
                                <p className="subtotal">Subtotal</p>
                            </div>
                            <div className="header-cart-subtotal-price">
                                <p className="subtotal-price">{`$ ${sumProductsPrices}`}</p>
                            </div>
                        </div>

                        <Button
                            classNameContainer="header-cart-checkout-wrapper"
                            classNameContent="checkout-button"
                            text="CHECKOUT"
                        />
                    </div>
                </Modal>
            )}
        </>
    )};

export default HeaderCartList;