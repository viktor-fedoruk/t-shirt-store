import "./ProductItem.css"
import Button from "../../Button/Button.tsx";
import {FC} from "react";
import iProduct from "../../../../types/types.ts";

interface ProductItemProps {
    product: iProduct,
}
const ProductItem: FC<ProductItemProps> = (props) => {
    const {
        product,
    } = props;

    return (
        <li className="product-item-wrapper">
            <div className="product-item-image">
                <img src={product.image} alt="Product Image"/>
                {product.isFreeShipping &&
                    (<p className="free-shipping">Free shipping</p>
                    )}
            </div>
            <p className="product-item-name">{product.title}</p>
            <p className="product-item-price">$ {product.price}</p>
            <p className="product-item-installments">{ `${product.installments}` `${Math.round(product.price / product.installments)}`}</p>
            <Button
                classNameContainer="product-item-add-to-cart-wrapper"
                classNameContent="add-to-cart"
                text="Add to cart"
            />
        </li>
    )
}

export default ProductItem;