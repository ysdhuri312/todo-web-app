/** @format */

import React from 'react';
import logo from '../assets/images/icon.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='logo' className='logo-img' />
          <span>ToDo</span>
        </Link>
      </div>
      <nav className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/archives'>Archives</Link>
        <Link to='/signin'>Sign in</Link>
        <Link to='/signup'>Sign up</Link>
      </nav>
    </div>
  );
};

export default Header;
