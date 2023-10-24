import './App.css'
import Header from "../Header/Header.tsx";
import "../../../public/img/cart.png"
import ProductsList from "../Products/ProductsList.tsx";
import {useEffect, useState} from "react";
import iProduct from "../../../types/types.ts";
function App() {
    const [products, setProducts] = useState<iProduct[]>([]);

    const fetchProducts = () => {
        useEffect(() => {
            const getUrl = async () => {
                const response = await fetch("http://localhost:3001/products");
                const result = await response.json();

                setProducts(result);
            }

            getUrl();
        },[])
    }

    fetchProducts();


  return (
    <>
        <Header />
        <ProductsList
            products={products}
        />
    </>
  )
}

export default App
