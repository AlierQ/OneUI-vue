<template>
  <teleport to="body">
    <div class="one-message-basic" :class="type">{{ content }}</div>
  </teleport>
</template>

<script lang="ts">
export default {
  props: {
    type: {
      type: String
    },
    content: {
      type: String
    }
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
  animation: Message 2s ease;

  &.info {
    background: #2d8cf0;
  }

  &.warning {
    background: #e96900;
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