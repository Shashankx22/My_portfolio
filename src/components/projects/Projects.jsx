import React from 'react';
import { Data } from './Data';
import './projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const Projects = () => {
  return (
    <section className='projects container section' id='projects'>
      <h2 className='section__title'>My Projects</h2>
      <span className='section__subtitle'>My personal journey</span>

      <Swiper
        className='projects__container'
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
          el: '.custom-pagination', // Specify a custom pagination container
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        simulateTouch={true}
        mousewheel={true}
        modules={[Pagination, Mousewheel]}
      >
        {Data.map(({ id, image, title, description,repo }) => {
          return (
            <SwiperSlide className='projects__card' key={id}>
              <img src={image} alt='' className='projects__img' />
              <h3 className='projects__name'>{title}</h3> 
              <a 
    href={repo}
    target="_blank" 
    rel="noopener noreferrer"
    className='projects__repo-link'
  >
    <i className='bx bx-git-repo-forked projects__modal-icon'></i>
  </a>               <p className='projects__description'>              <br/>
               {description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>

      

      {/* Custom Pagination element placed below */}
      <div className='custom-pagination'></div>
    </section>
  );
}

export default Projects;
