import c1 from "../assets/image/c1.jpg";
import c2 from "../assets/image/c8.jpg";
import c3 from "../assets/image/c3.jpg";
import c4 from "../assets/image/c4.jpg";
import c5 from "../assets/image/c5.jpg";
import c6 from "../assets/image/c6.jpg";
import c7 from "../assets/image/c7.jpg";
import c8 from "../assets/image/c8.jpg";
import c9 from "../assets/image/c9.jpg";
import c10 from "../assets/image/c10.jpg";
import c11 from "../assets/image/c11.jpg";
import c12 from "../assets/image/c12.jpg";
import c13 from "../assets/image/c13.jpg";
import c14 from "../assets/image/c14.jpg";
// slider
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Autoplay } from "swiper/modules";
import "../assets/css/Testimonial.css";

function Testimonal() {
  return (
    <div>
      {/* testimonal */}
      <div className="container mt-5" id="testimonal">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading text-center">
              <h6 className="mb-4">
                <span id="symbol">⦿</span> Featured Clientele
              </h6>
              <h1 className="w-50 m-auto">Trusted by industry leaders</h1>
            </div>
          </div>
          <div className="col-lg-12">
      <Swiper
        slidesPerView={6} // Default view
        spaceBetween={3}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true} // Ensures continuous scrolling
        speed={1000}
        modules={[Autoplay]}
        className="testimonialSwiper"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 3,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 25,
          },
        }}
      >
        {[c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index}`} width="200" height="100" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </div>
      </div>
      {/* testimonal */}
    </div>
  );
}

export default Testimonal;
