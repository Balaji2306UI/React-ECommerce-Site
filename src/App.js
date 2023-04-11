import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Products from "./Products";
import Cart from "./components/Cart";
import CartProvider from "./components/store/CartProvider";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

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
        ],
    },
]);

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
    return <RouterProvider router={routes} />;
}

export default App;
