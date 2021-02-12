import React, { useContext } from 'react';
import { Alert, Button } from 'react-bootstrap';

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
    key: 'prod-one',
    image: prodOne,
    price: 12,
  },
  {
    name: 'Nike',
    key: 'prod-two',
    image: prodTwo,
    price: 12,
  },
  {
    name: 'Lebron',
    key: 'prod-three',
    image: prodThree,
    price: 12,
  },
  {
    name: 'Lebron',
    key: 'prod-four',
    image: prodFour,
    price: 12,
  },
  {
    name: 'Adidas',
    key: 'prod-five',
    image: prodFive,
    price: 12,
  },
  {
    name: 'Jordan',
    key: 'prod-six',
    image: prodSix,
    price: 12,
  },
  {
    name: 'Jordan',
    key: 'prod-seven',
    image: prodSeven,
    price: 12,
  },
  {
    name: 'Puma',
    key: 'prod-eight',
    image: prodEight,
    price: 12,
  },
  {
    name: 'Jordan',
    key: 'prod-nine',
    image: prodNine,
    price: 12,
  },
  {
    name: 'Lebron',
    key: 'prod-ten',
    image: prodTen,
    price: 12,
  },
  {
    name: 'Kobe',
    key: 'prod-eleven',
    image: prodEleven,
    price: 12,
  },
  {
    name: 'Kobe',
    key: 'prod-twelve',
    image: prodTwelve,
    price: 12,
  },
  {
    name: 'Jordan',
    key: 'prod-thirteen',
    image: prodThirteen,
    price: 12,
  },
  {
    name: 'Adidas',
    key: 'prod-fourteen',
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
//add 
  return (
    <div id="product-page">
      <h2>Products</h2>
      {prodObjArr.map((product) => (
        <IndProdDisp key={`prod-disp${product.key}`} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

const IndProdDisp = ({ product, addToCart }) => (
  <Alert variant="info">
    <img src={product.image} alt={product.name} align="left" />
    <p>{product.name}</p>
    <Button size="sm" onClick={() => addToCart(product)}>
      Add To Cart
    </Button>
  </Alert>
);

export default Products;