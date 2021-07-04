<template>
  <div id="home" class="home">
    <div class="home-header relative max-h-96 hidden md:block">
      <img
        src="~/assets/images/homeHeaderBG.jpg"
        alt=""
        class="home-header__banner h-80 object-center object-cover w-full"
      />
      <h2
        ref="headerText"
        class="home-header__text text-6xl font-bold absolute"
      >
        <span class="anim-letter">H</span>
        <span class="anim-letter">O</span>
        <span class="anim-letter">L</span>
        <span class="anim-letter">A</span>
        <span class="anim-letter--bang">!</span>
      </h2>
    </div>
    <div class="home-main p-5">
      <div class="about mb-4">
        <h2 class="text-color-light font-semibold text-2xl mb-3">about</h2>
        <p class="text-color-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          voluptatibus animi quisquam dolore veritatis minima nam tenetur earum
          a laborum quo, adipisci laboriosam accusantium vitae vero alias.
        </p>
      </div>

      <div class="service mb-8">
        <h2 class="text-color-light font-semibold text-2xl mb-3">
          my services
        </h2>
        <services />
      </div>

      <div class="pricing mb-4">
        <pricing />
      </div>
    </div>
  </div>
</template>

<script>
import Pricing from '~/components/Pricing.vue';
export default {
  name: 'Index',
  components: { Pricing },
  mounted() {
    const letters = this.$refs.headerText.querySelectorAll('.anim-letter');
    const bang = this.$refs.headerText.querySelector('.anim-letter--bang');
    setTimeout(() => {
      this.$anime
        .timeline({
          easing: 'easeInOutSine',
          duration: 500
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
        });
    }, 500);
  }
};
</script>

<style lang="scss">
.home-header {
  &__text {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    text-shadow: -10px 3px 5px #151617;
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
</style>
