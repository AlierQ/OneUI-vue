<template>
  <span class="one-switch-text"
        v-if="activeText"
        :class="{checked:!value}"
        :style="{'--text-color':textColor}">
    {{ activeText }}
  </span>
  <button class="one-switch-basic"
          :class="{
            ['one-switch-on']:value,
            ['one-switch-disabled']:isDisabled
          }"
          :disabled="isDisabled"
          :style="{
            '--active-color':activeColor,
            '--inactive-color':inactiveColor,
            '--point-color':pointColor,
          }"
          @click="toggle">
    <span class="one-switch-point"></span>
  </button>
  <span class="one-switch-text"
        v-if="inactiveText"
        :class="{checked:value}"
        :style="{'--text-color':textColor}">
    {{ inactiveText }}
  </span>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  props: {
    value: Boolean,
    activeColor: String,
    inactiveColor: String,
    pointColor: String,
    activeText: String,
    inactiveText: String,
    textColor: String,
    disabled: {
      type: String,
      default: 'false'
    },
  },
  setup(props, content) {
    const toggle = () => {
      console.log('切换了');
      content.emit('update:value', !props.value);
    };
    const isDisabled = computed(() => {
      return props.disabled === '' || props.disabled === 'true';
    });
    return {
      toggle,
      isDisabled
    };
  }
};
</script>

<style lang="scss">
$point-color: var(--point-color, #ffffff);
$active-color: var(--active-color, #409eff);
$inactive-color: var(--inactive-color, #dcdfe6);
$text-color: var(--text-color, #409eff);
$button-height: 22px;
$span-height: $button-height - 4px;
.one-switch-text {
  color: #333333;
  display: inline-block;
  height: $button-height;
  vertical-align: middle;

  &:nth-of-type(1) {
    padding-right: 10px;
  }

  &:nth-of-type(2) {
    padding-left: 10px;
  }

  &.checked {
    color: $text-color;
  }
}

.one-switch-basic {
  vertical-align: middle;
  height: $button-height;
  width: $button-height*2;
  border: none;
  background: $inactive-color;
  border-radius: $button-height / 2;
  position: relative;
  transition: all .5s ease;

  > .one-switch-point {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $span-height;
    width: $span-height;
    background: $point-color;
    border-radius: $span-height / 2;
    right: 2px;
    transition: all .2s ease;
  }

  &.one-switch-on {
    background: $active-color;

    > .one-switch-point {
      left: calc(100% - #{$span-height} - 2px);
      animation: pang 0.2s;
    }

    @keyframes pang {
      0% {
        padding-left: 0
      }
      50% {
        padding-left: 6px
      }
      100% {
        padding-left: 0
      }
    }
  }

  &.one-switch-disabled {
    opacity: .8;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
}
</style>