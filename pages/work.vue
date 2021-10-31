<template>
  <div id="work" class="work bg-gray-50 h-full overflow-y-auto page-root">
    <div
      class="page-header relative h-80 max-h-80 flex flex-col items-center justify-center bg-background-dark p-5"
    >
      <h2
        ref="headerText"
        class="page-header__text text-yellow-300 text-2xl lg:text-6xl text-center lg:text-left mb-2 font-bold"
      >
        <span class="anim-letter">W</span>
        <span class="anim-letter">O</span>
        <span class="anim-letter">R</span>
        <span class="anim-letter">K</span>
        <span class="anim-letter--bang">!</span>
      </h2>
      <p
        ref="headerPara"
        class="text-white text-center lg:text-left font-light tracking-widest anim-para opacity-0"
      >
        Explore some of my notable works in recent time.
      </p>
    </div>
    <div class="work-main">
      <div
        class="controls shadow-lg mx-auto my-6 overflow-hidden rounded-full table"
      >
        <button
          type="button"
          class="control text-sm md:text-xl text-gray-500 font-light px-2 md:px-4 py-2 bg-whie border-r border-gray-100"
          data-filter="all"
        >
          All
        </button>
        <button
          type="button"
          class="control text-sm md:text-xl text-gray-500 font-light px-2 md:px-4 py-2 bg-whie border-r border-gray-100"
          data-filter=".react"
        >
          React
        </button>
        <button
          type="button"
          class="control text-sm md:text-xl text-gray-500 font-light px-2 md:px-4 py-2 bg-whie border-r border-gray-100"
          data-filter=".vue"
        >
          Vue
        </button>
        <button
          type="button"
          class="control text-sm md:text-xl text-gray-500 font-light px-2 md:px-4 py-2 bg-whie"
          data-filter=".node"
        >
          Node
        </button>
      </div>
      <div
        ref="mixitupContainer"
        class="mixitup-container overflow-hidden p-2 md:p-5 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div v-for="(work, idx) in works" :key="idx" :class="work.class">
          <img
            :src="work.image"
            :alt="work.title"
            class="filter group-hover:grayscale"
            :class="work.imageClass"
          />
          <div class="bg-white p-4" :class="work.contentClass">
            <a
              :href="work.demoLink"
              target="_blank"
              class="block text-accent-dark font-light text-2xl mb-2"
            >
              {{ work.title }}
            </a>
            <ul class="flex flex-wrap mb-3">
              <li v-for="(tag, id) in work.tags" :key="id" class="mr-1 mb-1">
                <a
                  :href="tag.link"
                  target="_blank"
                  class="inline-block px-2 py-1 rounded-md transition-colors bg-gray-100 hover:bg-accent-dark text-color-light hover:text-color-dark font-light cursor-pointer"
                  >{{ tag.name }}</a
                >
              </li>
            </ul>
            <p class="text-sm text-color-light">{{ work.brief }}</p>
            <div class="flex flex-col absolute top-0 left-0 mt-3">
              <a
                href="#"
                target="_blank"
                data-tooltip="Source code"
                data-tooltip-conf="right"
                class="work-action-btn"
              >
                <code-icon />
              </a>
              <a
                href="#"
                target="_blank"
                data-tooltip="Live preview"
                data-tooltip-conf="right"
                class="work-action-btn"
                :class="'delay-75'"
                ><preview-icon
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeIcon from '~/assets/images/link.svg?inline';
import PreviewIcon from '~/assets/images/preview-line.svg?inline';
import works from '~/data/work';
import pageMixin from '~/mixins/page';

export default {
  components: { CodeIcon, PreviewIcon },
  mixins: [pageMixin],
  transition: { name: 'transform3d', mode: '' },
  data() {
    return {
      works
    };
  },
  mounted() {
    this.animateHeader();
    this.mixitup(this.$refs.mixitupContainer);
  }
};
</script>

<style lang="scss">
.mixitup-control-active {
  background: var(--accent-dark);
  color: white;
  border-color: var(--accent-dark);
}
.mixitup-container {
  grid-template-rows: auto;
}
.work-action-btn {
  @apply w-10 h-10 p-3 mb-2 bg-white text-color-light rounded-full shadow-md transform transition-transform ease-in-expo -translate-x-full group-hover:translate-x-3 hover:bg-accent-light hover:text-white;
}
</style>
