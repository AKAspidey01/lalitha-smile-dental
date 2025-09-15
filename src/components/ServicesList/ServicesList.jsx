import React from 'react';
import '../Home/Home.scss';
import './ServicesList.scss';
import { NavLink } from 'react-router-dom';
import homePageData from '../Home/HomePageData';

const ServicesList = () => {
  return (
    <div className="main-services-section">
      <div className="inner-services-sec">
        <section className="main-breadcrumb-similar">
            <div className="inner-breadcrumb-similar">
                <div className="container">
                    <h2>SERVICES</h2>
                    <ul className='flex items-center justify-center gap-x-4'>
                        <li><NavLink to={'/'}>Lalitha Smile Dental</NavLink></li>
                        <li><i class="bi bi-chevron-right text-white"></i></li>
                        <li>Services</li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="services-section-1">
          <div className="inner-services-section-1">
            <div className="container">
              <div className="block-content-section">
                  <div className="heading-slider-buttons-sec flex items-center justify-between">
                      <h2>Explore All Our Services</h2>
                      <div className="right-search-services-section">
                        <input type="text" placeholder='Search for services..' className='bg-white font-semibold text-Black' />
                      </div>
                  </div>
              </div>
              <div className="services-list-grid-section grid grid-cols-12 gap-5">
                {homePageData.ServicesData.map((item , index) => {
                  return (
                    <div className="single-service-section bg-white rounded-3xl col-span-4" key={index}>
                      <div className="service-image-sec">
                          <img src={item.img} alt="" />
                      </div>
                      <div className="service-section-content">
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                          <div className="know-more-linear-btn">
                              <button type="button" className='flex items-center gap-x-4 text-secondary hover:text-primary'>Know More <i class="bi bi-arrow-right"></i></button>
                          </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ServicesList