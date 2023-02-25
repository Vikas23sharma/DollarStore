import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Wiper() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://bestfurniture.in/wp-content/uploads/9-300x300.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://shop.kindermann.de/erp/KCO/avs/3/3005/3005000881/04_Bilder/3005000881_300x300px_1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.shopify.com/s/files/1/0036/4806/1509/products/800aed066dd3ef62957134c1558cafae9af99aa3_square2959443_1_1000x.jpg?v=1676642931" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bestfurniture.in/wp-content/uploads/9-300x300.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/I/41VhvMPS0qL._SX300_SY300_QL70_ML2_.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/I/61usqj4MYmL.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://priceinall.com/wp-content/uploads/2022/01/Samsung-Galaxy-S22-ultra-Burgundy-color-300x300.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://johnsonbros.co.za/wp-content/uploads/2020/03/kitchen-300x300.png?resolution=732,2.625" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.shopify.com/s/files/1/0074/1454/6468/products/distress-dome-wall-art_300x300.jpg?v=1644415353" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
