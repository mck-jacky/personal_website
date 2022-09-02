import React from 'react';
import './index.css';
import { Link } from 'react-router-dom' 

const Header = () => {
    return (
        <div className='header'>
          <Link to = "/">
            <div className='logo'>JM</div>
          </Link>

          <div className='header-nav-bar'>
            <Link to = "/about">
              <div className='item'>About</div>
            </Link>
            <Link to = "/projects">
              <div className='item'>Projects</div>
            </Link>
            <Link to = "/resume">
              <div className='item'>Resume</div>
            </Link>
          </div>


        </div>
    )
}

export default Header