<template>
  <aside id="menubar" class="border h-full w-16 flex flex-col justify-between">
    <button class="w-16 h-16 bg-blue-500 hover:bg-blue-600">
      <fa :icon="['fas', 'bars']" class="text-white text-2xl" />
    </button>

    <nav>
      <ul>
        <li v-for="(item, idx) in navmenus" :key="idx" class="text-center p-3">
          <NuxtLink :to="item.route"
            ><fa
              :icon="['fas', item.icon]"
              class="text-blue-500 text-2xl hover:text-blue-600"
          /></NuxtLink>
        </li>
      </ul>
    </nav>

    <button class="w-16 h-16 border-t">
      <fa
        :icon="['fas', 'cloud-download-alt']"
        class="text-blue-500 text-2xl"
      />
    </button>
  </aside>
</template>

<script>
export default {
  name: 'SidebarPrimary',
  data() {
    return {
      navmenus: [
        {
          route: '/',
          icon: 'user-circle',
        },
        {
          route: '/work',
          icon: 'briefcase',
        },
        {
          route: '/certificates',
          icon: 'glasses',
        },
        {
          route: '/blog',
          icon: 'blog',
        },
        {
          route: '/contact',
          icon: 'phone-alt',
        },
      ],
    };
  },
};
</script>

<style></style>
