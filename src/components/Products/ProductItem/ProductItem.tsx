import { FC } from "react";
import Button from "../../Button/Button.tsx";
import iProduct from "../../../../types/types.ts";
import "./ProductItem.css"

interface ProductItemProps {
    productsSizes: string[],
    product: iProduct,
    cartProducts: iProduct[],
    setCartProducts: (products: iProduct[]) => void,
}

const ProductItem:FC<ProductItemProps> = (props) => {
    const {
        product,
        productsSizes,
        cartProducts,
        setCartProducts,
    } = props;

    const addProductToCart = () => {
        const productInCart = cartProducts.find(productItem => productItem.id === product.id);

        if (!productInCart) {
            const newAddedProduct = {
                ...product,
                availableSizes: productsSizes[0] || product.availableSizes[0],
                quantity: 1,
            };

            setCartProducts([...cartProducts, newAddedProduct]);
        } else {
            const updatedCartProducts = [...cartProducts];
            const findProductByIndex = cartProducts.findIndex(productItem => productItem.id === product.id);
            const productInCart = updatedCartProducts[findProductByIndex];

            if (productInCart.quantity) {
                productInCart.quantity++;
            }

            if (productInCart.quantity === productInCart.installments) {
                productInCart.price = Math.round(updatedCartProducts[findProductByIndex].price / updatedCartProducts[findProductByIndex].installments * 100) / 100;
            }

            setCartProducts(updatedCartProducts);
        }
    }

    return (
        <li className="product-item-wrapper">
            <div className="product-item-image">
                <img src={product.image} alt="Product Image" />

                {product.isFreeShipping && (
                    <p className="free-shipping">Free shipping</p>
                )}
            </div>

            <p className="product-item-name">{product.title}</p>
            <p className="product-item-price">$ {product.price.toFixed(2)}</p>
            <p className="product-item-installments">{`or ${product.installments}`} x
                <b>{`$${(Math.round((product.price / product.installments) * 100) / 100).toFixed(2)}`}</b>
            </p>

            <Button
                handleOnClick={addProductToCart}
                classNameContainer="product-item-add-to-cart-wrapper"
                classNameContent="add-to-cart"
                text="Add to cart"
                buttonActiveText="Added"
            />
        </li>
    )
};

export default ProductItem;