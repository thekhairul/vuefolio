<template>
  <div id="skills" class="px-4">
    <ul>
      <li v-for="(skill, idx) in skills" :key="idx" class="mb-2">
        <h6>{{ skill.name }}</h6>
        <div class="relative h-4">
          <div
            class="absolute w-full h-0.5"
            style="top: 50%; margin-top: -1px"
          ></div>
          <div
            class="absolute h-0.5 bg-green-500"
            :style="
              `width: ${getSkillbarWidth(
                skill.phase
              )}%; top: 50%; margin-top: -1px`
            "
          ></div>
          <span
            v-for="(phase, id) in skillPhases"
            :key="id"
            :style="getSkillPhaseStyle(phase, skill.phase)"
            class="rounded-full inline-block"
            :data-tooltip="phase"
          ></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const skillPhases = ['Beginner', 'Professional', 'Expert', 'Advanced'];
export default {
  name: 'Skillsbar',
  data() {
    return {
      skills: [
        {
          name: 'Javascript',
          phase: 'Expert',
        },
        {
          name: 'Vue',
          phase: 'Expert',
        },
        {
          name: 'React',
          phase: 'Professional',
        },
        {
          name: 'Node',
          phase: 'Beginner',
        },
        {
          name: 'Python',
          phase: 'Beginner',
        },
      ],
    };
  },
  computed: {
    skillPhases() {
      return skillPhases;
    },
  },
  methods: {
    getSkillPhaseStyle(phase, currentPhase) {
      const phaseIndex = this.skillPhases.findIndex(skill => skill === phase);
      const currentPhaseIndex = this.skillPhases.findIndex(
        skill => skill === currentPhase
      );
      const color =
        phaseIndex <= currentPhaseIndex
          ? 'rgba(16, 185, 129, 1)'
          : 'rgba(107, 114, 128, 1)';
      const width = phaseIndex === currentPhaseIndex ? '12px' : '6px';
      const height = width;
      const left = (100 / this.skillPhases.length) * (phaseIndex + 1);
      return {
        position: 'absolute',
        width,
        height,
        backgroundColor: color,
        top: '50%',
        left: `${left}%`,
        transform: `translate(-${width}, -50%)`,
        display: phaseIndex !== currentPhaseIndex ? 'none' : 'unset',
      };
    },
    getSkillbarWidth(currentPhase) {
      const currentPhaseIndex = this.skillPhases.findIndex(
        skill => skill === currentPhase
      );
      return (100 / this.skillPhases.length) * (currentPhaseIndex + 1);
    },
  },
};
</script>

<style></style>
