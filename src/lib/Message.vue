<template>
  <teleport to="body">
    <div class="one-message-basic" :class="type">
      <div class="one-message-icon">
        <Icon :icon-class="types[type]" size="16" :color="colors[type]"></Icon>
      </div>
      <div class="one-message-content">{{ content }}</div>
    </div>
  </teleport>
</template>

<script lang="ts">
import {ref} from 'vue';
import Icon from '../lib/Icon.vue'
export default {
  components:{
    Icon
  },
  props: {
    type: {
      type: String
    },
    content: {
      type: String
    }
  },
  setup() {
    const types = ref({
      info: 'info-fill',
      warning: 'attention-fill',
      success: 'check-fill',
      error: 'close-fill'
    });
    const colors = ref({
      info: '#2d8cf0',
      warning: '#e96900',
      success: '#19be6b',
      error: '#ed4014'
    });
    return {types,colors};
  }
};
</script>

<style lang="scss">
.one-message-basic {
  position: absolute;
  z-index: 99999;
  top: -50px;
  left: 50%;
  font-size: 14px;
  transform: translateX(-50%);
  background: white;
  padding: 12px 14px;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
  animation: Message 1.5s ease;

  > .one-message-icon {
    display: inline-block;
    vertical-align: middle;
    padding-right: 10px;
  }

  > .one-message-content {
    display: inline-block;
  }

}

@keyframes Message {
  0% {
    opacity: 0;
    top: -50px;
  }
  35%, 40%, 45%, 50%, 55%, 60%, 65% {
    opacity: 1;
    top: 24px;
  }
  100% {
    opacity: 0;
    top: -50px;
  }
}
</style>