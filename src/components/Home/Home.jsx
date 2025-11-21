import React, { useEffect, useRef, useState } from 'react';
import './Home.scss';
import AboutImg from '../../assets/images/about-us-image-2.png';
import ServicesCarousel from './ServicesCarousel';
import TestimonialImg from '../../assets/images/testimonial-block.png'
import TestimonialCarousel from './TestimonialCarousel';
import homePageData from './HomePageData';
import { contactFormValidation } from '../../utils/Validation';
import { Formik , Form , Field } from 'formik';
import Select from 'react-select';
import CallIcon from '../../assets/images/sec-7-call-icon.svg';
import VisitIcon from '../../assets/images/visit-us-icon.svg';
import TimingIcon from '../../assets/images/clinic-timings-icon.svg';
import PricingCarousel from './PricingCarousel';
import GalleryCarousel from './GalleryCarousel';
import { useNavigate } from 'react-router-dom';





const Home = () => {

    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);
    const appointmentSectionRef = useRef(null);
    const navigate = useNavigate()

    const handleScrollToSection = () => {
        appointmentSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        homePageData.FinancingList.forEach((_, index) => {
        if (openIndex === index && contentRefs.current[index]) {
            contentRefs.current[index].style.maxHeight = `${contentRefs.current[index].scrollHeight}px`;
        } else if (contentRefs.current[index]) {
            contentRefs.current[index].style.maxHeight = '0px';
        }
        });
    }, [openIndex]);

    const timeOptions = [
        { value: '7AM-8AM', label: '7AM - 8AM' },
        { value: '8AM-9AM', label: '8AM - 9AM' },
        { value: '9AM-10AM', label: '9AM - 10AM' },
        { value: '10AM-11AM', label: '10AM - 11AM' },
        { value: '11AM-12PM', label: '11AM - 12PM' },
        { value: '12PM-1PM', label: '12PM - 1PM' },
        { value: '1PM-2PM', label: '1PM - 2PM' },
    ];
    const contactFormValues = {
        email: "",
        number: "",
        userName: "",
        date: "",
        time: "",
        seats: "",
    }

    const handleContactForm = (data) => {
        console.log( "data" , data)
    }

  return (
    <div className='home-main-section'>
        <section className="home-section-1">
            <div className="inner-home-section-1">
                <div className="container">
                    <div className="inner-home-sec-1-content">
                        <h1>Creating Beautiful Smiles <br /> with Personal Touch</h1>
                        <p>Our dedicated team of professionals is committed to delivering <br /> personalized, high-quality dental care in a comfortable and friendly environment.</p>
                        <div className="banner-buttons-section flex items-center gap-x-7 flex-wrap gap-y-6">
                            <button type="button" className='appointment-btn bg-primary' onClick={handleScrollToSection}>Get Appointment</button>
                            <button type="button" className='number-btn bg-white flex items-center gap-x-3' onClick={() => window.location.href = 'tel:+12125551234'}><i class="bi bi-telephone-fill"></i> +1 (212) 555-1234</button>
                        </div>
                    </div>
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
                                        {/* <p>She received her BDS degree in India and her Doctor of Dental Surgery degree from Dental Board of California in 2004. Dr. Achyuta and her talented team of experts have a compassionate and meticulous standard of care, focusing on creating a comfortable and enjoyable environment. To that end, their goal is to foster a long-term, conscientious, and supportive relationship with patients.</p> */}
                                    </div>
                                    <div className="signature-knowmore-section flex items-end justify-between flex-wrap gap-y-6">
                                        <div className="left-signature">
                                            <p>Achyuta</p>
                                            <p className='dr-name text-Black'>DR. ACHYUTA</p>
                                            <p className="role-sec">FOUNDER LALITHA SMILE DENTAL</p>
                                        </div>
                                        <div className="right-know-more-sec">
                                            <button onClick={() => navigate('/about')} type="button" className='flex items-center gap-x-4 bg-primary'>Read More <i class="bi bi-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="home-section-3">
            <div className="inner-home-section-3">
                <div className="container">
                    <div className="block-content-section">
                        <div className="heading-slider-buttons-sec flex items-center justify-between">
                            <h2>Explore Our Services <span> Quality <br /> Care</span> for All Ages</h2>
                            <div className="slider-buttons">
                                <button type="button" className='prev-slider services-button-prev'><i class="bi bi-chevron-left"></i></button>
                                <button type="button" className='next-slider services-button-next'><i class="bi bi-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="home-section-3-grid">
                       <ServicesCarousel/>
                    </div>
                </div>
            </div>
        </section>
         <section className="home-section-4">
            <div className="inner-home-section-4">
                <div className="container">
                    <div className="block-content-section">
                        <div className="heading-slider-buttons-sec flex items-center justify-between">
                            <h2>Smiles That Speak for <span> Themselves</span></h2>
                        </div>
                    </div>
                    <div className="home-section-4-grid grid grid-cols-12 items-center">
                        <div className="similar-home-sec-4-cols col-span-6 left-home-sec-4">
                            <img src={TestimonialImg} className='rounded-[36px]' alt="" />
                        </div>
                        <div className="similar-home-sec-4-cols col-span-6 right-home-sec-4">
                            <TestimonialCarousel/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="home-section-5">
            <div className="inner-home-section-5">
                <div className="container">
                    <div className="block-content-section">
                        <h2>Dentistry, <span>Redefined</span> for You</h2>
                    </div>
                    <div className="home-section-5-grid grid grid-cols-12 gap-5">
                        {homePageData.RedefinedDent.map((item , index) => {
                            return (
                                <div className="single-service-section col-span-3 bg-white rounded-3xl" key={index}>
                                    <div className="service-image-sec">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="service-section-content">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p> 
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
        <section className="home-section-6">
            <div className="inner-home-section-6">
                <div className="container">
                    <div className="block-content-section">
                        <h2>Simple Financing for  <span>Your Smile</span></h2>
                    </div>
                    <div className="home-section-6-accordian">
                        {homePageData.FinancingList.map((finance, index) => (
                            <div className="about-accordion" key={index}>
                                <div className="about-accordion-header flex justify-between items-center" onClick={() => toggleAccordion(index)}>
                                    <h2><span className='opacity-45'></span>{finance.title}</h2>
                                    <div className={`right-button h-6 w-6 relative  ${openIndex === index ? 'activer-plus' : ''}`}>
                                        <div className={`plus-icon-1 w-full h-[2px] bg-Black absolute top-1/2 left-1/2 `}></div>
                                        <div className={`plus-icon-2 w-[2px] h-full bg-Black absolute left-1/2 top-1/2 ${openIndex === index ? 'activer-plus' : ''}`}></div>
                                    </div>
                                </div>
                                <div ref={(el) => (contentRefs.current[index] = el)} className="about-accordion-content" style={{ maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px' }}>
                                    <p>{finance.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        <section className="home-section-7" ref={appointmentSectionRef}>
            <div className="inner-home-section-7">
                <div className="container">
                    <div className="block-content-section">
                        <h2>We’d <span>Love</span> to Hear From You</h2>
                    </div>
                    <div className="home-section-7-grid grid grid-cols-12 gap-y-8  bg-white rounded-[20px]">
                        <div className="map-contact-section col-span-6 similar-home-sec-7-cols rounded-l-[20px]">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.204548001121!2d-122.66597759999999!3d38.274750999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085b4e4b5955555%3A0xb36d58bbd2a82cd!2s1372%20N%20McDowell%20Blvd%20B1%2C%20Petaluma%2C%20CA%2094954%2C%20USA!5e0!3m2!1sen!2sin!4v1757563105947!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="contact-form-section col-span-6 p-7 similar-home-sec-7-cols">
                            <Formik
                                validationSchema={contactFormValidation}
                                initialValues={contactFormValues}
                                onSubmit={(values) => handleContactForm(values)}
                            >
                                {({  errors, touched , handleSubmit , values , setFieldValue}) => (
                                <Form>
                                    <div className="grid grid-cols-12 gap-6 contact-form-inputs-grid">
                                        <div className="form-inputsec relative similar-inputs-2-cols col-span-6">
                                            <Field type="text" name="userName" placeholder='Full Name'
                                                className={`outline-none border focus:border-primary duration-300  ${errors.userName && touched.userName ? 'border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500 text-red-500' : 'text-Black border-transparent placeholder:text-Black'}`} 
                                            />                                
                                        </div>
                                        <div className="form-inputsec relative similar-inputs-2-cols col-span-6">
                                            <Field type="number" name="number" placeholder='Mobile Number'
                                                className={`outline-none border focus:border-primary duration-300  ${errors.number && touched.number ? 'border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500 text-red-500' : 'text-Black border-transparent placeholder:text-Black'}`} 
                                            />                                
                                        </div>
                                        <div className="form-inputsec relative col-span-12">
                                            <Field type="email" name="email" placeholder='Enter Email Address*'
                                                className={`outline-none border focus:border-primary duration-300  ${errors.email && touched.email ? 'border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500 text-red-500' : 'text-Black border-transparent placeholder:text-Black'}`} 
                                            />                                
                                        </div>
                                        <div className="form-inputsec relative similar-inputs-4-cols col-span-12">
                                            <Select options={timeOptions} 
                                                placeholder='Time'
                                                styles={{
                                                        control: (baseStyles, state) => ({
                                                            ...baseStyles,
                                                            borderRadius: 10,
                                                            paddingLeft: 10,
                                                            paddingTop: 6,
                                                            paddingBottom: 6,
                                                            borderColor: errors.time ? '#FF4E4E' : 'transparent',
                                                            background: '#F6F6F6',
                                                            fontSize: 16,
                                                            color: "#101010",
                                                            fontWeight: 500,
                                                            width: '100%',
                                                            outline: 'none'
                                                        //   borderColor: state.isFocused ? 'grey' : 'red',
                                                        }),
                                                    }}
                                                    value={timeOptions.find(option => option.value === values.time)} 
                                                    onChange={(option) => {setFieldValue('time', option ? option.value : '')}}
                                            />                              
                                        </div>
                                        <div className="form-inputsec relative col-span-12">
                                            <textarea type="number" name="seats" placeholder='Special Requests'
                                                className={`outline-none focus:border-secondary duration-300 `} 
                                            />                                
                                        </div>

                                        <div className="bottom-form-submitter  overflow-hidden relative group col-span-4">
                                            <button type='submit' onClick={handleSubmit} className='bg-primary'>
                                                <i class="bi bi-send-fill"></i>
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                    <div className="address-number-timings-grid grid grid-cols-12 gap-5">
                        <div className="col-span-4 similar-sec-7-timings-cols">
                           <div className="flex flex-col justify-between h-full">
                                <div className="top-icon-label-sec flex items-center gap-x-4">
                                    <div className="left-sec-7-icon"><img src={CallIcon} alt="" /></div>
                                    <h4>Contact Us</h4>
                                </div>
                                <div className="contact-links flex flex-col">
                                    <a href='tel:+1212555-1234' className='number-anchor mb-1'>+1 (707) 778-9993</a>
                                    <a href='mailto:info@lalithadental.com' className='number-anchor'>info@lalithadental.com</a>
                                </div>
                           </div>
                        </div>
                        <div className="col-span-4 similar-sec-7-timings-cols">
                           <div className="flex flex-col justify-between h-full">
                                <div className="top-icon-label-sec flex items-center gap-x-4">
                                    <div className="left-sec-7-icon"><img src={VisitIcon} alt="" /></div>
                                    <h4>Visit Us</h4>
                                </div>
                                <p>1372 N McDowell Blvd B1, Petaluma, CA 94954, USA</p>
                           </div>
                        </div>
                        <div className="col-span-4 similar-sec-7-timings-cols">
                            <div className="flex flex-col justify-between h-full">
                                <div className="top-icon-label-sec flex items-center gap-x-4">
                                    <div className="left-sec-7-icon"><img src={TimingIcon} alt="" /></div>
                                    <h4>Office Hours</h4>
                                </div>
                                <div>
                                    <p>Monday - Friday : </p>
                                    <div className="timings-text mt-1.5">
                                        <h5>08:30AM to 12:30PM</h5>
                                        <h5>01:30AM to 05:30PM</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="home-section-6">
            <div className="inner-home-section-6">
                <div className="container">
                    <div className="block-content-section">
                        <h2>Frequently Asked <span> Questions</span></h2>
                    </div>
                    <div className="home-section-6-accordian">
                        {homePageData.Faqs.map((finance, index) => (
                            <div className="about-accordion" key={index}>
                                <div className="about-accordion-header flex justify-between items-center" onClick={() => toggleAccordion(index)}>
                                    <h2><span className='opacity-45'></span>{finance.title}</h2>
                                    <div className={`right-button h-6 w-6 relative  ${openIndex === index ? 'activer-plus' : ''}`}>
                                        <div className={`plus-icon-1 w-full h-[2px] bg-Black absolute top-1/2 left-1/2 `}></div>
                                        <div className={`plus-icon-2 w-[2px] h-full bg-Black absolute left-1/2 top-1/2 ${openIndex === index ? 'activer-plus' : ''}`}></div>
                                    </div>
                                </div>
                                <div ref={(el) => (contentRefs.current[index] = el)} className="about-accordion-content" style={{ maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px' }}>
                                    <p>{finance.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        <section className="home-section-8">
            <div className="inner-home-section-8">
                <div className="container">
                    <div className="block-content-section">
                        <div className="heading-slider-buttons-sec flex items-center justify-between">
                            <h2>Exclusive Patient  <span> Savings</span></h2>
                            <div className="slider-buttons">
                                <button type="button" className='prev-slider pricing-button-prev bg-white'><i class="bi bi-chevron-left"></i></button>
                                <button type="button" className='next-slider pricing-button-next bg-white'><i class="bi bi-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="home-section-8-grid">
                        <PricingCarousel/>
                    </div>
                </div>
            </div>
        </section>
        <section className="home-section-9">
            <div className="inner-home-section-9">
                <div className="container">
                     <div className="block-content-section">
                        <div className="heading-slider-buttons-sec flex items-center justify-between">
                            <div className="para-with-head">
                                <h2>Where Comfort  <span> Meets Care</span></h2>
                                <p>Explore our welcoming spaces designed to keep you relaxed and comfortable during every visit.</p>
                            </div>
                            <div className="slider-buttons">
                                <button type="button" className='prev-slider gallery-button-prev bg-gray-200'><i class="bi bi-chevron-left"></i></button>
                                <button type="button" className='next-slider gallery-button-next bg-gray-200'><i class="bi bi-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="home-section-9-gallery">
                        <GalleryCarousel/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home