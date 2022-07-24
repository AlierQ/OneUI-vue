<template>
  <div class="one-menuItem-basic"
       @click="check"
       :class="{checked:checked===name}">
    <slot></slot>
  </div>

</template>

<script lang="ts">
import {inject, Ref} from 'vue';
import {useRouter} from 'vue-router';

export default {
  props: {
    to: {
      type: String
    },
    name: String
  },
  setup(props) {
    const router = useRouter();
    const checked = inject<Ref<string>>('checked');
    const check = () => {
      checked.value = props.name;
      if (props.to !== undefined) {
        router.push({path: props.to});
      }
    };

    return {
      checked,
      check
    };
  }
};
</script>

<style lang="scss">
.one-menuItem-basic {
  color: #515a6e;
  cursor: pointer;
  padding: 14px 24px 14px 43px;
  transition: all .1s;
  position: relative;
  border-right: 2px solid transparent;

  &:hover {
    color: #2d8cf0;
  }

  &.checked {
    color: #2d8cf0;
    background: #f0faff;
    border-right: 2px solid #2d8cf0;
  }
}
</style>