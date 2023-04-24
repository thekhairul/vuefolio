<template>
  <ul class="max-w-4xl experience-card">
    <li v-for="(card, idx) in cards" :key="idx" class="pl-4 mb-4">
      <h5 class="mb-2 text-color-accent tracking-wider">
        {{ card.period }}
      </h5>

      <div class="p-4 rounded-xl bg-white dark:bg-background-dark shadow-lg">
        <h6 class="font-extralight mb-2 text-xl italic">
          {{ card.title }}
        </h6>
        <a
          target="_blank"
          :href="card.companyUrl"
          class="block font-semibold mb-2 text-xl underline"
        >
          {{ card.companyName }}
        </a>
        <h6 class="text-color-light tracking-wide mb-3 italic opacity-70">
          {{ card.companyAddress }}
        </h6>
        <ul
          class="text-color-light list-disc list-inside"
          v-html="card.description"
        ></ul>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ExperienceCard',
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.experience-card {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 6px;
    bottom: 0;
    width: 1px;
    background: var(--color-accent);
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
      background: var(--color-accent);
      border-radius: 50%;
    }
  }
}
</style>
