import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

function Cart(props) {
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
                        {props.data
                            .filter((product) => product.quantity > 0)
                            .map((product) => (
                                <tr>
                                    <td className="align-middle">
                                        <img src={product.imageUrl} alt="product" />
                                        <span>{product.title}</span>
                                    </td>
                                    <td className="align-middle">
                                        { product.price }
                                    </td>
                                    <td className="align-middle">
                                        <input value={product.quantity} style={{width: "auto"}}/>
                                        <Button variant="danger">REMOVE</Button>
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
