import { Outlet } from "react-router-dom";
import Footer from "../components/UI/Footer";
import Header from "../components/UI/Header";
import Cart from "../components/Cart";
import CartProvider from "../components/store/CartProvider";
import { useState } from "react";

function Root() {
    const [show, setShow] = useState(false);

    const hideCart = () => setShow(false);
    const showCart = () => setShow(true);
    return (
        <>
            <CartProvider>
                <Cart show={show} hideCart={hideCart}/>
                <Header showCart={showCart} />

                <Outlet />
            </CartProvider>

            <Footer />
        </>
    );
}

export default Root;
