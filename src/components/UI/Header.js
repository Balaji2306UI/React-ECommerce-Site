import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import CartContext from "../store/cart-context";

import "./Header.css";

function Header(props) {
    const cartCtx = useContext(CartContext);

    let totalCartItems = cartCtx.cartItems.reduce((totalItems, item) => {
        return totalItems + item.quantity;
    }, 0);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <h2 className="brand-name d-inline-flex">The Generics</h2>
                </Navbar.Brand>
                <Nav
                    defaultActiveKey="#home"
                    className="justify-content-end"
                    as="ul"
                >
                    <Nav.Item as="li">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#store">Store</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav.Item>
                    <Button variant="dark" onClick = { props.showCart }>
                        <i className="fa-solid fa-cart-shopping"></i>
                        {totalCartItems && (<Badge>{totalCartItems}</Badge>)}
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
