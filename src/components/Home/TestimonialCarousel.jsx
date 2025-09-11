import React from 'react';
import Star from '../../assets/images/testimonial-images/star-icon.svg';
import Reviewer from '../../assets/images/testimonial-images/review-1.svg'
import homePageData from './HomePageData';
import {Swiper , SwiperSlide} from 'swiper/react';
import { Autoplay , Navigation } from 'swiper/modules';

import 'swiper/css';

const TestimonialCarousel = () => {
  return (
    <div className='main-testouter relative'>
        <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            speed={600}
            loop={true}
            spaceBetween={20}
            preventClicks={true}
            navigation={{
                clickable: true,
                nextEl: '.testimonial-button-next',
                prevEl: '.testimonial-button-prev',
            }}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false
            }}
            modules={[ Autoplay , Navigation]}
        >
            {homePageData.TestimonialData.map((item , index) => {
                return (
                    <SwiperSlide>
                        <div className="single-testimonial-card-sec" key={index}>
                            <div className="top-star-sec flex items-center gap-x-3">
                                {item.stars.map((stars , starIndex) => {
                                    return (
                                        <div className="single-star-sec w-6 h-6" key={starIndex}>
                                            <img src={Star} alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="testimonial-content-sec">
                                <p>{item.content}</p>
                            </div>
                            <div className="bottom-reviewer-buttons-sec">
                                <div className="left-reviewer-sec flex items-center gap-x-5">
                                    <div className="image-reviewer w-13 h-13 rounded-full overflow-hidden">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="reviewer-details-sec">
                                        <h4>{item.name}</h4>
                                        <p>{item.treatment}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}   
        </Swiper>
        
        <div className="slider-buttons absolute bottom-0 right-0 z-10">
            <button type="button" className='prev-slider testimonial-button-prev bg-gray-200'><i class="bi bi-chevron-left"></i></button>
            <button type="button" className='next-slider testimonial-button-next bg-gray-200'><i class="bi bi-chevron-right"></i></button>
        </div>     
    </div>
  )
}

export default TestimonialCarousel