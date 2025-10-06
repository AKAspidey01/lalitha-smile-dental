import React from 'react';
import './ServicesList.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import ServicesImage from '../../assets/images/services-images/one.png'


const SingleServicePage = () => {

    const navigate = useNavigate()

  return (
    <div className='singleservice-main-section'>
        <div className="inner-main-single-service-sec">
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
        <section className="single-service-section-1">
            <div className="inner-single-services-section-1">
                <div className="container">
                    <div className="top-backbtn-section mb-10">
                        <button type="button" onClick={() => navigate(-1)} className='flex items-center gap-x-4 bg-white text-lg font-medium border rounded-xl border-[#C9C9C9] px-8 py-3'>
                            <i class="bi bi-arrow-left"></i>
                            Back
                        </button>
                    </div>
                    <div className="single-service-content-section rounded-4xl overflow-hidden bg-white">
                        <div className="top-image-section-single-service">
                            <img src={ServicesImage} alt="" />
                        </div>
                        <div className="single-service-content-sec-inner">
                            <div className="top-para-head-sec-single-ser">
                                <h2>Preventative Dentistry</h2>
                                <p>Preventative dental care is the foundation of lifelong oral health. By focusing on early detection, professional cleanings, and protective treatments, we help you avoid serious dental issues and maintain a confident, healthy smile. Our goal is simple: keep your teeth and gums strong so you can enjoy the benefits of good oral health for years to come.</p>
                                
                                <div className="highlight-points-sec mt-8">
                                    <h4>Why Preventative Care Matters</h4>
                                    <ul>
                                        <li>Prevents cavities, gum disease, and enamel wear before they become severe.</li>
                                        <li>Saves time, money, and discomfort by reducing the need for major procedures.</li>
                                        <li>Supports overall well-being—oral health is closely linked to heart and systemic health.</li>
                                        <li>Promotes confidence with a naturally clean, bright smile.</li>
                                    </ul>
                                </div>

                                <div className="sub-services-section my-8">
                                    <h3 className='mb-3'>Our Preventative Services</h3>
                                    <div className="all-sub-service-collab">
                                        <div className="single-sub-service-sec">
                                            <h5>1. Teeth Cleanings</h5>
                                            <p>Regular cleanings remove plaque and tartar buildup that brushing and flossing alone cannot eliminate. This helps prevent cavities, gum disease, and bad breath.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="highlight-points-sec">
                                    <h4>Why Preventative Care Matters</h4>
                                    <ul>
                                        <li>Prevents cavities, gum disease, and enamel wear before they become severe.</li>
                                        <li>Saves time, money, and discomfort by reducing the need for major procedures.</li>
                                        <li>Supports overall well-being—oral health is closely linked to heart and systemic health.</li>
                                        <li>Promotes confidence with a naturally clean, bright smile.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </div>
  )
}

export default SingleServicePage