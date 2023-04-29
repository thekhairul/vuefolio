<template>
  <div class="py-2 flex flex-wrap md:flex-nowrap">
    <div
      v-for="(tool, idx) in tools"
      :key="idx"
      class="w-1/2 md:w-1/3 lg:w-auto flex-grow service-card p-4 flex items-center justify-center"
    >
      <figure :data-tooltip="tool.title">
        <component :is="tool.icon" class="w-16 h-16 mb-2"></component>
      </figure>
    </div>
  </div>
</template>

<script>
import BashIcon from '~/assets/images/bash.svg?inline';
import ChromeIcon from '~/assets/images/chrome.svg?inline';
import DockerIcon from '~/assets/images/docker.svg?inline';
import ReactIcon from '~/assets/images/react.svg?inline';
import VscodeIcon from '~/assets/images/vscode.svg?inline';
import VueIcon from '~/assets/images/vue.svg?inline';

export default {
  name: 'Tools',
  components: {
    ReactIcon,
    VueIcon,
    DockerIcon,
    ChromeIcon,
    VscodeIcon,
    BashIcon,
  },
  data() {
    return {
      tools: [
        {
          icon: 'react-icon',
          title: 'React',
        },
        {
          icon: 'vue-icon',
          title: 'Vue',
        },
        {
          icon: 'docker-icon',
          title: 'Docker',
        },
        {
          icon: 'chrome-icon',
          title: 'Chrome',
        },
        {
          icon: 'vscode-icon',
          title: 'VsCode',
        },
        {
          icon: 'bash-icon',
          title: 'Bash',
        },
      ],
    };
  },
};
</script>
