import React, { FC } from "react";
import ProductItem from "./ProductItem/ProductItem.tsx";
import ProductSizeFilterList from "./ProductsSorting/ProductSizeFilterList/ProductSizeFilterList.tsx";
import SelectedProducts from "./ProductsSorting/SelectedProducts/SelectedProducts.tsx";
import iProduct from "../../../types/types.ts";
import "./Products.css"

interface ProductListProps {
    products: iProduct[],
    cartProducts: iProduct[],
    productsSizes: string[],
    setCartProducts: (products: iProduct[]) => void,
    originalProducts:iProduct[],
    onHandleFilteredProductsBySize: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onHandleChangeSelectProducts: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    dropdownListValue: string,
}

const Products: FC<ProductListProps> = (props) => {
    const {
        products,
        cartProducts,
        productsSizes,
        setCartProducts,
        onHandleFilteredProductsBySize,
        onHandleChangeSelectProducts,
        dropdownListValue,
        originalProducts,
    } = props;

    return (
        <div className="products-container">
            <ProductSizeFilterList
                originalProducts={originalProducts}
                onHandleFilteredProductsBySize={onHandleFilteredProductsBySize}
            />

            <div className="products-list-wrapper">
                <SelectedProducts
                    onHandleChangeSelectProducts={onHandleChangeSelectProducts}
                    dropdownListValue={dropdownListValue}
                    products={products}
                />

                <ul className="products-list">
                    {products.map((product) => (
                        <ProductItem
                            cartProducts={cartProducts}
                            setCartProducts={setCartProducts}
                            productsSizes={productsSizes}
                            key={product.id}
                            product={product}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )};

export default Products;