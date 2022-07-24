<template>
  <div class="one-menutitle-basic" @click="toggle">
    <div class="one-menutitle-text">
      <slot></slot>
    </div>
    <div class="one-menutitle-icon"
         :class="{toggle:isOpen}">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#515a6e" d="M36 18 24 30 12 18"
              data-follow-stroke="#515a6e"/>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import {inject, Ref, ref} from 'vue';

export default {
  props: {
    name: String
  },
  setup(props) {
    const isOpen = ref(false);

    const state = inject<Ref<object>>('titles');

    const toggle = () => {
      isOpen.value = !isOpen.value;
      state.value[props.name] = !state.value[props.name];
    };
    return {
      isOpen,
      toggle
    };
  }
};
</script>

<style lang="scss">
.one-menutitle-basic {
  color: #515a6e;
  cursor: pointer;
  padding: 14px 24px 14px 24px;
  transition: all .25s;
  display: flex;
  justify-content: space-between;

  &:hover {
    color: #2d8cf0;
  }

  > .one-menutitle-text {
    max-width: 160px;
  }

  > .one-menutitle-icon {
    position: relative;

    > svg {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 18px;
      height: 18px;
      transition: all .25s;
    }
  }
}

.one-menutitle-icon {
  &.toggle {
    > svg {
      transform: translateY(-50%) rotate(180deg);
    }
  }
}

</style>