<template>
  <div
    id="home"
    class="home bg-color-light dark:bg-color-dark h-full overflow-y-auto page-root overflow-x-hidden"
  >
    <div
      class="page-header relative h-80 max-h-80 flex flex-wrap items-center justify-center bg-background-dark p-5"
    >
      <figure class="home-avatar my-2 lg:order-1">
        <img
          ref="homeAvatar"
          :src="require(`~/assets/images/avatar.png`)"
          alt=""
          class="w-28 h-28 lg:w-36 lg:h-36 mx-2 rounded-full object-cover object-right"
        />
      </figure>
      <div class="page-header__brief w-full lg:w-1/2">
        <h2
          ref="headerText"
          class="page-header__text text-2xl lg:text-6xl text-center lg:text-left mb-2 font-bold"
        >
          <span class="anim-letter">H</span>
          <span class="anim-letter">O</span>
          <span class="anim-letter">L</span>
          <span class="anim-letter">A</span>
          <span class="anim-letter--bang">!</span>
        </h2>
        <p
          ref="headerPara"
          class="text-white text-center lg:text-left font-light tracking-widest anim-para opacity-0"
        >
          I am <i>Khairul Anik</i>, a Frontend developer based in Dhaka. I
          usually build web interfaces with Vue &amp; React &#128151;
        </p>
      </div>
    </div>
    <div class="home-main p-5">
      <div class="mb-8">
        <h2 class="text-color-accent font-semibold text-2xl mb-3">about me</h2>
        <p class="text-lg mb-4 opacity-80 tracking-wide">
          I've been building frontend interfaces for little over 5 years.
          Currently I remotely work at
          <a
            href="https://groove.cm/groovepages"
            target="_blank"
            class="text-color-accent dark:text-color-accent underline"
            >Groovepages</a
          >, the flagship product of GrooveDigital LTD. Here I collaborate with
          my fellow teammates to build and maintain the cutting edge funnel
          builder built with VUE.
        </p>
        <p class="text-lg mb-4 opacity-80 tracking-wide">
          My primary language is Javascript. But I can speak Typescript and a
          little bit of Python too. I love react for its customizability and vue
          for its ease of use. I'm comfortable writing application with both of
          them.
        </p>
        <p class="text-lg mb-4 opacity-80 tracking-wide">
          When I'm not coding, you'll find me reading about philosophy or
          religion. Currently I'm very much into Stoicism.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-color-accent font-semibold text-2xl mb-3">my tools</h2>
        <tools />
      </div>

      <div class="mb-8">
        <h2 class="text-color-accent font-semibold text-2xl mb-3">
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
  },
};
</script>

<style lang="scss">
.home-avatar {
  img {
    filter: drop-shadow(3px 6px 6px #2d2323) grayscale(1);
  }
}
</style>
