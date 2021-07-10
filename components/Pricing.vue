<template>
  <div class="flex flex-wrap -mx-2">
    <div class="w-full sm:w-1/2 md:w-1/4 px-2 mb-4 flex flex-col">
      <h2 class="text-accent-light font-semibold text-2xl mb-3">
        pricing
      </h2>
      <p class="text-color-light text-md font-light">
        The price here is just for a rough estimation. It will certainly vary
        based on the nature of a project. Let's finalize the price upon
        discussion :)
      </p>
    </div>
    <div
      v-for="(model, idx) in priceModels"
      :key="idx"
      class="w-full sm:w-1/2 md:w-1/4 px-2 mb-4"
    >
      <div
        class="h-full p-4 flex flex-col items-center justify-center pricing-card border shadow-lg rounded-xl bg-white"
      >
        <component :is="model.thumb" class="w-20 h-20 mb-3"></component>
        <h3 class="text-color-light font-semibold text-lg mb-4">
          {{ model.type }}
        </h3>
        <ul class="pricing-items mb-4">
          <li
            v-for="(feature, id) in features"
            :key="id"
            class="text-sm mb-2"
            :class="{ 'opacity-40': !model.featureIds.includes(id) }"
          >
            {{ feature }}
          </li>
        </ul>
        <h5>
          <span class="font-bold text-accent-dark text-2xl"
            >${{ model.price }}</span
          >
          <span class="font-light">/hour</span>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import progressIcon from '~/assets/images/progress-point.svg?inline';
import projectIcon from '~/assets/images/project.svg?inline';
import moneyIcon from '~/assets/images/money-bag.svg?inline';

export default {
  name: 'Pricing',
  components: { progressIcon, projectIcon, moneyIcon },
  data() {
    return {
      features: [
        'Design to HTML',
        'Animation & Interaction',
        'Vue/React SPA',
        'SSR (Nuxt/Next)',
        'Documentation',
        'API Integration',
        'PWA'
      ],
      priceModels: [
        {
          thumb: 'progress-icon',
          type: 'Basic',
          price: 25,
          featureIds: [0, 1]
        },
        {
          thumb: 'project-icon',
          type: 'Pro',
          price: 35,
          featureIds: [0, 1, 2, 3]
        },
        {
          thumb: 'money-icon',
          type: 'Advanced',
          price: 50,
          featureIds: [0, 1, 2, 3, 4, 5, 6]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.pricing-card {
  transition: transform 0.3s var(--easing-function);
  &:hover {
    transform: translateY(-10px);
  }
}
</style>
