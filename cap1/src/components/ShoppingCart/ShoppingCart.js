import React, { useContext } from 'react';
import { Alert, Form, Button, Row, Col, Table } from 'react-bootstrap';

import { Cart } from '../../App';

import './ShoppingCart.css';

const ShoppingCart = () => {
  const { cart, setCart } = useContext(Cart);

  const changeQuantity = (tempProd, quantityIn) => {
    const product = { ...tempProd };
    if (quantityIn === '0') return removeItem(product);
    product.quantity = parseInt(quantityIn, 10);
    const prodIndex = cart.map((item) => item.key).indexOf(product.key);
    const tempCart = [...cart];
    tempCart[prodIndex] = product;

    setCart(tempCart);
    return null;
  };

  const removeItem = (product) => {
    const prodIndex = cart.map((item) => item.key).indexOf(product.key);
    const tempCart = [...cart];
    setCart(tempCart.slice(0, prodIndex).concat(tempCart.slice(prodIndex + 1)));
  };

  return (
    <div id="shopping-cart">
      <h3>Cart</h3>
      {cart.map((product) => (
        <CartItem product={product} key={`cart-${product.key}`} changeQuantity={changeQuantity} />
      ))}
      {cart.length > 0 && <Totals cart={cart} />}
    </div>
  );
};

const Totals = ({ cart }) => {
  const subTotal = cart.map((item) => item.price * item.quantity).reduce((total, item) => total + item);
  const taxRate = 0.05;

  return (
    <Table striped bordered hover variant="dark">
      <tbody>
        <tr>
          <td>Sub Total: </td>
          <td>{subTotal.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Tax: </td>
          <td>{parseFloat(subTotal * taxRate).toFixed(2)}</td>
        </tr>
        <tr>
          <td>Total: </td>
          <td>{parseFloat(subTotal * (1 + taxRate)).toFixed(2)}</td>
        </tr>
      </tbody>
    </Table>
  );
};

const CartItem = ({ product, changeQuantity }) => (
  <Alert variant="info">
    <div className="cart-item">
      <img src={product.image} alt={product.name} align="left" />
      <p>{product.name}</p>
      <p>Cost: {parseFloat(product.quantity * product.price).toFixed(2)}</p>
    </div>
    <Form>
      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Quantity
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            sm="10"
            as="select"
            value={product.quantity}
            onChange={(event) => changeQuantity(product, event.target.value)}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Form.Control>
        </Col>
      </Form.Group>
    </Form>
    <Button size="sm" onClick={() => changeQuantity(product, '0')} variant="warning">Remove</Button>
  </Alert>
);

export default ShoppingCart;
