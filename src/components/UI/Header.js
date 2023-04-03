import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import "./Header.css";

function Header(props) {
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
                        <Badge>4</Badge>
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
