<template>
  <div id="skills" class="px-4">
    <ul>
      <li v-for="(skill, idx) in skills" :key="idx">
        <h6>{{ skill.name }}</h6>
        <div class="relative h-4 bg-gray-300">
          <span
            v-for="(phase, id) in skillPhases"
            :key="id"
            :style="getSkillPhaseStyle(phase, skill.phase)"
            class="absolute rounded-full inline-block"
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
  data() {
    return {
      skills: [
        {
          name: 'Javascript',
          phase: 'Expert',
        },
        {
          name: 'Vue',
          phase: 'Advanced',
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
      const color = phaseIndex <= currentPhaseIndex ? 'blue' : 'black';
      const width = phaseIndex === currentPhaseIndex ? '12px' : '6px';
      const height = width;
      const left = (100 / this.skillPhases.length) * (phaseIndex + 1);

      return {
        width,
        height,
        backgroundColor: color,
        top: '50%',
        left: `${left}%`,
        transform: 'translate(-50%, -50%)',
      };
    },
  },
};
</script>

<style></style>
