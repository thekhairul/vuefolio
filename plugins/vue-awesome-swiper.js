// import style (>= Swiper 6.x)
// Swiper 6.x
import {
  Autoplay,
  Mousewheel,
  Navigation,
  Swiper as SwiperClass
} from 'swiper/core';
import 'swiper/swiper.min.css';
import Vue from 'vue';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';

// Swiper modules
SwiperClass.use([Navigation, Mousewheel, Autoplay]);

// Global use
Vue.use(getAwesomeSwiper(SwiperClass));
