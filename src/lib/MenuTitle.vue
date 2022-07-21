<template>
  <div class="one-menutitle-basic" @click="toggle">
    <slot></slot>
    <div class="one-menutitle-icon"
         :class="{toggle:isOpen}">
      <svg class="iconpark-icon">
        <use href="#down"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  setup() {
    const isOpen = ref(false);

    const toggle = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggle
    };
  }
};
</script>

<style lang="scss" scoped>
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