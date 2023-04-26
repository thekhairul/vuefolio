<template>
  <div
    id="contact"
    class="contact bg-color-light dark:bg-color-dark h-full overflow-y-auto page-root overflow-x-hidden"
  >
    <div
      class="page-header relative h-80 max-h-80 flex flex-col items-center justify-center md:p-5"
    >
      <h2
        ref="headerText"
        class="page-header__text text-yellow-300 text-2xl lg:text-6xl text-center lg:text-left mb-2 font-bold"
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
        class="text-white text-center lg:text-left font-light tracking-widest anim-para opacity-0"
      >
        Say hello! Stay in touch <span class="text-2xl">&#128578;</span>
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
          <p class="text-gray-600 not-italic mb-2">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
            <span class="font-light ml-2"
              >Bashundhara R/A, Dhaka, Bangladesh</span
            >
          </p>
          <p class="text-gray-600 hover:text-color-accent not-italic mb-2">
            <font-awesome-icon :icon="['fas', 'phone-alt']" />
            <a
              href="tel:8801799582488"
              class="font-light hover:text-color-accent ml-2"
              >8801799582488</a
            >
          </p>
          <p class="text-gray-600 hover:text-color-accent not-italic mb-2">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <a
              href="mailto:thekhairul.office@gmail.com"
              class="font-light hover:text-color-accent ml-2"
              >thekhairul.office@gmail.com</a
            >
          </p>
          <social-handles align="left" class="-ml-2" />
        </address>
      </div>
      <div class="w-full md:w-1/2 px-4 py-10">
        <form class="max-w-md" @submit.prevent="submitContactForm">
          <input
            v-model="honeypot"
            type="text"
            name="honeypot"
            style="display: none"
          />
          <legend class="mb-4">
            <h2 class="text-color-light font-extrabold text-3xl mb-2">
              Let's Talk
            </h2>
            <p class="text-gray-500">
              Feel free to leave a message if you happen to have a project idea
              or want to discuss about an offer :)
            </p>
          </legend>

          <div class="mb-2">
            <label for="name" class="block text-gray-500 mb-2">Your Name</label>
            <input
              id="name"
              v-model="name"
              type="text"
              name="name"
              class="rounded-3xl text-color-dark dark:text-color-light bg-gray-200 dark:bg-background-dark px-4 py-2 focus:outline-color-accent"
            />
          </div>

          <div class="mb-2">
            <label for="email" class="block text-gray-500 mb-2"
              >Your Email</label
            >
            <input
              id="email"
              v-model="email"
              type="email"
              name="email"
              class="w-full max-w-xs rounded-3xl text-color-dark dark:text-color-light bg-gray-200 dark:bg-background-dark px-4 py-2"
              required
            />
          </div>

          <div class="mb-2">
            <label for="message" class="block text-gray-500 mb-2"
              >Your Message</label
            >
            <textarea
              id="message"
              v-model="message"
              name="message"
              rows="6"
              class="w-full rounded-3xl text-color-dark dark:text-color-light bg-gray-200 dark:bg-background-dark px-4 py-2"
              required
            />
          </div>

          <button
            class="bg-color-accent rounded-3xl shadow-lg px-4 py-2 text-white font-bold uppercase tracking-widest"
            type="submit"
          >
            <font-awesome-icon
              v-if="isFormSubmitting"
              :icon="['fas', 'spinner']"
              spin
            />
            <span v-else>Send Message</span>
          </button>
        </form>
      </div>
    </div>
    <notifications position="bottom right" :duration="-1" />
  </div>
</template>

<script>
import pageMixin from '~/mixins/page';

export default {
  mixins: [pageMixin],
  transition: { name: 'transform3d', mode: '' },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      honeypot: '',
      isFormSubmitting: false,
    };
  },
  mounted() {
    this.animateHeader();
  },
  methods: {
    submitContactForm(e) {
      this.isFormSubmitting = true;
      const body = {
        name: this.name,
        email: this.email,
        subject: 'StaticForms - Contact Form',
        honeypot: this.honeypot, // if any value received in this field, form submission will be ignored.
        message: this.message,
        replyTo: '@', // this will set replyTo of email to email address entered in the form
        accessKey: 'f6fa7901-075a-4742-82d3-c14602c30221',
      };

      this.$axios
        .$post('https://api.staticforms.xyz/submit', JSON.stringify(body), {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(res => {
          this.name = '';
          this.email = '';
          this.message = '';
          this.$notify({
            title: 'Success!',
            text: 'Got the message. Will get back to you ASAP',
            type: 'success',
            duration: 5000,
          });
        })
        .catch(err => {
          this.$notify({
            title: 'Failed!',
            text: err.message,
            type: 'error',
            duration: 5000,
          });
        })
        .finally(() => {
          this.isFormSubmitting = false;
        });
    },
  },
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
      background-color: rgba($background-dark, 0.8);
    }
  }
}
</style>
