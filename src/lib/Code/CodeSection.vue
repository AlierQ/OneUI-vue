<template>
  <div class="one-codesection-basic">
    <div @click="copyCode" class="one-codesection-copy">
      <transition name="copy" mode="out-in">
        <svg v-if="!isCopy" class="iconpark-icon">
          <use href="#copy"></use>
        </svg>
        <svg v-else class="iconpark-icon ok">
          <use href="#correct"></use>
        </svg>
      </transition>
    </div>
    <highlightjs autodetect :code="codeString"/>
  </div>
  <slot v-if="false"></slot>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  setup(props, context) {
    const codeString = ref(context.slots.default()[0].children.trim());
    const isCopy = ref(false);
    const copyCode = () => {
      navigator.clipboard.writeText(codeString.value).then(() => {
        isCopy.value = true;
        setTimeout(() => {
          isCopy.value = false;
        }, 2000);
      });
    };
    return {
      codeString,
      isCopy,
      copyCode
    };
  }
};
</script>

<style lang="scss">
.one-codesection-basic {
  width: 100%;
  position: relative;

  > .one-codesection-copy {
    display: none;
    position: absolute;
    width: 30px;
    height: 30px;
    right: 10px;
    top: 10px;
    border-radius: 4px;
    cursor: pointer;

    > svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
    }

    .ok {
      color: #42b983;
    }
  }

  &:hover {
    > .one-codesection-copy {
      display: block;
    }
  }

  @media (max-width: 500px) {
    > .one-codesection-copy {
      display: block;
    }
  }
}

.copy-enter-active, .copy-leave-active {
  transition: opacity .15s ease;
}

.copy-enter-from, .copy-leave-to {
  opacity: 0;
}

pre {
  margin-bottom: 0;
}
</style>