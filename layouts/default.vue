<template>
  <div class="lg:container flex h-screen lg:mx-auto overflow-x-hidden relative">
    <sidebar-primary />
    <div
      class="
        overflow-x-hidden
        sidebar-wrapper
        h-full
        w-64
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
