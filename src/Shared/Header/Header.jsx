import React from 'react';
import Logo from '../../assets/images/logo.svg';
import './Header.scss';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div className="main-header-section">
      <div className="inner-header-section">
        <div className="container">
          <div className="header-grid-section flex items-center justify-between">
            <div className="left-header-logo">
              <img src={Logo} alt="" />
            </div>
            <div className="header-navigation-menu">
              <nav>
                <ul className='flex items-center gap-x-12'>
                  <li>
                    <NavLink>About Us</NavLink>
                  </li>
                  <li>
                    <NavLink>
                      <div className="parent-menu-sec">
                        <button className='flex items-center gap-x-3'> Services <i class="bi bi-chevron-down"></i></button>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink>Blog</NavLink>
                  </li>
                  <li>
                    <NavLink>Contact</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="get-appointment-btn">
              <button type="button" className='bg-primary'>Get Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header