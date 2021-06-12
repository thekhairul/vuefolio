<template>
  <aside
    id="menubar"
    class="
      shadow-lg
      h-full
      w-16
      flex flex-col
      justify-between
      relative
      z-20
      bg-background-light
      dark:bg-background-dark
    "
  >
    <button class="h-16 bg-green-500 hover:bg-green-600" @click="handleSidebar">
      <fa :icon="['fas', 'bars']" class="text-white text-2xl" />
    </button>

    <nav>
      <ul>
        <li
          v-for="(item, idx) in navmenus"
          :key="idx"
          class="text-center px-3 py-4"
        >
          <NuxtLink
            :to="item.route"
            class="
              flex
              justify-center
              text-2xl text-color-light
              dark:text-color-dark
              hover:text-green-600
            "
            :data-tooltip="item.title"
            ><component :is="item.icon" class="fill-current"></component
          ></NuxtLink>
        </li>
      </ul>
    </nav>

    <button
      class="w-16 h-16 border-t dark:border-gray-500"
      data-tooltip="Download Resume"
    >
      <fa
        :icon="['fas', 'cloud-download-alt']"
        class="text-green-500 text-2xl"
      />
    </button>
  </aside>
</template>

<script>
import HomeIcon from '~/assets/images/home.svg?inline';
import WorkIcon from '~/assets/images/briefcase.svg?inline';
import CertificateIcon from '~/assets/images/graduation-hat.svg?inline';
import BlogIcon from '~/assets/images/pencil.svg?inline';
import ContactIcon from '~/assets/images/phone.svg?inline';

export default {
  name: 'SidebarPrimary',
  components: { HomeIcon, WorkIcon, CertificateIcon, BlogIcon, ContactIcon },
  data() {
    return {
      navmenus: [
        {
          route: '/',
          icon: 'home-icon',
          title: 'Profile',
        },
        {
          route: '/work',
          icon: 'work-icon',
          title: 'Experience',
        },
        {
          route: '/certificates',
          icon: 'certificate-icon',
          title: 'Certificates',
        },
        {
          route: '/blog',
          icon: 'blog-icon',
          title: 'Blog',
        },
        {
          route: '/contact',
          icon: 'contact-icon',
          title: 'Contact',
        },
      ],
    };
  },
  methods: {
    handleSidebar() {
      this.$store.commit('toggleSidebar');
    },
  },
};
</script>

<style></style>
