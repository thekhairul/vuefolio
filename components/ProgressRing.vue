<template>
  <svg :height="radius * 2" :width="radius * 2">
    <circle
      :stroke="strokeColor"
      :stroke-dasharray="circumference + ' ' + circumference"
      :style="{ strokeDashoffset: strokeDashoffset }"
      :stroke-width="stroke"
      :fill="fillColor"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
    />
    <text
      :x="radius"
      :y="radius"
      text-anchor="middle"
      dominant-baseline="central"
      :stroke="labelColor"
      stroke-width="2px"
      class="font-extralight text-xs tracking-widest"
    >
      {{ label }}
    </text>
  </svg>
</template>

<script>
export default {
  props: {
    radius: {
      type: Number,
      default: 20,
    },
    progress: {
      type: Number,
      default: 100,
    },
    stroke: {
      type: Number,
      default: 2,
    },
    fillColor: {
      type: String,
      default: 'black',
    },
    strokeColor: {
      type: String,
      default: 'white',
    },
    label: {
      type: String,
      default: 'EN',
    },
    labelColor: {
      type: String,
      default: 'white',
    },
  },
  data() {
    const normalizedRadius = this.radius - this.stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    return {
      normalizedRadius,
      circumference,
    };
  },
  computed: {
    strokeDashoffset() {
      return this.circumference - (this.progress / 100) * this.circumference;
    },
  },
};
</script>

<style></style>
