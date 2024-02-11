import {Swiper, SwiperSlide} from 'swiper/react';
import { useRef } from 'react';
import {Navigation, Pagination, Autoplay } from "swiper/modules";
import './swiper.css'
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = ({children, settings}) => {
  const prevButtonRef = useRef(null); 
  const nextButtonRef = useRef(null);

  return (
    <>
      <Swiper
        className='swiper-container swiper-container-autoheight'
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        {...settings}
      >
        {children}
      </Swiper>
      <div className="swiper-button-next custom-nextButton" ref={nextButtonRef}></div>
      <div className="swiper-button-prev custom-prevButton" ref={prevButtonRef}></div>
    </>
  );
};

const SwiperSlider = ({slides, settings}) => {
  return (
    <Slider 
      settings={settings}
    >
      {slides.map((slide, index) => (
        <SwiperSlide 
          key={slide.id ? slide.id : index}
        >
          <img 
            src={slide?.image?.url}
            alt={slide?.title}
          />
        </SwiperSlide>
      ))}
    </Slider>
  )
};

export {Slider , SwiperSlider, SwiperSlide}