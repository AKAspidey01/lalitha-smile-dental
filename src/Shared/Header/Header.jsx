import React, { useState } from 'react';
import Logo from '../../assets/images/logo.svg';
import './Header.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import homePageData from '../../components/Home/HomePageData';
import MenuIcon from '../../assets/images/menu-bar-icon.svg';


const Header = () => {

  const [megaMenu , setMegaMenu] = useState(false);

  const handleMegaMenu = () => {
    setTimeout(() => {
      setMegaMenu(false)
    }, 3000)
  }

  const [mobileMenu , setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
      setMobileMenu(!mobileMenu)
  }

  const navigate = useNavigate()

  return (
    <div className="main-header-section">
      <div className="inner-header-section">
        <div className="container relative">
          <div className="header-grid-section flex items-center justify-between">
            <div className="left-header-logo">
              <NavLink to={'/'} className={'inline-block h-full'}>
                <img src={Logo} alt="" />
              </NavLink>
            </div>
            <div className="header-navigation-menu desktop-menu-section">
              <nav>
                <ul className='flex items-center gap-x-12'>
                  <li>
                    <NavLink to={'/about'}>About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/services'}>
                      <div className="parent-menu-sec relative" onMouseEnter={() => setMegaMenu(true)}>
                        <button className='flex items-center gap-x-3'> Services <i class="bi bi-chevron-down"></i></button>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={'/blog'}>Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/contact'}>Contact</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="get-appointment-btn">
              <button type="button" className='bg-primary' onClick={() => navigate('/contact')}>Get Appointment</button>
            </div>

            <div className="mobile-menu-button">
              <button type="button" onClick={handleMobileMenu} className='w-7'><img src={MenuIcon} alt="" /></button>
            </div>
            <div className={`mobile-header-menu ${mobileMenu ? 'active' : ''}`}>
                <div className="top-back-icon-mobile bg-inputBg">
                    <button type="button" onClick={() => setMobileMenu(false)} className='flex items-center gap-2.5 text-Black font-semibold'>
                        <i class="bi bi-arrow-right text-Black text-lg"></i>
                        Close
                    </button>
                </div>
                <div className="p-8 border-b border-borderColor mb-5">
                    <div className="mobile-menu-logo-sec h-8 w-fit">
                        <img src={Logo} className="object-left w-fit" alt="" />
                    </div>
                </div>
                <div className="mobile-main-menu-listing-sec">
                    <nav>
                        <ul className='flex flex-col gap-y-4 header-navigation-menu'>
                            <li onClick={() => setMobileMenu(false)}><NavLink to={'/'}>Home</NavLink></li>
                            <li onClick={() => setMobileMenu(false)}><NavLink to={'/about'}>About Us</NavLink></li>
                            <li onClick={() => setMobileMenu(false)}><NavLink to={'/services'}>Services</NavLink></li>
                            <li onClick={() => setMobileMenu(false)}><NavLink to={'/blog'}>Blog</NavLink></li>
                            <li onClick={() => setMobileMenu(false)}><NavLink to={'/contact'}>Contact Us</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <button type='button' onClick={() => setMobileMenu(false)} className={`mobile-header-overlay ${mobileMenu ? 'active' : ''}`}>

            </button>
          </div>
          <div className={`abs-services-mega-menu-sec grid grid-cols-12 ${megaMenu == true ? 'active': ''}`} onMouseEnter={() => setMegaMenu(true)} onMouseLeave={() => setMegaMenu(false)} data-lenis-prevent>
            {homePageData.ServicesData.map((item , index) => {
              return (
              <NavLink className={'col-span-3'} key={index} to={{ pathname: `/services/${item.id}`, }} state={{ item }}>
                <div className="inner-single-megamenu-item flex gap-3 items-center">
                  <div className="left-icon-mega-menu-item w-10 h-10 min-w-10 min-h-10">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="right-mega-meni-item-text">
                    <p className='text-sm'>{item.title}</p>
                  </div>
                </div>
              </NavLink>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header