<template>
  <div class="one-codesection-basic">
    <div @click="copyCode" class="one-codesection-copy">
      <transition name="copy" mode="out-in">
        <svg v-if="!isCopy" width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163"
            stroke="#515a6e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path
            d="M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z"
            fill="none" stroke="#515a6e" stroke-width="3" stroke-linejoin="round"/>
        </svg>
        <svg v-else width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 24L9 19L19 29L39 9L44 14L19 39L4 24Z" fill="none"
                stroke="#19be6b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
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