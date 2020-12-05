
import React from 'react';

import 'bootstrap/dist/js/bootstrap.min.js';

// component
import CartCase from './CartCase';

import { Link } from 'react-router-dom';

const Nav = () => {

  return(
    <nav className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Product App</Link>
      <Link className="text-primary" to="/add">Add product</Link>
     <CartCase/>

  </nav>
  )
}

export default Nav;

