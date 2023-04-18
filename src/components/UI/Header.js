import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import CartContext from "../store/cart-context";
import AuthContext from "../store/auth-context";

import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";

function Header(props) {
    const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);

    let totalCartItems = cartCtx.cartItems.reduce((totalItems, item) => {
        return totalItems + item.quantity;
    }, 0);

    let navigate = useNavigate();

    function loginRoute() {
        navigate("/login");
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
                        <NavLink activeClassName="active" className="nav-link" to="/">
                            Home
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <NavLink className="nav-link" to="/about">
                            About
                        </NavLink>
                    </Nav.Item>
                    {authCtx.isLoggedIn && (
                        <Nav.Item as="li">
                            <NavLink className="nav-link" to="/store">
                                Store
                            </NavLink>
                        </Nav.Item>
                    )}
                    <Nav.Item as="li">
                        <NavLink className="nav-link" to="/contact">
                            Contact
                        </NavLink>
                    </Nav.Item>

                    {authCtx.isLoggedIn && (
                        <Nav.Item as="li">
                            <Button variant="dark" onClick={props.showCart}>
                                <i className="fa-solid fa-cart-shopping"></i>
                                <Badge>{totalCartItems}</Badge>
                            </Button>
                        </Nav.Item>
                    )}

                    <Nav.Item as="li">
                        {authCtx.isLoggedIn && (
                            <Button
                                variant="primary"
                                className="px-4"
                                onClick={authCtx.logout}
                            >
                                Logout
                            </Button>
                        )}
                        {!authCtx.isLoggedIn && (
                            <Button
                                variant="primary"
                                className="px-4"
                                onClick={loginRoute}
                            >
                                Login
                            </Button>
                        )}
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
