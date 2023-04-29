<template>
  <div v-swiper="swiperOption">
    <div class="swiper-wrapper py-2">
      <div
        v-for="(voucher, idx) in testimonials"
        :key="idx"
        class="swiper-slide opacity-0 px-1"
      >
        <div
          class="testimonial-card p-8 rounded-xl bg-gray-50 dark:bg-background-dark shadow relative flex flex-col items-center justify-center"
        >
          <font-awesome-icon
            :icon="['fas', 'quote-left']"
            class="testimonial-quote text-gray-400 text-4xl opacity-50 absolute"
          />
          <figure class="bg-gray-50 rounded-full w-20 h-20">
            <img :src="require(`~/assets/images/${voucher.avatar}`)" alt="" />
          </figure>
          <p class="text-md p-2 text-center">{{ voucher.msg }}</p>
          <a
            :href="`mailto:${voucher.email}`"
            class="text-lg italic font-semibold"
          >
            {{ voucher.name }},</a
          >
          <p class="font-light tracking-widest text-center">
            <span>{{ voucher.designation }},</span>
            <span class="font-semibold">{{ voucher.company }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonial',
  data() {
    const vue = this;
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: true,
        loop: true,
        breakpoints: {
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
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
      testimonials: [
        {
          avatar: 'user.svg',
          msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur doloremque assumenda eligendi harum voluptas?',
          name: 'Finn',
          email: '',
          designation: 'Senior Frontend Developer',
          company: 'Shopify',
        },
        {
          avatar: 'user.svg',
          msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur doloremque assumenda eligendi harum voluptas?',
          name: 'Finn',
          email: '',
          designation: 'Senior Frontend Developer',
          company: 'Shopify',
        },
        {
          avatar: 'user.svg',
          msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur doloremque assumenda eligendi harum voluptas?',
          name: 'Finn',
          email: '',
          designation: 'Senior Frontend Developer',
          company: 'Shopify',
        },
      ],
    };
  },
};
</script>

<style>
.testimonial-quote {
  top: -10px;
  left: 50px;
  width: 40px;
}
</style>
