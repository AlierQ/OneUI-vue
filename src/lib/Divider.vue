<template>
  <div v-if="!isText" class="one-divider-notext-basic"
       :class="{['one-divider-notext-dashed']:isDashed}">
  </div>
  <div v-else ref="textContainer"
       class="one-divider-text-basic"
       :class="{['one-divider-text-dashed']:isDashed}">
    <span ref="textContent"
          class="one-divider-text"
          :class="direction"
          :style="{
            '--left-width':leftWidth + 'px',
            '--right-width':rightWidth + 'px',
          }">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import {computed, onMounted, ref, useSlots} from 'vue';

export default {
  props: {
    dashed: {
      type: String
    },
    direction: {
      type: String,
      default: 'center'
    }
  },
  setup(props, context) {
    let isDashed = computed(() => {
      return props.dashed === '' || props.dashed === 'true';
    });

    let isText = ref(false);
    // slot有传入值
    if (!!useSlots().default) {
      if (!(context.slots.default().length === 1 && (context.slots.default()[0].type.toString() === 'Symbol(Text)' || context.slots.default()[0].type.toString() === 'Symbol()'))) {
        throw new Error('only one string can be passed inside Divider');
      }
      isText.value = true;
    }

    const textContainer = ref<HTMLDivElement>(null);
    const textContent = ref<HTMLSpanElement>(null);
    const leftWidth = ref(null);
    const rightWidth = ref(null);
    onMounted(() => {
      if (textContainer.value !== null) {
        if (textContent.value !== null) {
          leftWidth.value = textContent.value.getBoundingClientRect().x - textContainer.value.getBoundingClientRect().x;
          rightWidth.value = textContainer.value.getBoundingClientRect().width - textContent.value.getBoundingClientRect().width - leftWidth.value;
        }
      }
    });
    return {
      isDashed,
      isText,
      textContainer,
      textContent,
      leftWidth,
      rightWidth,
    };
  }
};
</script>

<style lang="scss" scoped>
.one-divider-notext-basic {
  background: none;
  border-top: 1px solid #e8eaec;
  margin: 20px 0;
  position: relative;

  &.one-divider-notext-dashed {
    border-top: 1px dashed #e8eaec;
  }
}

.one-divider-text-basic {
  padding: 20px 0;
  position: relative;

  > .one-divider-text {
    $left-width: var(--left-width);
    $right-width: var(--right-width);
    display: inline-block;
    position: absolute;
    font-size: 14px;
    top: 50%;
    transform: translateY(-50%);
    vertical-align: middle;
    padding: 0 10px;
    background: transparent;

    &.center {
      left: 50%;
    }

    &.left {
      left: 5%;
    }

    &.right {
      right: 5%;
    }

    &:before {
      content: '';
      position: absolute;
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
      width: $left-width;
      border-top: 1px solid #e8eaec;
    }

    &:after {
      content: '';
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      width: $right-width;
      border-top: 1px solid #e8eaec;
    }
  }

  &.one-divider-text-dashed {
    > .one-divider-text {

      &:before {
        border-top: 1px dashed #e8eaec;
      }

      &:after {
        border-top: 1px dashed #e8eaec;
      }
    }
  }
}

</style>