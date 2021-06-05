<template>
  <aside
    id="intro"
    class="sidebar flex flex-col h-full w-64 border shadow-lg relative z-10"
  >
    <div class="text-center p-4 border-b mb-4">
      <img
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

    <div class="flex flex-col h-full justify-between max-h-full">
      <div class="flex-grow overflow-y-auto">
        <div class="px-4 mb-4">
          <h4 class="font-extralight">
            <b class="font-medium">Residence:</b> Bangladesh
          </h4>
          <h4 class="font-extralight">
            <b class="font-medium">City:</b> Dhaka
          </h4>
          <h4 class="font-extralight">
            <b class="font-medium">Age:</b>
            {{ new Date().getFullYear() - 1992 }}
          </h4>
          <hr class="mt-4" />
        </div>

        <skillsbar />
      </div>

      <div class="flex border-t h-16">
        <div
          class="en flex-1 flex flex-col justify-center items-center border-r"
          data-tooltip="English"
        >
          <progress-ring
            :radius="25"
            :progress="75"
            :stroke="4"
            stroke-color="rgba(37, 99, 235, 1)"
            fill-color="rgba(59, 130, 246, 1)"
            label="En"
          />
        </div>
        <div
          class="bn flex-1 flex justify-center items-center border-r"
          data-tooltip="Bangla"
        >
          <progress-ring
            :radius="25"
            :progress="100"
            :stroke="4"
            stroke-color="rgba(37, 99, 235, 1)"
            fill-color="rgba(59, 130, 246, 1)"
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
            stroke-color="rgba(37, 99, 235, 1)"
            fill-color="rgba(59, 130, 246, 1)"
            label="Hn"
          />
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SidebarSecondary',
};
</script>

<style lang="scss">
#intro.sidebar {
  position: absolute;
  margin-left: 74px;
  bottom: 0;
  top: 0;
}
</style>
