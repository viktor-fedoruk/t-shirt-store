import ProductItem from "./ProductItem/ProductItem.tsx";
import iProduct from "../../../types/types.ts";
import {FC} from "react";
import "./ProductsList.css"

interface ProductListProps {
    products: iProduct[],
}
const ProductsList: FC<ProductListProps> = (props) => {
    const {
        products,
    } = props;

    console.log(products)
    return (
        <div className="products-container">
            <ul className="products-list">
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                    />
                ))}
            </ul>

        </div>
    )
};

export default ProductsList;