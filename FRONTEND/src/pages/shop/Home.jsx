import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import assets from "../../assets/assets";

const Home = () => {
  return (
    <div>
      {/* Slider */}
      <div>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <img src={assets.slider_01} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={assets.slider_02} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={assets.slider_03} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
