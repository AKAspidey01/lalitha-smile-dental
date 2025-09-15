import React from 'react';
import './AboutUs.scss';
import '../Home/Home.scss';
import AboutImg from '../../assets/images/about-us-image.png';
import { NavLink } from 'react-router-dom';


const AboutUs = () => {
  return (
    <div className="about-main-section">
        <section className="main-breadcrumb-similar">
            <div className="inner-breadcrumb-similar">
                <div className="container">
                    <h2>ABOUT US</h2>
                    <ul className='flex items-center justify-center gap-x-4'>
                        <li><NavLink to={'/'}>Lalitha Smile Dental</NavLink></li>
                        <li><i class="bi bi-chevron-right text-white"></i></li>
                        <li>Services</li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="home-section-2">
            <div className="inner-home-section-2">
                <div className="container">
                    <div className="home-section-2-grid grid grid-cols-12 items-center">
                        <div className="home-sec-2-left-col similar-home-sec-2-cols col-span-6">
                            <img src={AboutImg} className='rounded-[36px]' alt="" />
                        </div>
                        <div className="home-sec-2-right-col similar-home-sec-2-cols col-span-6">
                            <div className="inner-about-content">
                                    <div className="top-block-tag w-fit">
                                    <p className='text-secondary bg-secondary/20 font-semibold'>About Us</p>
                                </div>
                                <div className="block-content-section">
                                    <h2>The Story Behind <br /> <span>Every Smile</span></h2>
                                    <div className="block-cotent-para-sec">
                                        <p>Dr. Achyuta exudes an enthusiasm for enhancing smiles, from cosmetic to oral health needs, she believes in the vital role dentistry plays in one’s life. "I passionately strive to provide the best care for all of my patients because I understand the great significance of taking preventative measures to achieve optimal results." Dr. Achyuta enjoys creating happy, healthy, and confident smiles!</p>
                                        <p>She received her BDS degree in India and her Doctor of Dental Surgery degree from Dental Board of California in 2004. Dr. Achyuta and her talented team of experts have a compassionate and meticulous standard of care, focusing on creating a comfortable and enjoyable environment. To that end, their goal is to foster a long-term, conscientious, and supportive relationship with patients.</p>
                                    </div>
                                    <div className="signature-knowmore-section flex items-end justify-between flex-wrap gap-y-6">
                                        <div className="left-signature">
                                            <p>Achyuta</p>
                                            <p className='dr-name text-Black'>DR. ACHYUTA</p>
                                            <p className="role-sec">FOUNDER LALITHA SMILE DENTAL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutUs