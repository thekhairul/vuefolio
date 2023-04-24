<template>
  <div
    id="work"
    class="work bg-color-light dark:bg-color-dark h-full overflow-y-auto page-root"
  >
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
        Work Hard, Designate Harder
      </p>
    </div>
    <div class="work-main">
      <div
        class="controls shadow-lg mx-auto my-6 overflow-hidden rounded-full table"
      >
        <button
          type="button"
          class="control text-sm md:text-xl text-gray-500 px-2 md:px-4 py-2 bg-whie border-r"
          data-filter="all"
        >
          All
        </button>
        <button
          type="button"
          class="control text-sm md:text-xl text-gray-500 px-2 md:px-4 py-2 bg-whie border-r"
          data-filter=".react"
        >
          React
        </button>
        <button
          type="button"
          class="control text-sm md:text-xl text-gray-500 px-2 md:px-4 py-2 bg-whie border-r"
          data-filter=".vue"
        >
          Vue
        </button>
        <button
          type="button"
          class="control text-sm md:text-xl text-gray-500 px-2 md:px-4 py-2 bg-whie"
          data-filter=".node"
        >
          Node
        </button>
      </div>
      <div
        ref="mixitupContainer"
        class="mixitup-container overflow-hidden p-2 md:p-5 columns-3 gap-4"
      >
        <div v-for="(work, idx) in works" :key="idx" :class="work.class">
          <img
            :src="require(`@/assets/images/${work.image}`)"
            :alt="work.title"
            class="filter group-hover:brightness-50"
            :class="work.imageClass"
          />
          <div class="bg-white p-4" :class="work.contentClass">
            <a
              :href="work.demoLink || work.sourceLink || '#'"
              target="_blank"
              class="block text-color-accent text-2xl mb-2"
            >
              {{ work.title }}
            </a>
            <ul class="flex flex-wrap mb-3">
              <li v-for="(tag, id) in work.tags" :key="id" class="mr-1 mb-1">
                <a
                  :href="tag.link"
                  target="_blank"
                  class="inline-block px-2 py-1 rounded-md transition-colors bg-color-accent text-color-accent font-light cursor-pointer"
                  >{{ tag.name }}</a
                >
              </li>
            </ul>
            <p class="text-sm text-color-light">{{ work.brief }}</p>
            <div class="flex flex-col absolute top-0 left-0 mt-3">
              <a
                :href="work.sourceLink || '#'"
                target="_blank"
                data-tooltip="Source code"
                data-tooltip-conf="right"
                class="work-action-btn"
                :class="{
                  'cursor-not-allowed pointer-events-none': !work.sourceLink,
                }"
              >
                <code-icon />
              </a>
              <a
                :href="work.demoLink || '#'"
                target="_blank"
                data-tooltip="Live preview"
                data-tooltip-conf="right"
                class="work-action-btn delay-75"
                :class="{
                  'cursor-not-allowed pointer-events-none': !work.demoLink,
                }"
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
      works,
    };
  },
  mounted() {
    this.animateHeader();
    this.mixitup(this.$refs.mixitupContainer);
  },
};
</script>

<style lang="scss">
.mixitup-control-active {
  background: var(--color-accent);
  color: white;
  border-color: var(--color-accent);
}
.mixitup-container {
  grid-template-rows: auto;
}
.work-action-btn {
  @apply w-10 h-10 p-3 mb-2 bg-white text-color-light rounded-full shadow-md transform transition-transform ease-in-expo -translate-x-full group-hover:translate-x-3 hover:bg-color-accent hover:text-white;
}
</style>
