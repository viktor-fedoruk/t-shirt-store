import React, { FC } from "react";
import iProduct from "../../../../types/types.ts";
import "./HeaderCartItem.css"

interface HeaderCartItemProps {
    product: iProduct,
}

const HeaderCartItem:FC<HeaderCartItemProps> = (props) => {
    const {
        product,
    } = props;

const handleOnMouseOver: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const targetElement = e.target as HTMLElement;

    if (targetElement) {
        const listItem = targetElement.closest("li");

        if (listItem) {
            const productId = listItem.id;
            const getProductById = document.getElementById(productId);

            if (getProductById === null) {
                return;
            } else {
                getProductById.classList.add("line-through");
            }
        }
    }
}

const handleOnMouseOut: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const targetElement = e.target as HTMLElement;

    if (targetElement) {
        const listItem = targetElement.closest("li");

        if (listItem) {
            const productId = listItem.id;
            const getProductById = document.getElementById(productId);

            if (getProductById === null) {
                return;
            } else {
                getProductById.classList.remove("line-through");
            }
        }
    }
}

    return (
        <li
            id={product.id.toString()}
            className="cart-item-wrapper"
        >
            <div className="cart-item-row">
                <div className="cart-item-image">
                    <img src={product.image} alt="Product Image"/>
                </div>
                <div className="cart-item-info">
                    <p className="cart-item-title">{product.title}</p>
                    <p className="cart-item-description">{`${product.availableSizes} | ${product.style}`}</p>
                    <p className="cart-item-quantity">{`Quantity: ${product.quantity}`}</p>
                </div>
            </div>
            <div className="cart-item-price-wrapper">
                <p className="cart-item-price">{`$ ${product.price.toFixed(2)}`}</p>
            </div>
            <div className="cart-item-remove-wrapper"
                    onMouseOver={handleOnMouseOver}
                    onMouseOut={handleOnMouseOut}
            >
                <button className="remove-item">
                    ×
                </button>
            </div>
        </li>
    )};

export default HeaderCartItem;