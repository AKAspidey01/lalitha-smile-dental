import React from 'react'
import homePageData from './HomePageData';
import {Swiper , SwiperSlide} from 'swiper/react';
import { Autoplay , Navigation } from 'swiper/modules';
import './Home.scss'

import 'swiper/css';

const PricingCarousel = () => {
  return (
    // <>
    //     <Swiper
    //         grabCursor={true}
    //         centeredSlides={true}
    //         slidesPerView={3}
    //         speed={600}
    //         loop={true}
    //         spaceBetween={30}
    //         preventClicks={true}
    //         navigation={{
    //             clickable: true,
    //             nextEl: '.pricing-button-next',
    //             prevEl: '.pricing-button-prev',
    //         }}
    //         autoplay={{
    //             delay: 4500,
    //             disableOnInteraction: false
    //         }}
    //         breakpoints={{
    //             2000: {
    //                 slidesPerView: 3,
    //             },
    //             1700 : {
    //                 slidesPerView: 3
    //             },
    //             1200: {
    //                 slidesPerView: 3
    //             },
    //             992: {
    //                 slidesPerView: 3
    //             },
    //             674: {
    //                 slidesPerView: 1
    //             },
    //             375: {
    //                 slidesPerView: 1,
    //             },
    //             75: {
    //                 slidesPerView: 1
    //             }
    //         }}
    //         modules={[ Autoplay , Navigation]}
    //     >
    //         {homePageData.PricingList.map((item , index) => {
    //             return (    
    //                 <SwiperSlide key={index}>        
    //                     <div className="single-pricing-card-section bg-white rounded-[24px]">
    //                         <div className="top-pricing-price-sec">
    //                             <h4>{item.tile}</h4>
    //                             <h2>{item.price} <span> /year</span></h2>
    //                             <p>{item.tageLine}</p>
    //                                 <div className="right-know-more-sec">
    //                                 <button type="button" className='flex items-center gap-x-4 bg-primary'>Get Started Today</button>
    //                             </div>
    //                         </div>
    //                         <div className="pricing-listing-section">
    //                             <ul>
    //                                 {item.listOfContent.map((list , listIndex) => {
    //                                     return (
    //                                         <li key={listIndex}>
    //                                             <div className="left-check-mark">
    //                                                 <img src={list.img} alt="" />
    //                                             </div>
    //                                             <p>{list.text}</p>
    //                                         </li>
    //                                     )
    //                                 })}
    //                             </ul>
    //                         </div>
    //                     </div>
    //                 </SwiperSlide>
    //             )
    //         })}                            
    //     </Swiper>    
    // </>

    <>
        <div className="grid grid-cols-12 gap-8 pricing-cols-new-updated-sec">
           {homePageData.PricingList.map((item , index) => {
                return (           
                    <div className="single-pricing-card-section bg-white rounded-[24px] col-span-6" key={index}>
                        <div className="top-pricing-price-sec">
                            <h4>{item.tile}</h4>
                            {/* <h2>{item.price} <span> /year</span></h2> */}
                            <p>{item.tageLine}</p>
                                <div className="right-know-more-sec">
                                <button type="button" className='flex items-center gap-x-4 bg-primary'>Get Started Today</button>
                            </div>
                        </div>
                        <div className="pricing-listing-section">
                            <ul>
                                {item.listOfContent.map((list , listIndex) => {
                                    return (
                                        <li key={listIndex}>
                                            <div className="left-check-mark">
                                                <img src={list.img} alt="" />
                                            </div>
                                            <p>{list.text}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })} 
        </div>
    </>
  )
}

export default PricingCarousel