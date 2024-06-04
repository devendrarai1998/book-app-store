import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './BannerCard.css';

// import required modules
import { Navigation } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className='banner'>
        <Swiper 
          effect= {'cards'}
          grabCursor={true}
          modules={[Navigation]} 
          className="mySwiper"
        >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerCard;