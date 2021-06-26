<template>
  <div v-swiper="swiperOption">
    <div class="swiper-wrapper py-2">
      <div class="swiper-slide p-4 rounded shadow-md flex items-center">
        <spa-icon class="w-14 h-14"></spa-icon>
        <h2 class="text-color-light text-xl ml-4">Single Page Application</h2>
      </div>
      <div class="swiper-slide p-4 rounded shadow-md flex items-center">
        <rwd-icon class="w-14 h-14"></rwd-icon>
        <h2 class="text-color-light text-xl ml-4">Responsive Web Design</h2>
      </div>
      <div class="swiper-slide p-4 rounded shadow-md flex items-center">
        <psd-icon class="w-14 h-14"></psd-icon>
      </div>
      <div class="swiper-slide p-4 rounded shadow-md flex items-center">
        <shopify-icon class="w-14 h-14"></shopify-icon>
      </div>
      <div class="swiper-slide p-4 rounded shadow-md flex items-center">
        <api-icon class="w-14 h-14"></api-icon>
      </div>
      <div class="swiper-slide p-4 rounded shadow-md flex items-center">
        <ecommerce-icon class="w-14 h-14"></ecommerce-icon>
      </div>
      <div class="swiper-pagination"></div>
    </div>
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
    EcommerceIcon,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
};
</script>

<style></style>
