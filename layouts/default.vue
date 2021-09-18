<template>
  <div class="lg:container flex h-screen lg:mx-auto overflow-x-hidden relative">
    <sidebar-primary />
    <div
      class="
        overflow-x-hidden
        sidebar-wrapper
        h-full
        w-64
        bg-background-light
        dark:bg-background-dark
        absolute
        z-10
      "
    >
      <transition
        :css="false"
        mode="out-in"
        @enter="enterElement"
        @leave="leaveElement"
      >
        <sidebar-secondary v-show="sidebarOpen" />
      </transition>
    </div>
    <main
      class="
        app-body
        flex-grow
        bg-background-light
        dark:bg-background-dark
        h-full
        shadow-lg
        relative
        z-10
        overflow-y-auto
      "
      :class="{ 'sidebar-open': sidebarOpen }"
    >
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    sidebarOpen() {
      return this.$store.state.isSidebarOpen;
    }
  },
  methods: {
    enterElement(el, done) {
      this.$anime({
        targets: el,
        translateX: ['-100%', 0],
        easing: 'easeInOutSine',
        duration: 500,
        complete: done
      });
    },
    leaveElement(el, done) {
      this.$anime({
        targets: el,
        translateX: [0, '-100%'],
        easing: 'easeInOutSine',
        duration: 500,
        complete: done
      });
    }
  }
};
</script>

<style lang="scss">
.sidebar-wrapper {
  margin-left: 64px;
}
.sidebar-wrapper {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
}
.app-body {
  transition: margin 0.5s ease-in-out;
  margin-left: 0px;
  // min-width: 300px;
  &.sidebar-open {
    margin-left: 256px;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: transparent;
  }
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    // background-image: -webkit-gradient(
    //   linear,
    //   left bottom,
    //   left top,
    //   color-stop(0.44, rgb(122, 217, 162)),
    //   color-stop(0.72, rgb(21, 201, 90)),
    //   color-stop(0.86, rgb(5, 102, 62))
    // );
    background-color: var(--accent-light);
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
  }
}
</style>
