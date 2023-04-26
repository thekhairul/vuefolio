<template>
  <div
    id="experience"
    class="experience bg-color-light dark:bg-color-dark h-full overflow-y-auto page-root overflow-x-hidden"
  >
    <div
      class="page-header relative h-80 max-h-80 flex flex-col items-center justify-center bg-background-dark md:p-5"
    >
      <h2
        ref="headerText"
        class="page-header__text text-yellow-300 text-2xl lg:text-6xl text-center lg:text-left mb-2 font-bold"
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
        class="text-white text-center lg:text-left font-light tracking-widest anim-para opacity-0"
      >
        Breathe, sleep, code, repeat.
      </p>
    </div>

    <div class="experience-main p-5">
      <div class="jobs mb-8">
        <h2 class="text-color-accent font-semibold text-2xl mb-3">
          job experience
        </h2>
        <experience-card :cards="jobs" />
      </div>

      <div class="certificates mb-8">
        <h2 class="text-color-accent font-semibold text-2xl mb-3">
          certificates
        </h2>
        <experience-card :cards="certificates" />
      </div>

      <div class="badges mb-8">
        <h2 class="text-color-accent font-semibold text-2xl mb-3">badges</h2>

        <div class="flex flex-wrap md:flex-nowrap gap-4">
          <div class="flex flex-col w-full md:w-auto rounded-xl">
            <img
              :src="require(`~/assets/images/pluralsight-vue-badge.jpeg`)"
              alt=""
              class="md:max-w-xs rounded-t-2xl object-cover object-center"
            />
            <div class="p-4 rounded-b-2xl shadow-xl">
              <h3
                class="text-color-dark dark:text-color-light font-semibold text-xl"
              >
                Vue Expert
              </h3>
            </div>
          </div>

          <div class="flex flex-col w-full md:w-auto rounded-xl">
            <img
              :src="require(`~/assets/images/pluralsight-react-badge.png`)"
              alt=""
              class="md:max-w-xs rounded-t-2xl object-cover object-center"
            />
            <div class="p-4 rounded-b-2xl shadow-xl">
              <h3
                class="text-color-dark dark:text-color-light font-semibold text-xl"
              >
                React Expert
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import certificates from '~/data/certificates';
import jobs from '~/data/jobs';
import pageMixin from '~/mixins/page';

export default {
  mixins: [pageMixin],
  transition: { name: 'transform3d', mode: '' },
  data() {
    return {
      jobs,
      certificates,
    };
  },
  mounted() {
    this.animateHeader();
  },
};
</script>
