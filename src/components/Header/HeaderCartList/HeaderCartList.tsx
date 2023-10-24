import "./HeaderCartList.css";
import Button from "../../Button/Button.tsx";

const HeaderCartList = () => {

    return (
        <div className="header-list">
            <div className="header-cart-list-wrapper">
                <span className="header-list-cart">
                    <span className="header-cart-list-quantity">0</span>
                </span>
                <p className="header-cart-list-title">Cart</p>
            </div>
            {}
            <div className="header-cart-checkout">
                <div className="header-cart-subtotal">
                    <div className="header-cart-subtotal-title">
                        <p className="subtotal">Subtotal</p>
                    </div>
                    <div className="header-cart-subtotal-price">
                        <p className="subtotal-price">$$$</p>
                        <p className="subtotal-counter">asdsd</p>
                    </div>
                </div>
                <Button
                    classNameContainer="header-cart-checkout-wrapper"
                    classNameContent="checkout-button"
                    text="CHECKOUT"
                />
            </div>

        </div>

    )
};

export default HeaderCartList;