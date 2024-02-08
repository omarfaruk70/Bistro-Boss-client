import Sectiontitle from "../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Testimonials = () => {
  const axios = useAxiosSecure();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get('/reviews')
    .then(result => {
      setReviews(result.data)
    })
  }, [axios]);
  return (
    <div className="my-20">
      <Sectiontitle
        heading="TESTIMONIALS"
        subheading="What Our Clients Say"
      ></Sectiontitle>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="flex justify-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  isRequired
                />
              </p>
              <p className="text-5xl flex justify-center items-center">
                <FaQuoteLeft />
              </p>
              <p>{review.details}</p>
              <h2 className="text-3xl text-orange-400 text-center">
                {review.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
