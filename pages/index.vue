<template>
  <div id="home" class="home">
    <div class="home-header relative max-h-96">
      <img
        src="~/assets/images/homeHeaderBG.jpg"
        alt=""
        class="h-80 object-center object-cover w-full"
      />
      <h2 class="home-header__text text-4xl font-bold text-white absolute">
        HOLA!
      </h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home-header {
  &__text {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    &::after {
      content: '';
      position: absolute;
      top: -15px;
      left: -15px;
      bottom: -15px;
      right: -15px;
      background: #383838;
      z-index: -1;
      transform: skewX(338deg);
    }
  }
}
</style>
