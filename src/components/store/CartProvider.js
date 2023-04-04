import React, { useState } from "react";
import CartContext from "./cart-context";

function CartProvider(props) {
    let products = [
        {
            id: 'p1',
            title: "Colors",
            price: 100,
            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
            rating: 4.5,
            quantity: 0
        },
        {
            id: 'p2',
            title: "Black and white Colors",
            price: 50,
            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
            rating: 4,
            quantity: 0
        },
        {
            id: 'p3',
            title: "Yellow and Black Colors",
            price: 70,
            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
            rating: 3.5,
            quantity: 0
        },
        {
            id: 'p4',
            title: "Blue Color",
            price: 100,
            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
            rating: 5,
            quantity: 0
        }
    ];
    const [menu, setMenu] = useState(products);

    const [totalAmount, setTotalAmount] = useState(0);

    const addItemToCartHandler = (id) => {
        console.log("inside add handler", " ", id)
        menu.forEach((item) => {
            if (item.id === id) {
                item.quantity++;
                setTotalAmount((prevTotal) => {
                    return prevTotal + item.price;
                })
            }
        });
        setMenu([...menu]);
    };

    const removeItemFromCartHandler = (id) => {
        menu.forEach((item) => {
            if (item.id === id && item.quantity !== 0) {
                item.quantity--;
                setTotalAmount((prevTotal) => {
                    return prevTotal - item.price;
                })
            }
        });
        setMenu([...menu]);
    };

    const cartContext = {
        cartItems: menu,
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
