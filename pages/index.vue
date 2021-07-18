<template>
  <div id="home" class="home">
    <div
      class="home-header relative h-80 max-h-80 flex items-center justify-center bg-background-dark p-5"
    >
      <!-- <img
        src="~/assets/images/homeHeaderBG.jpg"
        alt=""
        class="home-header__banner h-80 object-center object-cover w-full"
      /> -->
      <div class="home-header__brief w-full lg:w-1/2">
        <h2 ref="headerText" class="home-header__text text-6xl mb-2 font-bold">
          <span class="anim-letter">H</span>
          <span class="anim-letter">O</span>
          <span class="anim-letter">L</span>
          <span class="anim-letter">A</span>
          <span class="anim-letter--bang">!</span>
        </h2>
        <p
          ref="headerPara"
          class="text-white font-light tracking-widest anim-para opacity-0"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          voluptatibus animi quisquam dolore veritatis minima nam tenetur earum
          a laborum quo, adipisci laboriosam accusantium vitae vero alias.
        </p>
      </div>
      <figure class="home-avatar hidden lg:block">
        <img
          ref="homeAvatar"
          :src="require(`~/assets/images/avatar.png`)"
          alt=""
          class="w-36 h-36 mx-2 rounded-full object-cover object-right"
        />
      </figure>
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

import Pricing from '~/components/Pricing.vue';
export default {
  name: 'Index',
  components: { Pricing },
  mounted() {
    const letters = this.$refs.headerText.querySelectorAll('.anim-letter');
    const bang = this.$refs.headerText.querySelector('.anim-letter--bang');
    const para = this.$refs.headerPara;
    setTimeout(() => {
      this.$anime
        .timeline({
          easing: 'easeInOutSine'
        })
        .add({
          targets: letters,
          scale: [0, 1],
          duration: 600,
          delay: this.$anime.stagger(100)
        })
        .add({
          targets: bang,
          scale: [0, 1],
          rotateZ: [45, 15],
          duration: 600
        })
        .add({
          targets: para,
          opacity: [0, 1],
          duration: 600
        });
    }, 500);

    VanillaTilt.init(this.$refs.homeAvatar, { scale: 1.2 });
  }
};
</script>

<style lang="scss">
.home-header {
  &__text {
    text-shadow: -5px 2px 0px #11b981;
    letter-spacing: 0.2rem;
    transition: letter-spacing 0.3s var(--easing-function);
    &:hover {
      letter-spacing: 0.5rem;
    }
  }
  .anim-letter,
  .anim-letter--bang {
    display: inline-block;
    color: var(--color-dark);
    transform: scale(0);
  }
}
.home-avatar {
  img {
    filter: drop-shadow(3px 6px 6px #2d2323) grayscale(1);
  }
}
</style>
