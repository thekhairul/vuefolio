<template>
  <div
    id="home"
    class="
      home
      bg-background-light
      dark:bg-background-dark
      h-full
      overflow-y-auto
      page-root
    "
  >
    <div
      class="
        page-header
        relative
        h-80
        max-h-80
        flex flex-wrap
        items-center
        justify-center
        bg-background-dark
        p-5
      "
    >
      <figure class="home-avatar my-2 lg:order-1">
        <img
          ref="homeAvatar"
          :src="require(`~/assets/images/avatar.png`)"
          alt=""
          class="
            w-28
            h-28
            lg:w-36 lg:h-36
            mx-2
            rounded-full
            object-cover object-right
          "
        />
      </figure>
      <div class="page-header__brief w-full lg:w-1/2">
        <h2
          ref="headerText"
          class="
            page-header__text
            text-2xl
            lg:text-6xl
            text-center
            lg:text-left
            mb-2
            font-bold
          "
        >
          <span class="anim-letter">H</span>
          <span class="anim-letter">O</span>
          <span class="anim-letter">L</span>
          <span class="anim-letter">A</span>
          <span class="anim-letter--bang">!</span>
        </h2>
        <p
          ref="headerPara"
          class="
            text-white text-center
            lg:text-left
            font-light
            tracking-widest
            anim-para
            opacity-0
          "
        >
          I am <i>Khairul Anik</i>, a Frontend developer based in Dhaka. I
          usually build web interfaces with VUE &amp; React &#128151;
        </p>
      </div>
    </div>
    <div class="home-main p-5">
      <div class="service mb-8">
        <h2 class="text-accent-light font-semibold text-2xl mb-3">
          my services
        </h2>
        <services />
      </div>

      <div class="pricing mb-4">
        <pricing />
      </div>

      <div class="service mb-8">
        <h2 class="text-accent-light font-semibold text-2xl mb-3">
          recommendation
        </h2>
        <testimonial />
      </div>
    </div>
  </div>
</template>

<script>
import VanillaTilt from 'vanilla-tilt';
import pageMixin from '~/mixins/page';

export default {
  name: 'Index',
  mixins: [pageMixin],
  transition: { name: 'transform3d', mode: '' },
  mounted() {
    this.animateHeader();

    VanillaTilt.init(this.$refs.homeAvatar, { scale: 1.2 });
  }
};
</script>

<style lang="scss">
.home-avatar {
  img {
    filter: drop-shadow(3px 6px 6px #2d2323) grayscale(1);
  }
}
</style>
