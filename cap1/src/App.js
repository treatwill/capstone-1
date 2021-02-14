
import React, { useState, createContext } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Products from './components/Products/Products';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import NavBar from './components/NavBar/NavBar';
import { faTags, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.css';

export const Cart = createContext();
//export const SearchTerm = searchTerm();
//export const SearchResults = searchResults();

const App = () => {

  const [cart, setCart] = useState([]);
  //const [searchTerm, setSearchTerm] = useState([]);
  //const [searchResults, setSearchResults] = useState([]);
  const linkObjArr = [
    {
      key: 'products',
      link: '/',
      narr: 'Products',
      icon: faTags,
      className: 'icon',
      trigger: true,
      component: Products,
    },
    {
      key: 'shopping-cart',
      link: '/Cart',
      narr: 'Shopping Cart',
      icon: faShoppingCart,
      className: 'icon',
      trigger: true,
      component: ShoppingCart,
    },

  ];

  return (

    <Cart.Provider value={{ cart, setCart }}>
      <BrowserRouter>
      <Route
        render={() => <NavBar linkObjArr={linkObjArr} />}
      />
      <Switch>
        {linkObjArr.map((linkObj) => (
          <Route
            exact
            key={`route-${linkObj.key}`}
            path={linkObj.link}
            component={linkObj.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
    </Cart.Provider>
  );
}; 

export default App;