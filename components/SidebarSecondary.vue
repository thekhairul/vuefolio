<template>
  <aside
    id="intro"
    class="
      sidebar
      flex flex-col
      h-full
    "
  >
    <div
      class="sidebar-avatar text-center p-4 bg-gray-50 border-b dark:border-gray-500"
    >
      <img
        ref="avatar"
        src="~/assets/images/thekhairul.jpg"
        alt=""
        class="w-40 h-40 border rounded-full my-4 mx-auto"
      />
      <h3 class="font-semibold uppercase tracking-wider text-gray-600">
        Khairul Anik
      </h3>
      <h5>Web Frontend Engineer</h5>
      <social-handles />
    </div>

    <div
      class="flex flex-col h-full justify-between max-h-full pt-3 bg-background-light dark:bg-background-dark"
    >
      <div class="flex-grow">
        <div class="px-4 mb-4">
          <h4 class="font-extralight">
            <b class="font-medium">Residence:</b> Bangladesh
          </h4>
          <h4 class="font-extralight">
            <b class="font-medium">City:</b> Dhaka
          </h4>
          <!-- <h4 class="font-extralight">
            <b class="font-medium">Age:</b>
            {{ new Date().getFullYear() - 1993 }}
          </h4> -->
          <hr class="mt-4 dark:border-gray-500" />
        </div>

        <skillsbar />
      </div>

      <div class="flex border-t dark:border-gray-500 h-16">
        <div
          class="
            en
            flex-1 flex flex-col
            justify-center
            items-center
            border-r
            dark:border-gray-500
          "
          data-tooltip="English"
        >
          <progress-ring
            :radius="25"
            :progress="75"
            :stroke="4"
            stroke-color="var(--accent-dark)"
            fill-color="rgba(16, 185, 129, 0.7)"
            label="En"
          />
        </div>
        <div
          class="
            bn
            flex-1 flex
            justify-center
            items-center
            border-r
            dark:border-gray-500
          "
          data-tooltip="Bangla"
        >
          <progress-ring
            :radius="25"
            :progress="100"
            :stroke="4"
            stroke-color="var(--accent-dark)"
            fill-color="rgba(16, 185, 129, 0.7)"
            label="Bn"
          />
        </div>
        <div
          class="hn flex-1 flex justify-center items-center"
          data-tooltip="Hindi"
        >
          <progress-ring
            :radius="25"
            :progress="50"
            :stroke="4"
            stroke-color="var(--accent-dark)"
            fill-color="rgba(16, 185, 129, 0.7)"
            label="Hn"
          />
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import VanillaTilt from 'vanilla-tilt';

export default {
  name: 'SidebarSecondary',
  mounted() {
    if (window.innerWidth > 1440) {
      this.$store.commit('toggleSidebar', true);
    }
    VanillaTilt.init(this.$refs.avatar, { scale: 1.2 });
  }
};
</script>

<style lang="scss">
.sidebar {
  box-shadow: 20px 0px 0px var(--background-light);
  &-avatar {
    background: rgba(255, 255, 255, 0.9);
  }
}
</style>
