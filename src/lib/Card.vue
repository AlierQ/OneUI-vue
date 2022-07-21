<template>
  <div class="one-card-basic">
    <div v-if="title" class="one-cardtitle-basic">
      <component :is="title"></component>
    </div>
    <div v-if="body" class="one-cardbody-basic">
      <component :is="body"></component>
    </div>
  </div>
</template>

<script lang="ts">

import {ref} from 'vue';
import CardTitle from '../lib/CardTitle.vue';
import CardBody from '../lib/CardBody.vue';

export default {
  setup(props, context) {
    const defaults = context.slots.default();
    const title = ref(null);
    const body = ref(null);

    defaults.forEach((tag) => {
      if (tag.type === CardTitle) {
        title.value = tag;
      } else if (tag.type === CardBody) {
        body.value = tag;
      }
    });
    return {title, body};
  }
};
</script>

<style lang="scss" scoped>
.one-card-basic {
  border: 1px solid #e8eaec;
  width: 100%;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.4;
  transition: all .25s;

  > .one-cardtitle-basic {
    padding: 14px 16px 14px 16px;
    border-bottom: 1px solid #e8eaec;
  }

  > .one-cardbody-basic {
    padding: 16px 16px 6px 16px;
  }

  &:hover {
    box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
    border-color: #eee;
  }
}

</style>