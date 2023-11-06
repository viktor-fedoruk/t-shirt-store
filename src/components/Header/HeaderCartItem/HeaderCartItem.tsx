import { FC, MouseEventHandler } from "react";
import iProduct from "../../../../types/types.ts";
import "./HeaderCartItem.css"

interface HeaderCartItemProps {
    product: iProduct,
    cartProducts: iProduct[],
    setCartProducts: (products: iProduct[]) => void,
}

const HeaderCartItem:FC<HeaderCartItemProps> = (props) => {
    const {
        product,
        cartProducts,
        setCartProducts,
    } = props;

    const deleteProductCartItem: MouseEventHandler<HTMLButtonElement> = (e) => {
        const productItemUl = (e.target as HTMLElement).closest(".cart-item-wrapper");

        if (productItemUl) {
            productItemUl.classList.add("active");
        }
    }

    const handleMouseEvents = (e: React.MouseEvent<HTMLDivElement>, mouseOnElement: boolean) => {
        const targetElement = e.target as HTMLElement;

        if (targetElement) {
            const listItem = targetElement.closest("li");

            if (listItem) {
                const productId = listItem.id;
                const getProductById = document.getElementById(productId);


                if (getProductById) {
                    if (mouseOnElement) {
                        getProductById.classList.add("line-through");
                    } else {
                        getProductById.classList.remove("line-through");
                    }
                }
            }
        }
    }

    return (
        <li
            className="cart-item-wrapper"
            id={product.id.toString()}
            onAnimationEnd={() => {
                setCartProducts(cartProducts.filter(item =>
                    item.id !== product.id
                ))
            }}
        >
            <div className="cart-item-row">
                <div className="cart-item-image">
                    <img src={product.image} alt="Product Image" />
                </div>

                <div className="cart-item-info">
                    <p className="cart-item-title">{product.title}</p>
                    <p className="cart-item-description">{`${product.availableSizes} | ${product.style}`}</p>
                    <p className="cart-item-quantity">{`Quantity: ${product.quantity}`}</p>
                </div>

            </div>

            <div className="cart-item-price-wrapper">
                <p className="cart-item-price">{`$ ${product.price.toFixed(2)}`}</p>
            </div>

            <div className="cart-item-remove-wrapper"
                 onMouseOver={(e) => handleMouseEvents(e, true)}
                 onMouseOut={(e) => handleMouseEvents(e, true)}
            >
                <button
                    className="remove-item"
                    onClick={deleteProductCartItem}
                >
                    ×
                </button>
            </div>
        </li>
    )
};

export default HeaderCartItem;