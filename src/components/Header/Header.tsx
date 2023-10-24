import { useState } from "react";
import "./Header.css"
import HeaderCartList from "./HeaderCartList/HeaderCartList.tsx";

const Header = () => {
    const [isHeaderCartOpen, setIsHeaderCartOpen] = useState<boolean>(false);

    const handleToggleIsHeaderList = () => {
        setIsHeaderCartOpen(!isHeaderCartOpen);
    }

    return (
        <div className="header">
            <div className="header-cart">
                <button
                    onClick={handleToggleIsHeaderList}
                    className={`cart ${isHeaderCartOpen ? "open" : "closed"}`}
                >
                    {!isHeaderCartOpen &&
                        (<span className="cart-quantity">0</span>)
                    }
                </button>
                {isHeaderCartOpen && (
                    <HeaderCartList />
                )}
            </div>
        </div>
    );
}

export default Header;