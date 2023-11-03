import React, { FC } from "react";
import ProductSizeFilterItem from "./ProductSizeFilterItem/ProductSizeFilterItem.tsx";
import iProduct from "../../../../../types/types.ts";
import "./ProductSizeFilterList.css"

interface ProductSizeFilterListProps {
    onHandleFilteredProductsBySize: (e: React.ChangeEvent<HTMLInputElement>) => void,
    originalProducts: iProduct[],
}

const ProductSizeFilterList:FC<ProductSizeFilterListProps> = (props) => {
    const {
        onHandleFilteredProductsBySize,
        originalProducts,
    } = props;

    const getAllProductsSizes: string[] = originalProducts.flatMap(size => size.availableSizes);
    const availableSizes = [...new Set(getAllProductsSizes)];

    return (
        <div className="sorting-products-by-size">
            <h3 className="sorting-products-by-size-title">Sizes:</h3>
                {availableSizes.map(item => (
                    <ProductSizeFilterItem
                        key={item}
                        productSize={item}
                        checkboxValue={item}
                        onHandleFilteredProductsBySize={onHandleFilteredProductsBySize}
                    />
                ))}
        </div>
    )};

export default ProductSizeFilterList;