<template>
  <div class="container flex h-screen mx-auto relative overflow-x-hidden">
    <sidebar-primary />
    <transition
      :css="false"
      mode="out-in"
      @enter="enterElement"
      @leave="leaveElement"
    >
      <sidebar-secondary v-show="sidebarOpen" />
    </transition>
    <main
      class="app-body flex-grow border h-full shadow-lg"
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
    },
  },
  methods: {
    enterElement(el, done) {
      this.$anime({
        targets: el,
        translateX: ['-100%', 0],
        opacity: [0, 1],
        easing: 'easeInOutSine',
        duration: 500,
        complete: done,
      });
    },
    leaveElement(el, done) {
      this.$anime({
        targets: el,
        translateX: [0, '-100%'],
        opacity: [1, 0],
        easing: 'easeInOutSine',
        duration: 500,
        complete: done,
      });
    },
  },
};
</script>

<style lang="scss">
.app-body {
  transition: margin 0.5s ease-in-out;
  margin-left: 12px;
  &.sidebar-open {
    margin-left: 276px;
  }
}
</style>
