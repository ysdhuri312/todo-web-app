/** @format */

import React from 'react';
import logo from '../assets/images/icon.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt='logo' />
        <span>ToDo</span>
      </div>
      <nav className='navbar'>
        <a href='#'>Home</a>
        <a href='#archives'>Archives</a>
        <a href='#about'>About</a>
        <a href='#sign-in'>Sign in</a>
        <a href='#sign-up'>Sign up</a>
      </nav>
    </div>
  );
};

export default Header;
