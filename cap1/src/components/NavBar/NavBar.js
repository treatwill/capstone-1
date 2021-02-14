import React from 'react';
import { Navbar, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.css';





const NavBar = ({ linkObjArr }) => (
  <Navbar bg="dark" variant="dark">
    <Link to="/">
      <Navbar.Brand>Treat Kicks</Navbar.Brand>

      <input type="text" placeholder="Search" />

    </Link>
    <Nav className="ml-auto">
      {linkObjArr.map((linkObj) => (
        <IndLinkObject
          key={`nav-${linkObj.key}`}
          linkObj={linkObj}
        />
      ))}
    </Nav>
  </Navbar>
); 

const IndLinkObject = ({ linkObj }) => (
  <OverlayTrigger
    placement="left"
    overlay={(
      <Tooltip>
        {linkObj.narr}
      </Tooltip>
    )}
  >
    <Link to={linkObj.link} className={linkObj.className}>
     <FontAwesomeIcon icon={linkObj.icon} />
    </Link>
  </OverlayTrigger>
);

export default NavBar;