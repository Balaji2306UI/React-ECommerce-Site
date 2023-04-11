import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import CartContext from "../store/cart-context";

import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header(props) {
    const cartCtx = useContext(CartContext);

    let totalCartItems = cartCtx.cartItems.reduce((totalItems, item) => {
        return totalItems + item.quantity;
    }, 0);

    let navigate = useNavigate();

    function loginRoute() {
        navigate('/login');
    }

    return (
        <Navbar bg="dark" variant="dark" fixed="top">
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
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                    </Nav.Item>
                    {cartCtx.isLoggedIn && (
                    <Nav.Item as="li">
                        <Link className="nav-link" to="/store">
                            Store
                        </Link>
                    </Nav.Item>
                    )}
                    <Nav.Item as="li">
                        <Link className="nav-link" to="/contact">
                            Contact
                        </Link>
                    </Nav.Item>
                    {cartCtx.isLoggedIn && (
                        <Button variant="dark" onClick={props.showCart}>
                            <i className="fa-solid fa-cart-shopping"></i>
                            <Badge>{totalCartItems}</Badge>
                        </Button>
                    )}
                    
                        <Nav.Item as="li">
                            <Button variant="primary" className="px-4" onClick={loginRoute}>Login</Button>
                        </Nav.Item>
                        
                    
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
