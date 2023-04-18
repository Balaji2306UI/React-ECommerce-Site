import { useState, useContext } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Products from "./Products";
import Cart from "./components/Cart";
import CartProvider from "./components/store/CartProvider";

import { Routes, Route, Navigate } from "react-router-dom";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import AuthContext from "./components/store/auth-context";
import { AuthContextProvider } from "./components/store/auth-context";
import ForgotPassword from "./pages/ForgotPassword";

/*
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/store", element: <Products /> },
            { path: "/contact", element: <Contact /> },
            { path: "/login", element: <Login /> },
            { path: "/newPassword", element: <ForgotPassword /> },
        ],
    },
]); */

const productsArr = [
    {
        title: "Colors",
        price: 100,
        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        rating: 4.5,
        quantity: 2,
    },
    {
        title: "Black and white Colors",
        price: 50,
        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        rating: 4,
        quantity: 1,
    },
    {
        title: "Yellow and Black Colors",
        price: 70,
        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        rating: 3.5,
        quantity: 0,
    },
    {
        title: "Blue Color",
        price: 100,
        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        rating: 5,
        quantity: 3,
    },
];

function App() {
    const [show, setShow] = useState(false);
    const hideCart = () => setShow(false);
    const showCart = () => setShow(true);

    const authCtx = useContext(AuthContext);

    /* 
    return (
        <CartProvider>
            <Cart show={show} hideCart={hideCart} data={productsArr} />
            <Header showCart={showCart} />
            <Products data={productsArr} />
            <Footer />
        </CartProvider>
    );
    */
    /*
    return <AuthContextProvider>
        <BrowserRouter>
            <Route path="/" element={<Root/>}></Route>
        </BrowserRouter>
    </AuthContextProvider>
    */
    return (
        <CartProvider>
            <Cart show={show} hideCart={hideCart} data={productsArr} />
            <Header showCart={showCart} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route
                    path="/store"
                    element={
                        <>
                            {authCtx.isLoggedIn && <Products />}
                            {!authCtx.isLoggedIn && <Navigate to="/login" />}
                        </>
                    }
                />
                <Route path="contact" element={<Contact />} />
                <Route
                    path="login"
                    element={
                        <>
                            {authCtx.isLoggedIn && <Navigate to="/" />}
                            {!authCtx.isLoggedIn && <Login />}
                        </>
                    }
                />
                <Route
                    path="newPassword"
                    element={
                        <>
                            {authCtx.isLoggedIn && <ForgotPassword />}
                            {!authCtx.isLoggedIn && <Navigate to="/login" />}
                        </>
                    }
                />
            </Routes>
            <Footer />
        </CartProvider>
    );
}

export default App;
