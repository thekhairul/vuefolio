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
    <button
      id="sidebar-toggler"
      class="
        bg-gradient-to-br bg-green-600
        flex flex-col
        from-green-400
        h-16
        items-center
        justify-center
        to-cyan-500
      "
      :class="{ active: sidebarOpen }"
      @click="handleSidebar"
    >
      <span class="bar bar-1"></span>
      <span class="bar bar-2"></span>
      <span class="bar bar-3"></span>
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
  computed: {
    sidebarOpen() {
      return this.$store.state.isSidebarOpen;
    },
  },
  methods: {
    handleSidebar() {
      this.$store.commit('toggleSidebar', !this.sidebarOpen);
    },
  },
};
</script>

<style lang="scss">
#sidebar-toggler {
  position: relative;
  .bar {
    display: block;
    height: 2px;
    width: 35px;
    background: white;
    border-radius: 5px;
    margin-top: 4px;
    margin-bottom: 4px;
    transition: transform 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &:not(.active) {
    &:hover .bar {
      margin-bottom: 6px;
    }
    .bar {
      transition: margin-bottom 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
  &.active {
    .bar-1 {
      position: absolute;
      transform: translateX(-8px) translateY(-9px) rotateZ(-45deg);
      width: 25px;
    }
    .bar-3 {
      position: absolute;
      transform: translateX(-8px) translateY(9px) rotateZ(45deg);
      width: 25px;
    }
  }
}
</style>
