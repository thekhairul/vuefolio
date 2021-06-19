<template>
  <div id="home" class="home">
    <div class="home-header relative max-h-96 hidden md:block">
      <img
        src="~/assets/images/homeHeaderBG.jpg"
        alt=""
        class="h-80 object-center object-cover w-full"
      />
      <h2
        ref="headerText"
        class="home-header__text text-6xl font-bold absolute"
      >
        <span class="anim-letter inline-block text-white transform scale-0"
          >H</span
        >
        <span class="anim-letter inline-block text-white transform scale-0"
          >O</span
        >
        <span class="anim-letter inline-block text-white transform scale-0"
          >L</span
        >
        <span class="anim-letter inline-block text-white transform scale-0"
          >A</span
        >
        <span
          class="anim-letter--bang inline-block text-white transform scale-0"
          >!</span
        >
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  mounted() {
    const letters = this.$refs.headerText.querySelectorAll('.anim-letter');
    const bang = this.$refs.headerText.querySelector('.anim-letter--bang');
    setTimeout(() => {
      this.$anime
        .timeline({
          easing: 'easeInOutSine',
          duration: 500,
        })
        .add({
          targets: letters,
          scale: [0, 1],
          duration: 600,
          delay: this.$anime.stagger(100),
        })
        .add({
          targets: bang,
          scale: [0, 1],
          rotateZ: [45, 15],
          duration: 600,
        });
    }, 1000);
  },
};
</script>

<style lang="scss">
.home-header {
  &__text {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    text-shadow: -3px 3px 5px #312f2f;
    letter-spacing: 0.2rem;
  }
}
</style>
