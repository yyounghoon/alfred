'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './index.css';

function Banner() {
  return (
    <div className="container">
      <Swiper
        slidesPerView={1}
        loop
        centeredSlides
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide key={1}>
          <img src="/images/mong4.jpeg" alt="banner1" />
        </SwiperSlide>
        <SwiperSlide key={2}>
          <img src="/images/mong5.jpeg" alt="banner1" />
        </SwiperSlide>
        <SwiperSlide key={3}>
          <img src="/images/mong6.jpeg" alt="banner1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Banner;
