<template>
  <div
    id="work"
    class="work bg-color-light dark:bg-color-dark h-full overflow-y-auto page-root overflow-x-hidden"
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
        Work Hard, Dream Big
      </p>
    </div>
    <div class="work-main">
      <div class="controls mx-auto my-6 overflow-hidden table">
        <button
          type="button"
          class="control text-sm md:text-lg text-color-dark dark:text-color-light px-2 md:px-4 py-2"
          data-filter="all"
        >
          All
        </button>
        <button
          type="button"
          class="control text-sm md:text-lg text-color-dark dark:text-color-light px-2 md:px-4 py-2"
          data-filter=".react"
        >
          React
        </button>
        <button
          type="button"
          class="control text-sm md:text-lg text-color-dark dark:text-color-light px-2 md:px-4 py-2"
          data-filter=".vue"
        >
          Vue
        </button>
        <button
          type="button"
          class="control text-sm md:text-lg text-color-dark dark:text-color-light px-2 md:px-4 py-2"
          data-filter=".node"
        >
          Node
        </button>
      </div>
      <div
        ref="mixitupContainer"
        class="mixitup-container flex flex-wrap gap-4 overflow-hidden p-4 md:p-8"
      >
        <div v-for="(work, idx) in works" :key="idx" :class="work.class">
          <figure
            v-if="work.image"
            class="w-full md:w-1/2 mb-4 relative rounded-lg overflow-hidden group"
          >
            <img
              :src="require(`@/assets/images/${work.image}`)"
              alt=""
              class="w-full"
            />
            <figcaption
              class="absolute inset-0 bg-color-dark opacity-50 group-hover:hidden"
            ></figcaption>
          </figure>
          <div :class="work.layoutClass">
            <div class="flex items-center gap-4">
              <h2
                class="flex-grow text-2xl text-color-dark dark:text-color-light"
              >
                {{ work.title }}
              </h2>
              <a
                :href="work.sourceLink || '#'"
                target="_blank"
                data-tooltip="Source code"
                class="text-xl text-color-dark hover:text-color-accent dark:text-color-light"
                :class="{ 'no-click': !work.sourceLink }"
              >
                <font-awesome-icon :icon="['fab', 'github']" class="w-6" />
              </a>
              <a
                :href="work.demoLink || '#'"
                target="_blank"
                data-tooltip="Live"
                class="text-xl text-color-dark hover:text-color-accent dark:text-color-light"
                :class="{ 'no-click': !work.demoLink }"
              >
                <font-awesome-icon
                  :icon="['fas', 'external-link-alt']"
                  class="w-6"
                />
              </a>
            </div>
            <div :class="work.contentClass">
              <p
                class="text-color-dark dark:text-color-light tracking-wide leading-loose opacity-70"
                v-html="work.brief"
              ></p>
            </div>
            <ul class="inline-flex gap-4 items-center">
              <li
                v-for="tag in work.tags"
                :key="tag"
                class="font-ptsans text-color-accent text-sm tracking-wider"
              >
                {{ tag.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import works from '~/data/work';
import pageMixin from '~/mixins/page';

export default {
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
  color: var(--color-accent) !important;
}
.work-action-btn {
  @apply w-10 h-10 p-3 mb-2 bg-white text-color-light rounded-full shadow-md transform transition-transform ease-in-expo -translate-x-full group-hover:translate-x-3 hover:bg-color-accent hover:text-white;
}
</style>
