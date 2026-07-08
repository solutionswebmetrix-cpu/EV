import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import banner1 from '../assets/banner 1.png';
import banner2 from '../assets/banner 2.png';
import banner3 from '../assets/banner 3.png';
import banner4 from '../assets/banner 4.png';
import bannerMain from '../assets/Banner.png';
import './Hero.css';

const slides = [bannerMain, banner1, banner2, banner3, banner4];

const Hero = () => {
  return (
    <section className="hero-slider-section">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={`${slide}-${index}`}>
            <div className="hero-slide">
              <img
                src={slide}
                alt={`AeroVolt banner ${index + 1}`}
                className="hero-slide-image"
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
