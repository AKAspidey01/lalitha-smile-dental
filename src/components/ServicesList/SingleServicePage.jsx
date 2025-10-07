import React from 'react';
import './ServicesList.scss';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import ServicesImage from '../../assets/images/services-images/one.png'


const SingleServicePage = () => {

    const location = useLocation()
    const navigate = useNavigate();
    const { item } = location.state || {}

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
                            <img src={item?.singleServiceData?.serviceImg} alt="" />
                        </div>
                        <div className="single-service-content-sec-inner">
                            <div className="top-para-head-sec-single-ser">
                                <h2>{item?.title}</h2>
                                <p>{item?.singleServiceData?.para}</p>
                                
                                <div className="highlight-points-sec my-8">
                                    <h4>Why {item?.title} Matters</h4>
                                    <ul>
                                        {item?.singleServiceData?.whyServicePoints?.map((singleWhy , whyIndex) => {
                                            return (
                                                <li key={whyIndex}>{singleWhy?.point}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                {item?.sub == true ? 
                                    <div className="sub-services-section">
                                        <h3 className='mb-3'>Our {item?.title} Services</h3>
                                        <div className="all-sub-service-collab flex flex-col gap-y-5">
                                            {item?.singleServiceData?.subServicesContent?.map((subItem , subIndex) => {
                                                return (
                                                    <div className="single-sub-service-sec" key={subIndex}>
                                                        <h5>{subItem?.subserviceHead}</h5>
                                                        <p>{subItem?.subServicePara}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div> : 
                                null}

                                <div className="highlight-points-sec mt-8">
                                    <h4>Benefits of Choosing Our {item?.title}</h4>
                                    <ul>
                                        {item?.singleServiceData?.benefitsofChoosing?.map((benefit , benIndex) => {
                                            return (
                                                <li key={benIndex}>{benefit?.points}</li>
                                            )
                                        })}
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