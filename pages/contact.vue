<template>
  <div id="contact" class="contact bg-white h-full overflow-y-auto page-root">
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
        Say hello! Stay in touch &#128578;
      </p>
    </div>

    <div class="contact-main flex flex-wrap">
      <div
        class="w-full md:w-1/2 flex flex-col justify-center items-center p-4"
      >
        <img
          src="~/assets/images/contact-maskot-1.svg"
          alt=""
          class="w-60 mb-4"
        />
        <address>
          <p class="text-gray-300 not-italic mb-2">
            <fa :icon="['fas', 'map-marker-alt']" />
            <span class="text-gray-400 ml-2"
              >Bashundhara R/A, Dhaka, Bangladesh</span
            >
          </p>
          <p class="text-gray-300 not-italic mb-2">
            <fa :icon="['fas', 'phone-alt']" />
            <a href="tel:8801799582488" class="text-gray-400 ml-2"
              >8801799582488</a
            >
          </p>
          <p class="text-gray-300 not-italic mb-2">
            <fa :icon="['fas', 'envelope']" />
            <a
              href="mailto:thekhairul.office@gmail.com"
              class="text-gray-400 ml-2"
              >thekhairul.office@gmail.com</a
            >
          </p>
          <social-handles align="left" class="-ml-2" />
        </address>
      </div>
      <div class="w-full md:w-1/2 px-4 py-10">
        <form action="" class="max-w-md">
          <legend class="mb-4">
            <h2 class="text-color-light font-extrabold text-3xl mb-2">
              Let's Talk
            </h2>
            <p class="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur architecto illo asperiores voluptatibus eveniet in
              earum ad, doloribus unde a?
            </p>
          </legend>

          <div class="mb-2">
            <label for="name" class="block text-gray-400 mb-2">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              class="rounded-3xl bg-gray-100 px-4 py-2"
            />
          </div>

          <div class="mb-2">
            <label for="email" class="block text-gray-400 mb-2"
              >Your Email</label
            >
            <input
              id="email"
              type="email"
              name="email"
              class="rounded-3xl bg-gray-100 px-4 py-2"
            />
          </div>

          <div class="mb-2">
            <label for="message" class="block text-gray-400 mb-2"
              >Your Message</label
            >
            <textarea
              id="message"
              name="message"
              rows="6"
              class="w-full rounded-3xl bg-gray-100 px-4 py-2"
            />
          </div>

          <button
            class="bg-accent-dark rounded-3xl shadow-lg px-4 py-2 text-white font-bold uppercase tracking-widest"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
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

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background-color: rgba($background-dark, 0.6);
    }
  }
}
</style>
