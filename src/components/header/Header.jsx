import React, { useState } from 'react';
import './header.css';

const Header = () => {
  // State to toggle the menu visibility
  const [Toggle, showMenu] = useState(false);

  return (
    <header className='header'>
        <nav className='nav container'>
          {/* Logo linking to the homepage */}
          <a href='index.html' className='nav__logo'>Shashank</a>
          
          {/* Navigation menu */}
          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className='nav__list grid'>
              {/* Navigation items */}
              <li className='nav__item'>
                <a href='#home' className='nav__link active-link'>
                  <i className='uil uil-estate nav__icon'></i> Home
                </a>
              </li>
              <li className='nav__item'>
                <a href='#about' className='nav__link'>
                  <i className='uil uil-user nav__icon'></i> About
                </a>
              </li>
              <li className='nav__item'>
                <a href='#skills' className='nav__link'>
                  <i className='uil uil-file-alt nav__icon'></i> Skills
                </a>
              </li>
              <li className='nav__item'>
                <a href='#services' className='nav__link'>
                  <i className='uil uil-briefcase-alt nav__icon'></i> Services
                </a>
              </li>
              <li className='nav__item'>
                <a href='#qualifications' className='nav__link'>
                  <i className='uil uil-award nav__icon'></i> Qualifications
                </a>
              </li>
              <li className='nav__item'>
                <a href='#projects' className='nav__link'>
                  <i className='uil uil-scenery nav__icon'></i> Projects
                </a>
              </li>
              <li className='nav__item'>
                <a href='#contact' className='nav__link'>
                  <i className='uil uil-message nav__icon'></i> Contact
                </a>
              </li>
            </ul>
            {/* Close icon for menu */}
            <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
          </div>
          {/* Toggle button for menu visibility */}
          <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav> 
    </header>
  )
}

export default Header
