import React from 'react';
import './Footer.scss';
import FooterLogo from '../../assets/images/footer-logo.svg';
import homePageData from '../../components/Home/HomePageData';
import { NavLink, useLocation } from 'react-router-dom';



const Footer = () => {

  const location = useLocation();


  return (
    <div className={`main-footer-section ${location.pathname == '/services' || location.pathname == '/contact' || location.pathname == '/blog' ? 'service-footer' : ''}`}>
      <div className="inner-main-footer-section">
        <div className="top-newsletter-section">
          <div className="container">
            <div className="news-letter-content-input-sec">
              <div className="inner-news-letter-content-input-sec">
                <div className="news-letter-head">
                  <h2>Stay Connected With Us</h2>
                  <p>Sign up or reach out anytime—we’re here to <br /> keep your smile healthy</p>
                </div>
                <div className="email-input-section-news relative">
                  <input type="email" name="" placeholder='Email address' id="" />
                  <button type="button">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-footer-navigation-outer">
          <div className="container">
            <div className='main-footer-grid grid grid-cols-12 items-center'>
                <div className="col-span-4 footer-info-sec">
                  <div className="footer-logo">
                    <img src={FooterLogo} alt="" />
                  </div>
                  <p>Dedicated to healthy teeth and confident smiles. Trusted dental care for the whole family</p>
                  <div className="social-media-sec flex items-center gap-x-5">
                      {homePageData.SocialMedia.map((item , index) => {
                        return (
                          <div className="single-social-media-icon" key={index}>
                            <img src={item.img} alt="" />
                          </div>
                        )
                      })}
                  </div>
                </div>
                <div className="col-span-8 footer-menu-sec">
                  <div className="footer-menu-grid-sec grid grid-cols-12">
                        <div className="single-footer-nav-menu col-span-4">
                          <h4>Quick Links</h4>
                          <div className="single-links-nav">
                            <nav>
                              <ul>
                                <li><NavLink to={'/'}>Home</NavLink></li>
                                <li><NavLink to={'/about'}>About Us</NavLink></li>
                                <li><NavLink to={'/services'}>Services</NavLink></li>
                                <li><NavLink to={'/blog'}>Blog</NavLink></li>
                                <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                        <div className="single-footer-nav-menu col-span-4">
                          <h4>Legal</h4>
                          <div className="single-links-nav">
                            <nav>
                              <ul>
                                <li>
                                  <NavLink>Terms & Conditions</NavLink>
                                </li>
                                <li>
                                  <NavLink>Privacy Policy</NavLink>
                                </li>
                                <li>
                                  <NavLink>Help Center</NavLink>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                        <div className="single-footer-nav-menu col-span-4">
                          <h4>Contact</h4>
                          <div className="single-links-nav">
                            <nav>
                              <ul>
                                <li><a href="">1372 N McDowell Blvd B1, Petaluma, CA 94954, USA</a></li>
                                <li><a href="" className='mobile-number'><i class="bi bi-telephone-fill"></i>(123) 456-7890</a></li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright-section">
          <div className="container">
            <p>© Copyright LALITHA SMILE DENTAL- 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer