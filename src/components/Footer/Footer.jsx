import React from 'react';
import './index.css';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom' 

const Footer = () => {
  return (
    <div className='footer'>

      <div className='self-intro-column'>
        <div className='title'>Jacky Ma</div>
        <div>
          UNSW | Computer Science | 2nd year
        </div>
        <div className='social'>
          <SocialIcon className='social-item' url="https://www.linkedin.com/in/jacky-ma-6a0631204" />
          <SocialIcon className='social-item' url="https://github.com/mck-jacky" />
        </div>

      </div>

      <div className='nav-column'>
        <div className='item'>Quick Links</div>
        <Link to = "/">
          <div className='item'>Home</div>
        </Link>
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

export default Footer