import React, { useContext } from 'react';
import { Alert, Button, Dropdown } from 'react-bootstrap';


import prodOne from './image0.jpeg';
import prodTwo from './image1.jpeg';
import prodThree from './image2.jpeg';
import prodFour from './image3.jpeg';
import prodFive from './image4.jpeg';
import prodSix from './image5.jpeg';
import prodSeven from './image6.jpeg';
import prodEight from './image7.jpeg';
import prodNine from './image8.jpeg';
import prodTen from './image9.jpeg';
import prodEleven from './image10.jpeg';
import prodTwelve from './image11.jpeg';
import prodThirteen from './image12.jpeg';
import prodFourteen from './image13.jpeg';

import './Products.css';
import { Cart } from '../../App';


export const prodObjArr = [
  {
    name: 'Adidas',
    key: 1,
    image: prodOne,
    price: 12,
  },
  {
    name: 'Nike',
    key: 2,
    image: prodTwo,
    price: 12,
  },
  {
    name: 'Lebron',
    key: 3,
    image: prodThree,
    price: 12,
  },
  {
    name: 'Lebron',
    key: 4,
    image: prodFour,
    price: 12,
  },
  {
    name: 'Adidas',
    key: 5,
    image: prodFive,
    price: 12,
  },
  {
    name: 'Jordan',
    key: 6,
    image: prodSix,
    price: 12,
  },
  {
    name: 'Jordan',
    key: 7,
    image: prodSeven,
    price: 12,
  },
  {
    name: 'Puma',
    key: 8,
    image: prodEight,
    price: 12,
  },
  {
    name: 'Jordan',
    key: 9,
    image: prodNine,
    price: 12,
  },
  {
    name: 'Lebron',
    key: 10,
    image: prodTen,
    price: 12,
  },
  {
    name: 'Kobe',
    key: 11,
    image: prodEleven,
    price: 12,
  },
  {
    name: 'Kobe',
    key: 12,
    image: prodTwelve,
    price: 12,
  },
  {
    name: 'Jordan',
    key: 13,
    image: prodThirteen,
    price: 12,
  },
  {
    name: 'Adidas',
    key: 14,
    image: prodFourteen,
    price: 12,
  }
];




const Products = () => {
  const { cart, setCart } = useContext(Cart);
 



  const addToCart = (tempProd) => {
    const product = { ...tempProd };
    if (cart.find((item) => item.key === product.key)) return null;
    const tempCart = [...cart];
    product.quantity = 1;
    tempCart.push(product);

    setCart(tempCart);
  };

  return (
    <div id="product-page">
      <h2>Products</h2>
      {prodObjArr.map((product) => (
        <IndProdDisp key={`prod-disp${product.key}`} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

const IndProdDisp = ({ product, addToCart, setButtonPopup }) => (
  <Alert variant="primary">
    <img src={product.image} alt={product.name} align="left" />
    <p>{product.name}</p>
  <Dropdown>
  <Dropdown.Toggle variant="warning" id="dropdown-basic">
    Details
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item>{product.key}</Dropdown.Item>
    <Dropdown.Item>{product.price}</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    <Button size="sm" onClick={() => addToCart(product)}>
      Add To Cart
    </Button>
    
  </Alert>
);

export default Products;