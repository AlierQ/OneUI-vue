<template>
  <teleport to="body">
    <div class="one-message-basic">
      <div class="one-message-icon">
        <div v-if="type==='info'">
          <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"
              fill="#2d8cf0" stroke="#2d8cf0" stroke-width="3" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M24 11C25.3807 11 26.5 12.1193 26.5 13.5C26.5 14.8807 25.3807 16 24 16C22.6193 16 21.5 14.8807 21.5 13.5C21.5 12.1193 22.6193 11 24 11Z"
                  fill="#FFF"/>
            <path d="M24.5 34V20H23.5H22.5" stroke="#FFF" stroke-width="3" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M21 34H28" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div v-else-if="type==='warning'">
          <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"
              fill="#e96900" stroke="#e96900" stroke-width="3" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z"
                  fill="#FFF"/>
            <path d="M24 12V28" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div v-else-if="type==='success'">
          <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"
              fill="#19be6b" stroke="#19be6b" stroke-width="3" stroke-linejoin="round"/>
            <path d="M16 24L22 30L34 18" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div v-else-if="type==='error'">
          <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
              fill="#ed4014" stroke="#ed4014" stroke-width="3" stroke-linejoin="round"/>
            <path d="M29.6567 18.3432L18.343 29.6569" stroke="#FFF" stroke-width="3" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M18.3433 18.3432L29.657 29.6569" stroke="#FFF" stroke-width="3" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="one-message-content">{{ content }}</div>
    </div>
  </teleport>
</template>

<script lang="ts">
import {ref} from 'vue';
import Icon from '../Icon/Icon.vue';

export default {
  components: {
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
    return {types, colors};
  }
};
</script>

<style lang="scss">
.one-message-basic {
  position: absolute;
  z-index: 99999;
  top: 0;
  left: 50%;
  font-size: 15px;
  transform: translate(-50%, -110%);
  background: white;
  padding: 12px 14px;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  animation: Message 1.5s ease;

  > .one-message-icon {
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }

  > .one-message-content {
    max-width: 800px;
  }

  @media (max-width: 500px) {
    > .one-message-content {
      max-width: 260px;
    }
  }

}

@keyframes Message {
  0% {
    opacity: 0;
    transform: translate(-50%, -110%);
  }
  35%, 40%, 45%, 50%, 55%, 60%, 65% {
    opacity: 1;
    transform: translate(-50%, 0%);
    top: 20px;
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -110%);
  }
}
</style>