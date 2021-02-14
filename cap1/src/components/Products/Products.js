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
    name: 'NMD_R1 Neighborhood',
    manufacturer: 'Adidas',
    image: prodOne,
    price: 180.00,
    serial: '#1111-11'
  },
  {
    name: 'Off-White x Hyperdunk',
    manufacturer: 'Nike',
    image: prodTwo,
    price: 250.00,
    serial: '#1111-12'
  },
  {
    name: 'Lebron x Lebron 15 Stained Glass',
    manufacturer: 'Nike',
    image: prodThree,
    price: 260.00,
    serial: '#1111-13'
  },
  {
    name: 'Lebron 15 Orange Box PE',
    manufacturer: 'Nike',
    image: prodFour,
    price: 220.00,
    serial: '#1111-14'
  },
  {
    name: 'Pharrell x NMD Human Race',
    manufacturer: 'Adidas',
    image: prodFive,
    price: 220.00,
    serial: '#1111-15'
  },
  {
    name: 'Air Jordan 11 Retro Legend Blue',
    manufacturer: 'Nike',
    image: prodSix,
    price: 220.00,
    serial: '#1111-16'
  },
  {
    name: 'OVO x Air Jordan 8 Retro',
    manufacturer: 'Nike',
    image: prodSeven,
    price: 225.00,
    serial: '#1111-17'
  },
  {
    name: 'J.Cole x RS-Dreamer',
    manufacturer: 'Puma',
    image: prodEight,
    price: 125.00,
    serial: '#1111-18'
  },
  {
    name: 'Air Jordan 11 Retro Win Like 9',
    manufacturer: 'Nike',
    image: prodNine,
    price: 220.00,
    serial: '#1111-19'
  },
  {
    name: 'Lebron 15 Griffey PE',
    manufacturer: 'Nike',
    image: prodTen,
    price: 220.00,
    serial: '#1111-21'
  
  },
  {
    name: 'Kobe 9 Elite Christmas',
    manufacturer: 'Nike',
    image: prodEleven,
    price: 180.00,
    serial: '#1111-22'

  },
  {
    name: 'Kobe 6 Proto Grinch',
    manufacturer: 'Nike',
    image: prodTwelve,
    price: 180.00,
    serial: '#1111-23'
  },
  {
    name: 'Dior x Air Jordan 1 High',
    manufacturer: 'Nike',
    image: prodThirteen,
    price: 2000.00,
    serial: '#1111-24'
  },
  {
    name: 'ZX 10000 Krusty Burger Shoes',
    manufacturer: 'Adidas',
    image: prodFourteen,
    price: 130.00,
    serial: '#1111-25'
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
  <Alert>
    <img src={product.image} alt={product.name} align="left" />
    <p>{product.name}</p>
  <Dropdown>
  <Dropdown.Toggle variant="warning" id="dropdown-basic">
    Details
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item>{product.manufacturer}</Dropdown.Item>
    <Dropdown.Item>{product.serial}</Dropdown.Item>
    <Dropdown.Item>{product.price}</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    <Button size="sm" variant="warning" onClick={() => addToCart(product)}>
      Add To Cart
    </Button>
    
  </Alert>
);

export default Products;