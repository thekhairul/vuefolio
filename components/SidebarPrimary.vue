<template>
  <aside
    id="menubar"
    class="shadow-lg h-full w-16 flex flex-col justify-between relative z-20 bg-background-light dark:bg-background-dark"
  >
    <button
      id="sidebar-toggler"
      class="bg-gradient-to-br bg-green-600 flex flex-col from-green-400 h-16 items-center justify-center to-cyan-500"
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
            class="flex justify-center text-2xl text-color-dark dark:text-color-light hover:text-green-600"
            :data-tooltip="item.title"
            data-tooltip-conf="right"
            ><component :is="item.icon" class="fill-current"></component
          ></NuxtLink>
        </li>
      </ul>
    </nav>

    <div>
      <button
        class="flex justify-center items-center w-16 h-16 text-dark dark:text-light"
        @click="changeTheme"
      >
        <sun-icon v-if="theme === 'dark'" class="w-6" />
        <moon-icon v-else class="w-6" />
      </button>
      <a
        href="/KhairulAnik_CV.pdf"
        download=""
        class="flex justify-center items-center w-16 h-16 border-t dark:border-gray-500"
        data-tooltip="Resume"
        data-tooltip-conf="right"
      >
        <fa
          :icon="['fas', 'cloud-download-alt']"
          class="text-green-500 text-2xl"
        />
      </a>
    </div>
  </aside>
</template>

<script>
import WorkIcon from '~/assets/images/briefcase.svg?inline';
import ExperienceIcon from '~/assets/images/graduation-hat.svg?inline';
import HomeIcon from '~/assets/images/home.svg?inline';
import MoonIcon from '~/assets/images/moon.svg?inline';
import BlogIcon from '~/assets/images/pencil.svg?inline';
import ContactIcon from '~/assets/images/phone.svg?inline';
import SunIcon from '~/assets/images/sun.svg?inline';

export default {
  name: 'SidebarPrimary',
  components: {
    HomeIcon,
    WorkIcon,
    ExperienceIcon,
    BlogIcon,
    ContactIcon,
    SunIcon,
    MoonIcon,
  },
  data() {
    return {
      themeObserver: 1,
      navmenus: [
        {
          route: '/',
          icon: 'home-icon',
          title: 'Profile',
        },
        {
          route: '/work',
          icon: 'work-icon',
          title: 'Work',
        },
        {
          route: '/experience',
          icon: 'experience-icon',
          title: 'Experience',
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
    theme: {
      get() {
        if (typeof window !== 'undefined' && this.themeObserver) {
          return localStorage.getItem('khairul:vuefolio:theme');
        }
        return 'dark';
      },
      set(val) {
        localStorage.setItem('khairul:vuefolio:theme', val);
        this.$root.$emit('theme-change', val);
        this.themeObserver += 1;
      },
    },
  },
  methods: {
    handleSidebar() {
      this.$store.commit('toggleSidebar', !this.sidebarOpen);
    },
    changeTheme() {
      const theme = this.theme === 'dark' ? 'light' : 'dark';
      this.theme = theme;
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
