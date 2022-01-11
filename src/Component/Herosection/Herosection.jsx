import React from "react";
import { Swiper, SwiperSlide, slideNext } from "swiper/react";
import "swiper/css";

import Card from "../Card/Card.jsx";
import Tooltip from "../Tooltip/Tooltip.jsx";
import "./Herosection.css";

const Herosection = ({ name }) => {
  return (
    <div className="herosection__container section__padding">
      <div className="herosection__featured-title">
        <Tooltip name={name} />
        <Swiper
          autoplay={true}
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Herosection;
