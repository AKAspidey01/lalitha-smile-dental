import React from 'react'
import { NavLink } from 'react-router-dom';
import homePageData from '../Home/HomePageData';
import { contactFormValidation } from '../../utils/Validation';
import { Formik , Form , Field } from 'formik';
import CallIcon from '../../assets/images/sec-7-call-icon.svg';
import VisitIcon from '../../assets/images/visit-us-icon.svg';
import TimingIcon from '../../assets/images/clinic-timings-icon.svg';
import Select from 'react-select';
import '../Home/Home.scss';
import './ContactUs.scss'

const ContactUs = () => {


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


  return (
    <div className="main-contact-section">
        <div className="inner-contact-section">
            <section className="main-breadcrumb-similar">
                <div className="inner-breadcrumb-similar">
                    <div className="container">
                        <h2>CONTACT US</h2>
                        <ul className='flex items-center justify-center gap-x-4'>
                            <li><NavLink to={'/'}>Lalitha Smile Dental</NavLink></li>
                            <li><i class="bi bi-chevron-right text-white"></i></li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="home-section-7 contact-page-home-sec-7">
                <div className="inner-home-section-7">
                    <div className="container">
                        <div className="block-content-section">
                            <h2>We’d <span>Love</span> to Hear From You</h2>
                        </div>
                        <div className="home-section-7-grid grid grid-cols-12 gap-y-8  bg-white rounded-[20px] overflow-hidden">
                            <div className="map-contact-section col-span-6 similar-home-sec-7-cols">
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
                                    <a href='tel:+1212555-1234' className='number-anchor'>+1 (212) 555-1234</a>
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
                                        <div className="timings-text">
                                            <h5>08:30AM to 05:00PM</h5>
                                        </div>
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

export default ContactUs