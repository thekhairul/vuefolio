<template>
  <div id="work" class="work">
    <div
      class="work-header relative h-80 max-h-80 flex flex-wrap items-center justify-center bg-background-dark p-5"
    ></div>
    <div class="work-main">
      <div
        class="controls shadow-lg mx-auto my-6 overflow-hidden rounded-full table"
      >
        <button
          type="button"
          class="control text-xl text-gray-500 font-light px-4 py-2 border-r border-gray-100"
          data-filter="all"
        >
          All
        </button>
        <button
          type="button"
          class="control text-xl text-gray-500 font-light px-4 py-2 border-r border-gray-100"
          data-filter=".react"
        >
          React
        </button>
        <button
          type="button"
          class="control text-xl text-gray-500 font-light px-4 py-2 border-r border-gray-100"
          data-filter=".vue"
        >
          Vue
        </button>
        <button
          type="button"
          class="control text-xl text-gray-500 font-light px-4 py-2"
          data-filter=".node"
        >
          Node
        </button>
      </div>
      <div
        ref="mixitupContainer"
        class="mixitup-container overflow-hidden p-5 grid grid-cols-4 gap-4"
      >
        <div v-for="(work, idx) in works" :key="idx" :class="work.class">
          <img :src="work.image" :alt="work.title" :class="work.imageClass" />
          <div class="bg-white p-4" :class="work.contentClass">
            <h4 class="text-accent-dark font-light text-2xl mb-2">
              {{ work.title }}
            </h4>
            <ul class="flex flex-wrap mb-3">
              <li
                v-for="(tag, id) in work.tags"
                :key="id"
                class="px-2 py-1 mr-1 mb-1 rounded-md transition-colors bg-gray-100 hover:bg-accent-dark text-color-light hover:text-color-dark font-light cursor-pointer"
              >
                {{ tag }}
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

export default {
  components: { CodeIcon, PreviewIcon },
  data() {
    return {
      works: [
        {
          image: 'https://picsum.photos/400/400',
          imageClass: 'object-cover object-center w-full lg:w-1/2',
          title: 'React Weather',
          tags: ['react', 'scss'],
          brief: 'A simple weather app built with react.',
          class:
            'group mix react rounded-lg overflow-hidden relative shadow-lg flex flex-wrap col-span-2 row-span-2',
          contentClass: 'w-full lg:w-1/2',
          sourceLink: '',
          demoLink: ''
        },
        {
          image: 'https://picsum.photos/400/400',
          imageClass: 'object-cover object-center w-full lg:w-1/2',
          title: 'Vuesume',
          tags: ['vue', 'quasar', 'firebase', 'scss'],
          brief: 'Resume builder built with quasar framework.',
          class:
            'group mix vue rounded-lg overflow-hidden relative shadow-lg flex flex-wrap col-span-2 row-span-2',
          contentClass: 'w-full lg:w-1/2',
          sourceLink: '',
          demoLink: ''
        },
        {
          image: 'https://picsum.photos/400/200',
          imageClass: 'object-cover object-center w-full',
          title: 'Tiny Glassdoor',
          tags: ['react', 'node', 'express', 'ant-design', 'redux', 'mongoDB'],
          brief: 'A tiny app to give and get review of IT companies.',
          class:
            'group mix react node rounded-lg overflow-hidden relative shadow-lg flex flex-col col-span-2 row-span-4',
          contentClass: 'w-full',
          sourceLink: '',
          demoLink: ''
        },
        {
          image: 'https://picsum.photos/400/400',
          imageClass: 'object-cover object-center w-full lg:w-1/2',
          title: 'React Weather',
          tags: ['react', 'scss'],
          brief: 'A simple weather app built with react.',
          class:
            'group mix react rounded-lg overflow-hidden relative shadow-lg flex flex-wrap col-span-2 row-span-2',
          contentClass: 'w-full lg:w-1/2',
          sourceLink: '',
          demoLink: ''
        },
        {
          image: 'https://picsum.photos/400/400',
          imageClass: 'object-cover object-center w-full lg:w-1/2',
          title: 'React Weather',
          tags: ['react', 'scss'],
          brief: 'A simple weather app built with react.',
          class:
            'group mix react rounded-lg overflow-hidden relative shadow-lg flex flex-wrap col-span-2 row-span-2',
          contentClass: 'w-full lg:w-1/2',
          sourceLink: '',
          demoLink: ''
        },
        {
          image: 'https://picsum.photos/400/400',
          imageClass: 'object-cover object-center w-full lg:w-1/2',
          title: 'React Weather',
          tags: ['react', 'scss'],
          brief: 'A simple weather app built with react.',
          class:
            'group mix react rounded-lg overflow-hidden relative shadow-lg flex flex-wrap col-span-2 row-span-2',
          contentClass: 'w-full lg:w-1/2',
          sourceLink: '',
          demoLink: ''
        },
        {
          image: 'https://picsum.photos/400/400',
          imageClass: 'object-cover object-center w-full h-1/2',
          title: 'Vuesume',
          tags: ['vue', 'quasar', 'firebase', 'scss'],
          brief: 'Resume builder built with quasar framework.',
          class:
            'group mix vue rounded-lg overflow-hidden relative shadow-lg flex flex-wrap row-span-2',
          contentClass: 'w-full',
          sourceLink: '',
          demoLink: ''
        },
        {
          image: 'https://picsum.photos/400/400',
          imageClass: 'object-cover object-center w-full h-1/2',
          title: 'Vuesume',
          tags: ['vue', 'quasar', 'firebase', 'scss'],
          brief: 'Resume builder built with quasar framework.',
          class:
            'group mix vue rounded-lg overflow-hidden relative shadow-lg flex flex-wrap row-span-2',
          contentClass: 'w-full',
          sourceLink: '',
          demoLink: ''
        }
      ]
    };
  },
  mounted() {
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
  grid-template-rows: repeat(minmax(250px, 400px), 6);
}
.work-action-btn {
  @apply w-10 h-10 p-3 mb-2 bg-white text-color-light rounded-full shadow-md transform transition-transform ease-in-expo -translate-x-full group-hover:translate-x-3 hover:bg-accent-light hover:text-white;
}
</style>