<template>
  <div v-swiper="swiperOption">
    <div class="swiper-wrapper py-2">
      <div
        v-for="(slide, idx) in swiperSlides"
        :key="idx"
        class="swiper-slide opacity-0 px-1"
      >
        <div
          class="service-card p-4 rounded-xl bg-gray-50 dark:bg-background-dark shadow flex flex-col items-center justify-center"
        >
          <component :is="slide.icon" class="w-16 h-16 mb-2"></component>
          <h2
            class="text-color-dark dark:text-color-light text-center text-sm font-semibold tracking-widest"
          >
            {{ slide.title }}
          </h2>
        </div>
      </div>
    </div>
    <div class="swiper-button-prev">
      <fa :icon="['fas', 'arrow-circle-left']" class="text-gray-400 text-2xl" />
    </div>
    <div class="swiper-button-next">
      <fa
        :icon="['fas', 'arrow-circle-right']"
        class="text-gray-400 text-2xl"
      />
    </div>
  </div>
</template>

<script>
import ApiIcon from '~/assets/images/api.svg?inline';
import EcommerceIcon from '~/assets/images/ecommerce.svg?inline';
import PsdIcon from '~/assets/images/psd.svg?inline';
import RwdIcon from '~/assets/images/rwd.svg?inline';
import ShopifyIcon from '~/assets/images/shopify.svg?inline';
import SpaIcon from '~/assets/images/spa.svg?inline';

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
    const vue = this;
    return {
      swiperOption: {
        slidesPerView: 1.3,
        spaceBetween: 20,
        breakpoints: {
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 992px
          992: {
            slidesPerView: 4,
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          init() {
            vue.$anime({
              targets: '.swiper-slide',
              translateY: [40, 0],
              opacity: [0, 1],
              easing: 'easeInOutSine',
              duration: 600,
              delay: vue.$anime.stagger(200),
            });
          },
        },
      },
      swiperSlides: [
        {
          icon: 'spa-icon',
          title: 'Single Page Application',
        },
        {
          icon: 'rwd-icon',
          title: 'Responsive Web Design',
        },
        {
          icon: 'psd-icon',
          title: 'PSD/Figma/XD to HTML',
        },
        {
          icon: 'shopify-icon',
          title: 'Shopify Storefront Theme',
        },
        {
          icon: 'api-icon',
          title: 'API integration',
        },
        {
          icon: 'ecommerce-icon',
          title: 'Ecommerce Storefront',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.swiper-button-prev {
  position: absolute;
  top: 50%;
  left: 10px;
  z-index: 99;
  transform: translateY(-50%);
  cursor: pointer;
}
.swiper-button-next {
  position: absolute;
  top: 50%;
  right: 10px;
  z-index: 99;
  transform: translateY(-50%);
  cursor: pointer;
}
.swiper-button-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
