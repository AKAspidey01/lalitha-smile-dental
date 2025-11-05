import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react';
import { Autoplay , Navigation } from 'swiper/modules';

import 'swiper/css';
import homePageData from './HomePageData';

const ServicesCarousel = () => {
  return (
    <>
        <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            speed={600}
            loop={true}
            initialSlide={2}
            spaceBetween={20}
            preventClicks={true}
            navigation={{
                clickable: true,
                nextEl: '.services-button-next',
                prevEl: '.services-button-prev',
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            breakpoints={{
                2000: {
                    slidesPerView: 3,
                    
                },
                1700 : {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 3
                },
                992: {
                    slidesPerView: 3
                },
                674: {
                    slidesPerView: 1
                },
                375: {
                    slidesPerView: 1,
                },
                75: {
                    slidesPerView: 1
                }
            }}
            modules={[ Autoplay , Navigation]}
        >
            {homePageData.ServicesData.map((item , index) => {
                return (    
                    <SwiperSlide key={index}>        
                        <div className="single-service-section bg-white rounded-3xl">
                            <div className="service-image-sec">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="service-section-content">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <div className="know-more-linear-btn">
                                    <button type="button" onClick={() => navigate(`/services/${item.id}`, { state: { item } })} className='flex items-center gap-x-4 text-secondary hover:text-primary'>Know More <i class="bi bi-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}                            
        </Swiper>
    </>
  )
}

export default ServicesCarousel