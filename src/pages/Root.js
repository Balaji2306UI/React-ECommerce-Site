import { Outlet } from "react-router-dom";
import Footer from "../components/UI/Footer";
import Header from "../components/UI/Header";
import CartProvider from "../components/store/CartProvider";

function Root(props) {
    return (
        <>
            <Header showCart={props.showCart} />
            <CartProvider>
            <Outlet />
            </CartProvider>
            
            <Footer />
        </>
    );
}

export default Root;
