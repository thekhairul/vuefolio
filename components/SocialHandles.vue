<template>
  <ul
    id="social"
    class="flex"
    :class="{
      'justify-start': align === 'left',
      'justify-center': align === 'center',
      'justify-end': align === 'right'
    }"
  >
    <li v-for="(media, idx) in socialMedias" :key="idx" class="p-2">
      <a
        :href="media.url"
        class="
          text-accent-dark
          dark:text-accent-dark
          hover:text-green-600
          text-2xl
        "
        target="_blank"
        :data-tooltip="media.name"
      >
        <fa :icon="['fab', media.icon]"></fa>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      default: 'center',
      validator: val => ['left', 'center', 'right'].includes(val)
    }
  },
  data() {
    return {
      socialMedias: [
        {
          name: 'facebook',
          url: 'https://www.facebook.com/khairulislam.anik.77',
          icon: 'facebook'
        },
        {
          name: 'github',
          url: 'https://github.com/thekhairul',
          icon: 'github'
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/khairulanik/',
          icon: 'linkedin'
        }
      ]
    };
  }
};
</script>

<style></style>
