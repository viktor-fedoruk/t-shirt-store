
const HeaderCartProduct = () => {
    return (
        <ul className="header-cart-product">
            <li className="header-cart-product-item">
                <div className="header-cart-product-img">
                    <img src={}/>
                </div>
                <div className="header-cart-product-info">
                    <p className="header-cart-product-name"></p>
                    <p className="header-cart-product-size"></p>
                    <p className="header-cart-product-quantity"></p>
                </div>
                <div className="header-cart-product-price">
                    <p className="product-price"></p>
                </div>
                <div className="remove-header-cart-product">
                    <button className="remove-product"></button>
                </div>
            </li>
        </ul>
    );
}

export default HeaderCartProduct;