<template>
  <ul id="social" class="flex justify-center">
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
  data() {
    return {
      socialMedias: [
        {
          name: 'facebook',
          url: 'https://www.facebook.com/khairulislam.anik.77',
          icon: 'facebook',
        },
        {
          name: 'github',
          url: 'https://github.com/thekhairul',
          icon: 'github',
        },
        {
          name: 'medium',
          url: 'https://www.facebook.com/khairulislam.anik.77',
          icon: 'medium',
        },
      ],
    };
  },
};
</script>

<style></style>
