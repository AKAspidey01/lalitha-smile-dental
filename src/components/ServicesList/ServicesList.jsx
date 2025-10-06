import React, { useState } from 'react';
import '../Home/Home.scss';
import './ServicesList.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import homePageData from '../Home/HomePageData';

const ServicesList = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate()

  // Filter the services based on input
  const filteredServices = homePageData.ServicesData.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                      <div className="right-search-services-section relative">
                        <div className="abs-icon-search absolute">
                          <i class="bi bi-search text-Black text-lg"></i>
                        </div>
                        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder='Search for services..' className='bg-white font-semibold text-Black min-w-80 border border-Black/20' />
                      </div>
                  </div>
              </div>
              <div className="services-list-grid-section grid grid-cols-12 gap-5">
                {filteredServices.map((item , index) => {
                  return (
                    <div className="single-service-section bg-white rounded-3xl col-span-4" key={index}>
                      <div className="service-image-sec">
                          <img src={item.img} alt="" />
                      </div>
                      <div className="service-section-content">
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                          {item.sub == true ? 
                            <div className="sub-services-list-section bg-[#F3F3F3] p-4 rounded-xl my-5">
                              <ul>
                                {item.subServices.slice(0, 3).map((subService , subIndex) => {
                                  return (
                                    <li key={subIndex}>{subService.singleSub}</li>
                                  )
                                })}
                                {item.subServices.length > 3 && (
                                  <li className="font-semibold">
                                    +{item.subServices.length - 3} more
                                  </li>
                                )}
                              </ul>
                            </div> : null
                          }
                          <div className="know-more-linear-btn">
                              <button type="button" onClick={() => navigate(`/services/${item.id}`)} className='flex items-center gap-x-4 text-secondary hover:text-primary'>Know More <i class="bi bi-arrow-right"></i></button>
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