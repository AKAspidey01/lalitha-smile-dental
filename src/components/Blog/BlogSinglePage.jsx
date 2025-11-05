import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './Blog.scss';


const BlogSinglePage = () => {

  const navigate = useNavigate()

  return (
    <div className="bloh-single-main-section">
      <section className="main-breadcrumb-similar">
        <div className="inner-breadcrumb-similar">
            <div className="container">
                <h2>BLOGS</h2>
                <ul className='flex items-center justify-center gap-x-4'>
                    <li><NavLink to={'/'}>Lalitha Smile Dental</NavLink></li>
                    <li><i class="bi bi-chevron-right text-white"></i></li>
                    <li>Blogs</li>
                </ul>
            </div>
        </div>
      </section>
      <section className="blog-single-section-1">
        <div className="inner-blog-single-section-1">
          <div className="container">
            <div className="top-backbtn-section mb-10">
                <button type="button" onClick={() => navigate(-1)} className='flex items-center gap-x-4 bg-[#F6F6F6] text-lg font-medium border rounded-xl border-[#C9C9C9] px-8 py-3'>
                    <i class="bi bi-arrow-left"></i>
                    Back
                </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogSinglePage