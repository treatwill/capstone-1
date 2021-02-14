
import React, { useState, createContext } from 'react';
import PageDisplay from './components/PageDisplay';

import 'bootstrap/dist/css/bootstrap.css';

export const Cart = createContext();
//export const SearchTerm = searchTerm();
//export const SearchResults = searchResults();

const App = () => {

  const [cart, setCart] = useState([]);
  //const [searchTerm, setSearchTerm] = useState([]);
  //const [searchResults, setSearchResults] = useState([]);

  return (

    <Cart.Provider value={{ cart, setCart }}>
      <PageDisplay />
    </Cart.Provider>
  );
};

export default App;