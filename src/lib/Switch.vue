<template>
  <span class="text"
        v-if="activeText"
        :class="{checked:!value}"
        :style="{'--text-color':textColor}">
    {{ activeText }}
  </span>
  <button :class="{
            on:value,
            disabled:(disabled===''||disabled==='true')
          }"
          :disabled="isDisabled"
          :style="{
            '--active-color':activeColor,
            '--inactive-color':inactiveColor,
            '--point-color':pointColor,
          }"
          @click="toggle">
    <span></span>
  </button>
  <span class="text"
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
    value: {
      type: Boolean
    },
    activeColor: {
      type: String
    },
    inactiveColor: {
      type: String
    },
    pointColor: {
      type: String
    },
    activeText: {
      type: String
    },
    inactiveText: {
      type: String
    },
    textColor: {
      type: String
    },
    disabled: {
      type: String,
      default:'false'
    },
  },
  setup(props, content) {
    const toggle = () => {
      content.emit('update:value', !props.value);
    };
    let isDisabled = computed(()=>{
      if (props.disabled === '' || props.disabled === 'true')
        return true
      else if (props.disabled === 'false')
        return false
    })
    return {
      toggle,
      isDisabled
    };
  }
};
</script>

<style lang="scss" scoped>
$point-color: var(--point-color, #ffffff);
$active-color: var(--active-color, #409eff);
$inactive-color: var(--inactive-color, #dcdfe6);
$text-color: var(--text-color, #409eff);
$button-height: 22px;
$span-height: $button-height - 4px;
.text {
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

button {
  vertical-align: middle;
  height: $button-height;
  width: $button-height*2;
  border: none;
  background: $inactive-color;
  border-radius: $button-height / 2;
  position: relative;
  transition: all .5s ease;

  > span {
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

  &.on {
    background: $active-color;

    > span {
      left: calc(100% - #{$span-height} - 2px);
      animation: pang 0.2s;
    }

    @keyframes pang {
      0% {
        width: $span-height
      }
      50% {
        width: $span-height + 2px
      }
      100% {
        width: $span-height
      }
    }
  }

  &:focus {
    outline: none;
  }

  &.disabled {
    opacity: .8;
    cursor: not-allowed;
  }
}
</style>