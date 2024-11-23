import React from "react";
import bannerImg1 from "../../../assets/cycle/1080x720px/1.png";
import bannerImg2 from "../../../assets/cycle/1080x720px/2.png";
import bannerImg3 from "../../../assets/cycle/1080x720px/3.png";
import bannerImg4 from "../../../assets/cycle/1080x720px/4.png";
import bannerImg5 from "../../../assets/cycle/1080x720px/5.png";
import bannerImg6 from "../../../assets/cycle/1080x720px/6.png";
import bannerImg7 from "../../../assets/cycle/1080x720px/7.png";
import bannerImg8 from "../../../assets/cycle/1080x720px/8.png";
import bannerImg9 from "../../../assets/cycle/1080x720px/9.png";
import bannerImg10 from "../../../assets/cycle/1080x720px/10.png";
import bannerImg11 from "../../../assets/cycle/1080x720px/11.png";
import bannerImg12 from "../../../assets/cycle/1080x720px/12.png";
import bannerImg13 from "../../../assets/cycle/1080x720px/13.png";
import bannerImg14 from "../../../assets/cycle/1080x720px/14.png";
import bannerImg15 from "../../../assets/cycle/1080x720px/15.png";
import bannerImg16 from "../../../assets/cycle/1080x720px/16.png";
import bannerImg17 from "../../../assets/cycle/1080x720px/17.png";
import bannerImg18 from "../../../assets/cycle/1080x720px/18.png";
import bannerImg19 from "../../../assets/cycle/1080x720px/19.png";
import bannerImg20 from "../../../assets/cycle/1080x720px/20.png";
import bannerImg21 from "../../../assets/cycle/1080x720px/21.png";
import bannerImg22 from "../../../assets/cycle/1080x720px/22.png";
import bannerImg23 from "../../../assets/cycle/1080x720px/23.png";
import bannerImg24 from "../../../assets/cycle/1080x720px/24.png";
import bannerImg25 from "../../../assets/cycle/1080x720px/25.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";

const Banner = () => {
  return (
    <div>
      <div className="md:flex justify-center items-center my-8 gap-3">
        <div className="md:w-1/2 grid grid-cols-2 gap-2">
          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={bannerImg1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bannerImg2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bannerImg3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bannerImg4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bannerImg5} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={bannerImg6} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bannerImg7} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bannerImg8} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bannerImg9} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bannerImg10} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={bannerImg11} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bannerImg12} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bannerImg13} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bannerImg14} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bannerImg15} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={bannerImg16} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bannerImg17} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bannerImg18} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bannerImg19} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bannerImg20} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="md:w-1/2 p-1">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={bannerImg21} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bannerImg22} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bannerImg23} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bannerImg24} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bannerImg25} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
