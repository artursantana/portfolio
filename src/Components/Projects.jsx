import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import Project01 from '../images/githubfinder.png'
import Project02 from '../images/cost.png'

import tolls01 from '../images/reacttype.png'
import tolls02 from '../images/react.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Projects = () => {
  return (

       <Swiper id='wrap' className='wrap'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
      <SwiperSlide>
        <a href="https://github.com/artursantana/Search-GitHub/tree/main/githubFinder" target='blank'><img className='imgProject' src={Project01} alt="" /></a>
        <div>This project is a search engine on GITHUB, made with the tools below</div>
        <img className='imgTools' src={tolls01} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <a href="https://github.com/artursantana/Costs" target='blank'><img className='imgProject' src={Project02} alt="" /></a>
      <div>This project is a search engine on GITHUB, made with the tools below</div>
        <img className='imgTools' src={tolls02} alt="" />
      </SwiperSlide>
    </Swiper>
  )
}

export default Projects
