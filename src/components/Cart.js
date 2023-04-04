import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import CartContext from "./store/cart-context";

function Cart(props) {
    let cartCtx = useContext(CartContext);
    return (
        <Modal
            show={props.show}
            onHide={props.hideCart}
            backdrop="static"
            keyboard={false}
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>Your Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table responsive>
                    <thead>
                        <tr>
                            {["Item", "Price", "Quantity"].map(
                                (heading, index) => (
                                    <th key={index}>{heading}</th>
                                )
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {cartCtx.cartItems
                            .filter((product) => product.quantity > 0)
                            .map((product) => (
                                <tr>
                                    <td className="align-middle">
                                        <img
                                            src={product.imageUrl}
                                            alt="product"
                                        />
                                        <span>{product.title}</span>
                                    </td>
                                    <td className="align-middle">
                                        {product.price}
                                    </td>
                                    <td className="align-middle">
                                        <InputGroup className="mb-3">
                                            <Button
                                                variant="outline-danger"
                                                id="button-addon1"
                                            >
                                                <i className="fa-solid fa-minus"></i>
                                            </Button>
                                            <Form.Control
                                                aria-label="Example text with button addon"
                                                aria-describedby="basic-addon1"
                                                value={product.quantity}
                                                style={{display: "inline-block", width: "5px"}}
                                            />
                                            <Button
                                                variant="outline-success"
                                                id="button-addon2"
                                            >
                                                <i class="fa-solid fa-plus"></i>
                                            </Button>
                                        </InputGroup>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.hideCart}>
                    Close
                </Button>
                <Button variant="primary">Purchase</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Cart;
