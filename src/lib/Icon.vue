<template>
  <svg :class="svgClass" :style="{'--size':size + 'px','--color':color}" aria-hidden="true">
    <use v-bind:xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  name: 'baseSvgIcon',
  props: {
    iconClass: {type: String},
    className: {type: String},
    size: {type: String, default: '20'},
    color: {type: String, default: '#515a6e'},
  },
  setup(props) {
    const iconName = computed(() => {
      return props.iconClass ? `#icon-${props.iconClass}` : '#icon';
    });
    const svgClass = computed(() => {
      return props.className ? 'svg-icon ' + props.className : 'svg-icon';
    });
    return {iconName, svgClass};
  },
};
</script>

<style lang="scss">
.svg-icon {
  $size: var(--size);
  $color: var(--color);
  width: $size;
  height: $size;
  color: $color;
}
</style>