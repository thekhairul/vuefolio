<template>
  <div id="contact" class="contact bg-gray-50 h-full overflow-y-auto page-root">
    <div
      class="
        page-header
        relative
        h-80
        max-h-80
        flex flex-col
        items-center
        justify-center
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
        <span class="anim-letter">N</span>
        <span class="anim-letter">T</span>
        <span class="anim-letter">A</span>
        <span class="anim-letter">C</span>
        <span class="anim-letter">T</span>
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
        Say hello. Keep in touch &#128578;
      </p>
    </div>

    <div class="contact-main p-5"></div>
  </div>
</template>

<script>
import pageMixin from '~/mixins/page';
import jobs from '~/data/jobs';
import certificates from '~/data/certificates';

export default {
  mixins: [pageMixin],
  transition: { name: 'transform3d', mode: '' },
  data() {
    return {
      jobs,
      certificates
    };
  },
  mounted() {
    this.animateHeader();
  }
};
</script>

<style lang="scss">
.contact {
  .page-header {
    background-image: url('~/assets/images/contact-bg.png');
    background-size: cover;
    background-position: center;
    z-index: 1;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background-color: rgba($background-dark, 0.6);
    }
  }
}
</style>
