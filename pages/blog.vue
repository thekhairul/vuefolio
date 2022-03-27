<template>
  <div id="blog" class="blog bg-gray-50 h-full overflow-y-auto page-root">
    <div
      class="
        page-header
        relative
        h-80
        max-h-80
        flex flex-col
        items-center
        justify-center
        bg-background-dark
        md:p-5
      "
    >
      <h2
        ref="headerText"
        class="
          page-header__text
          text-yellow-300 text-2xl
          lg:text-6xl
          text-center
          lg:text-left
          mb-2
          font-bold
        "
      >
        <span class="anim-letter">C</span>
        <span class="anim-letter">O</span>
        <span class="anim-letter">M</span>
        <span class="anim-letter">I</span>
        <span class="anim-letter">N</span>
        <span class="anim-letter">G</span>
        <span>&nbsp;</span>
        <span class="anim-letter">S</span>
        <span class="anim-letter">O</span>
        <span class="anim-letter">O</span>
        <span class="anim-letter">N</span>

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
        <nuxt-link to="/" class="text-white  underline">Back to Home</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import pageMixin from '~/mixins/page';

export default {
  mixins: [pageMixin],
  transition: { name: 'transform3d', mode: '' },
  data() {
    return {};
  },
  mounted() {
    this.animateHeader();
  }
};
</script>
