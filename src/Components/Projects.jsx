import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import Project01 from '../images/pro.png'

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
        <img src={Project01} alt="" />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio fugiat, libero aliquid, amet deserunt tempora qui illum magnam iste possimus, hic fuga similique odit reiciendis tenetur ipsa dolorem perferendis!
      </SwiperSlide>
      <SwiperSlide>
      <img src={Project01} alt="" />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio fugiat, libero aliquid, amet deserunt tempora qui illum magnam iste possimus, hic fuga similique odit reiciendis tenetur ipsa dolorem perferendis!
      </SwiperSlide>
    </Swiper>
  )
}

export default Projects
