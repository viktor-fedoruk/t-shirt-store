import { FC } from "react";
import iProduct from "../../../../../types/types.ts";
import "./SelectedProducts.css"

interface SelectedProducts {
    products: iProduct[],
    onHandleChangeSelectProducts: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    dropdownListValue: string,
}

const SelectedProducts:FC<SelectedProducts> = (props) => {
    const {
        products,
        dropdownListValue,
        onHandleChangeSelectProducts,
    } = props;

    const productsFound = Object.keys(products).length;

    return (
        <div className="products-sorting-row">
            <div className="products-found">{`${productsFound} Product(s) found.`}</div>
            <div className="sorting-products-by-price">Order by
                <select
                    className="select-column"
                    value={dropdownListValue}
                    onChange={onHandleChangeSelectProducts}
                >
                    <option value="select">Select</option>
                    <option value="lowestToHighest">Lowest to highest</option>
                    <option value="highestToLowest">Highest to lowest</option>
                </select>
            </div>
        </div>
    )
};

export default SelectedProducts;