<template>
  <div
    class="container flex h-screen md:py-6 mx-auto relative overflow-x-hidden"
  >
    <sidebar-primary />
    <transition
      :css="false"
      mode="out-in"
      @enter="enterElement"
      @leave="leaveElement"
    >
      <sidebar-secondary v-show="sidebarOpen" />
    </transition>
    <main class="flex-grow border h-full ml-4 shadow-lg">
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

<style></style>
