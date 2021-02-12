import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Products from './Products/Products';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import Profile from './Profile';
import NavBar from './NavBar/NavBar';
import { faTags, faShoppingCart, faIdBadge } from '@fortawesome/free-solid-svg-icons';


const PageDisplay = () => {
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
    {
      key: 'profile',
      link: '/Profile',
      narr: 'Profile',
      icon: faIdBadge,
      className: 'icon',
      trigger: true,
      component: Profile,
    },
  ];

  return (
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
  );
};

export default PageDisplay;