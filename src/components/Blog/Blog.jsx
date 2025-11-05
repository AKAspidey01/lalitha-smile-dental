import React from 'react';
import './Blog.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import blogscontent from './BlogContent';
import TimeIcon from '../../assets/images/time-blog-icon.svg';


const Blog = () => {

    const navigate = useNavigate()
    
  return (
    <div className="main-blog-section">
        <div className="inner-blog-section">
            <section className="main-breadcrumb-similar">
                <div className="inner-breadcrumb-similar">
                    <div className="container">
                        <h2>BLOG</h2>
                        <ul className='flex items-center justify-center gap-x-4'>
                            <li><NavLink to={'/'}>Lalitha Smile Dental</NavLink></li>
                            <li><i class="bi bi-chevron-right text-white"></i></li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="blog-section-1">
                <div className="inner-blog-section-1">
                    <div className="container">
                        <div className="grid grid-cols-12 gap-5 blogs-cards-sec">
                            {blogscontent.Blogs.map((item , index) => {
                                return (
                                    <div className="single-service-section col-span-4 bg-white rounded-3xl" key={index}>
                                        <div className="top-time-stamp-section flex items-center gap-x-3.5 bg-primary/10 rounded-lg py-2 px-4 mb-4 w-fit">
                                            <div className="left-time-icon w-5 h-5">
                                                <img src={TimeIcon} alt="" />
                                            </div>
                                            <p className='text-[#849954] font-semibold font-plusjakarta'>{item.date}</p>
                                        </div>
                                        <div className="service-section-content">
                                            <h4 className='mb-2'>{item.title}</h4>
                                            <p>{item.content}</p>
                                            <div className="know-more-linear-btn">
                                                <button type="button" onClick={() => navigate(`/blog/${item.id}`)} className='flex items-center gap-x-4 text-secondary hover:text-primary'>Read More <i class="bi bi-arrow-right"></i></button>
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

export default Blog