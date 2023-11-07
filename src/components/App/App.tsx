import { useEffect, useState } from "react";
import Header from "../Header/Header.tsx";
import Products from "../Products/Products.tsx";
import iProduct from "../../../types/types.ts";
import "../../../public/img/products/cart.png"
import "./App.css"

function App() {
    const [originalProducts, setOriginalProducts] = useState<iProduct[]>([]);
    const [products, setProducts] = useState<iProduct[]>([]);
    const [cartProducts, setCartProducts] = useState<iProduct[]>([]);
    const [dropdownListValue, setDropdownListValue] = useState<string>("select");
    const [productsSizes, setProductsSizes] = useState<string[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<iProduct[]>([]);

    useEffect(() => {
        const getUrl = async () => {
            try {
                const response = await fetch("http://localhost:3001/products");

                if (!response.ok) {
                    const message = `An error has occured: ${response.status}`;
                    throw new Error(message);
                }

                const result = await response.json();

                setProducts(result);
                setOriginalProducts(result);
            } catch (error) {
                console.log(error);
            }
        }

        getUrl();
    },[]);

    const handleChangeSelectProducts = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const getValueFromDropdownList = e.target.value;
        const sortedProducts = [...products];

        if (getValueFromDropdownList === "lowestToHighest") {
            const sortLowestToHighest = sortedProducts.sort((a, b) => a.price - b.price);

            setProducts(sortLowestToHighest);
            setDropdownListValue(getValueFromDropdownList);

            return;
        }

        if (getValueFromDropdownList === "highestToLowest") {
            const sortHighestToLowest = sortedProducts.sort((a, b) => b.price - a.price);

            setProducts(sortHighestToLowest);
            setDropdownListValue(getValueFromDropdownList);

            return;
        }

        if (selectedProducts.length === 0) {
            setProducts(originalProducts);

            return;
        }

        setDropdownListValue("select");
        setProducts(selectedProducts);
    }

    const handleFilteredProductsBySize = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        const selectedSize = e.target.value;

        if (isChecked) {
            const selectedSizes = [...productsSizes, selectedSize];
            
            setProductsSizes(selectedSizes);

            const filteredProducts = originalProducts
                .filter((product) => selectedSizes
                    .some(size => product.availableSizes
                        .includes(size)));

            setProducts(filteredProducts);
            setSelectedProducts(filteredProducts);
        } else {
            const selectedSizes = productsSizes.filter((size) => size !== selectedSize);

            setProductsSizes(selectedSizes);

            const filteredProducts = originalProducts
                .filter((product) => selectedSizes
                    .some(size => product.availableSizes
                        .includes(size)));

            if (!filteredProducts.length) {
                setProducts(originalProducts);

                return;
            }

            setProducts(filteredProducts);
            setSelectedProducts(originalProducts);
        }
    }

    return (
    <>
        <Header
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
        />

        <Products
            products={products}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
            productsSizes={productsSizes}
            originalProducts={originalProducts}
            dropdownListValue={dropdownListValue}
            onHandleChangeSelectProducts={handleChangeSelectProducts}
            onHandleFilteredProductsBySize={handleFilteredProductsBySize}
        />
    </>
    )
}

export default App
