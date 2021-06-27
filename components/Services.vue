<template>
  <div v-swiper="swiperOption">
    <div class="swiper-wrapper py-2">
      <div
        v-for="(slide, idx) in swiperSlides"
        :key="idx"
        class="swiper-slide opacity-0"
      >
        <div class="p-4 rounded bg-gray-50 shadow-md flex items-center">
          <component :is="slide.icon" class="w-16 h-16"></component>
          <h2 class="text-color-light text-lg ml-4">{{ slide.title }}</h2>
        </div>
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import SpaIcon from '~/assets/images/spa.svg?inline';
import RwdIcon from '~/assets/images/rwd.svg?inline';
import PsdIcon from '~/assets/images/psd.svg?inline';
import ShopifyIcon from '~/assets/images/shopify.svg?inline';
import ApiIcon from '~/assets/images/api.svg?inline';
import EcommerceIcon from '~/assets/images/ecommerce.svg?inline';

export default {
  name: 'Services',
  components: {
    SpaIcon,
    RwdIcon,
    PsdIcon,
    ShopifyIcon,
    ApiIcon,
    EcommerceIcon
  },
  data() {
    const vue = this;
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          init() {
            vue.$anime({
              targets: '.swiper-slide',
              translateY: [40, 0],
              opacity: [0, 1],
              easing: 'easeInOutSine',
              duration: 600,
              delay: vue.$anime.stagger(200)
            });
          }
        }
      },
      swiperSlides: [
        {
          icon: 'spa-icon',
          title: 'Single Page Application'
        },
        {
          icon: 'rwd-icon',
          title: 'Responsive Web Design'
        },
        {
          icon: 'psd-icon',
          title: 'PSD/Figma/XD to HTML'
        },
        {
          icon: 'shopify-icon',
          title: 'Shopify Storefront Theme'
        },
        {
          icon: 'api-icon',
          title: 'API integration'
        },
        {
          icon: 'ecommerce-icon',
          title: 'Ecommerce Storefront'
        }
      ]
    };
  }
};
</script>

<style></style>
