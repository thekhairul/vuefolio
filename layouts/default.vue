<template>
  <div class="container flex h-screen mx-auto overflow-x-hidden relative">
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
}
</style>
