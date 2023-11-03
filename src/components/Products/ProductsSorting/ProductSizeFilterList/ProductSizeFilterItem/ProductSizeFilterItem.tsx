import React, { FC } from "react";
import "./ProductSizeFilterItem.css"

interface ProductSizeFilterItem {
    productSize: string,
    checkboxValue: string,
    onHandleFilteredProductsBySize: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const ProductSizeFilterItem:FC<ProductSizeFilterItem> = (props) => {
    const {
        productSize,
        checkboxValue,
        onHandleFilteredProductsBySize,
    } = props;

    return (
        <div className="product-size-item">
            <label className="sorting-products-by-size-label">
                <input
                    className="sorting-products-by-size-checkbox"
                    type="checkbox"
                    value={checkboxValue}
                    onChange={onHandleFilteredProductsBySize}
                />
                <span className="size">{productSize}</span>
            </label>
        </div>
    )
}

export default ProductSizeFilterItem;