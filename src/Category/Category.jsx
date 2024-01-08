import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";

import { Pagination } from "swiper/modules";
import Sectiontitle from "../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <Sectiontitle
        subheading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></Sectiontitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h2 className="text-3xl ml-24 text-white uppercase font-bold -mt-16">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className="text-3xl ml-24 text-white uppercase font-bold -mt-16">
            pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="text-3xl ml-24 text-white uppercase font-bold -mt-16">
            soup
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="text-3xl ml-24 text-white uppercase font-bold -mt-16">
            Deserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className="text-3xl ml-24 text-white uppercase font-bold -mt-16">
            Salads
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
