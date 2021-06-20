// import style (>= Swiper 6.x)
// Swiper 6.x
import {
    Autoplay,
    Mousewheel,
    Pagination,
    Swiper as SwiperClass
} from 'swiper/core';
import 'swiper/swiper-bundle.css';
import Vue from 'vue';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';

// Swiper modules
SwiperClass.use([Pagination, Mousewheel, Autoplay]);

// Global use
Vue.use(getAwesomeSwiper(SwiperClass));
