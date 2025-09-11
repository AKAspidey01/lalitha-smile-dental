import React from 'react'
import homePageData from './HomePageData';

import {Swiper , SwiperSlide} from 'swiper/react';
import { Autoplay , Navigation } from 'swiper/modules';

import 'swiper/css';


const GalleryCarousel = () => {
  return (
    <>
        <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            speed={600}
            loop={true}
            spaceBetween={30}
            preventClicks={true}
            navigation={{
                clickable: true,
                nextEl: '.gallery-button-next',
                prevEl: '.gallery-button-prev',
            }}
            autoplay={{
                delay: 5500,
                disableOnInteraction: false
            }}
            breakpoints={{
                2000: {
                    slidesPerView: 4,
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
            {homePageData.GalleryList.map((item , index) => {
                return (    
                    <SwiperSlide key={index}>        
                        <div className="single-gallery-image-section rounded-[24px]">
                            <img src={item.img} alt="" />
                        </div>
                    </SwiperSlide>
                )
            })}                            
        </Swiper>    
    </>
  )
}

export default GalleryCarousel