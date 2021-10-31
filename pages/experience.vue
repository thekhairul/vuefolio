<template>
  <div
    id="experience"
    class="experience bg-gray-50 h-full overflow-y-auto page-root"
  >
    <div
      class="
        page-header
        relative
        h-80
        max-h-80
        flex flex-col
        items-center
        justify-center
        bg-background-dark
        p-5
      "
    >
      <h2
        ref="headerText"
        class="
          page-header__text
          text-yellow-300 text-2xl
          lg:text-6xl
          text-center
          lg:text-left
          mb-2
          font-bold
        "
      >
        <span class="anim-letter">E</span>
        <span class="anim-letter">X</span>
        <span class="anim-letter">P</span>
        <span class="anim-letter">E</span>
        <span class="anim-letter">R</span>
        <span class="anim-letter">I</span>
        <span class="anim-letter">E</span>
        <span class="anim-letter">N</span>
        <span class="anim-letter">C</span>
        <span class="anim-letter">E</span>
        <span class="anim-letter--bang">!</span>
      </h2>
      <p
        ref="headerPara"
        class="
          text-white text-center
          lg:text-left
          font-light
          tracking-widest
          anim-para
          opacity-0
        "
      >
        Explore some of my notable works in recent time.
      </p>
    </div>

    <div class="experience-main p-5">
      <div class="jobs mb-8">
        <h2 class="text-accent-light font-semibold text-2xl mb-3">
          job experience
        </h2>
        <ul class="max-w-4xl experience-jobs">
          <li v-for="num in [1, 2, 3]" :key="num" class="pl-4 mb-4">
            <h5 class="text-color-light mb-2">October 2019 - present</h5>

            <div
              class="p-4 rounded-xl bg-white dark:bg-background-dark shadow-lg"
            >
              <a
                href="https://groove.cm/"
                class="block font-semibold mb-2 text-xl underline"
              >
                GrooveDigital LLC
              </a>
              <h6 class="text-sm text-color-light mb-3 italic opacity-70">
                Lakewood Ranch, Florida, USA
              </h6>
              <p class="font-extralight text-color-light text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
                laboriosam et incidunt saepe eaque sit facilis itaque laudantium
                labore officiis placeat praesentium nemo nihil optio ad?
                Perspiciatis earum adipisci enim, fugit accusantium delectus
                perferendis tempore nulla nobis corporis necessitatibus. Fugiat!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import pageMixin from '~/mixins/page';

export default {
  mixins: [pageMixin],
  transition: { name: 'transform3d', mode: '' },

  mounted() {
    this.animateHeader();
  }
};
</script>

<style lang="scss">
.experience-jobs {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 6px;
    bottom: 0;
    width: 1px;
    background: var(--accent-light);
  }
  li {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: -5px;
      top: 6px;
      width: 10px;
      height: 10px;
      background: var(--accent-light);
      border-radius: 50%;
    }
  }
}
</style>
