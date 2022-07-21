<template>
  <div v-if="!isText" class="one-divider-notext-basic"
       :class="{['one-divider-notext-dashed']:isDashed}">
  </div>
  <div v-else ref="textContainer"
       class="one-divider-text-basic"
       :class="{['one-divider-text-dashed']:isDashed}">
    <span ref="textContent"
          class="one-divider-text"
          :style="{'--line-width':lineWidth + 'px'}">
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
    }
  },
  setup(props, context) {
    let isDashed = computed(() => {
      return props.dashed === '' || props.dashed === 'true';
    });

    let isText = ref(false);
    // slot有传入值
    if (!!useSlots().default) {
      if (!(context.slots.default().length === 1 && context.slots.default()[0].type.toString() === 'Symbol(Text)')) {
        throw new Error('only one string can be passed inside Divider');
      }
      isText.value = true;
    }

    const textContainer = ref<HTMLDivElement>(null);
    const textContent = ref<HTMLSpanElement>(null);
    const lineWidth = ref(null);
    onMounted(() => {
      if (textContainer.value !== null) {
        if (textContent.value !== null) {
          lineWidth.value = (textContainer.value.getBoundingClientRect().width - textContent.value.getBoundingClientRect().width) / 2;
        }
      }
    });
    return {
      isDashed,
      isText,
      textContainer,
      textContent,
      lineWidth
    };
  }
};
</script>

<style lang="scss" scoped>
.one-divider-notext-basic {
  background: none;
  border-top: 1px solid #e8eaec;
  margin: 24px 0;
  position: relative;

  &.one-divider-notext-dashed {
    border-top: 1px dashed #e8eaec;
  }
}

.one-divider-text-basic {
  padding: 24px 0;
  position: relative;

  > .one-divider-text {
    $line-width: var(--line-width, 70px);
    display: inline-block;
    position: absolute;
    font-size: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    vertical-align: middle;
    padding: 0 10px;
    background: transparent;

    &:before {
      content: '';
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      width: $line-width;
      border-top: 1px solid #e8eaec;
    }

    &:after {
      content: '';
      position: absolute;
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
      width: $line-width;
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