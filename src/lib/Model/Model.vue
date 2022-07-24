<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="one-model-overlay" @click="onClickOverlay"></div>
      <div class="one-model-wrapper">
        <div class="one-model">
          <header v-if="modelTitle">{{ modelTitle }}<span @click="close" class="one-model-close"></span></header>
          <main>
            <slot name="content"></slot>
          </main>
          <footer>
            <Button @click="cancel" class="one-model-ok" type="text">取消</Button>
            <Button @click="ok" class="one-model-cancel" type="primary">确定</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>

</template>

<script lang="ts">
import Button from '../Button/Button.vue';

export default {
  name: 'Model',
  components: {Button},
  emits: ['on-ok', 'on-cancel', 'update:visible'],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    modelTitle: {
      type: String
    },
    clickOverlay: {
      type: Boolean,
      default: true
    },
    onOk: {
      type: Function
    },
    onCancel: {
      type: Function
    }
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', !props.visible);
    };
    const ok = () => {
      if (props.onOk !== undefined) {
        if (props.onOk() !== false) {
          close();
        }
      } else {
        context.emit('on-ok', !props.visible);
        close();
      }
    };
    const cancel = () => {
      if (props.onCancel) {
        if (props.onCancel() !== false) {
          close();
        }
      } else {
        context.emit('on-cancel', !props.visible);
        close();
      }

    };
    const onClickOverlay = () => {
      if (props.clickOverlay)
        close();
    };


    return {
      ok,
      close,
      cancel,
      onClickOverlay
    };
  }
};
</script>

<style lang="scss">
.one-model {
  background: white;

  border-radius: 6px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);

  @media (max-width: 500px) {
    width: 320px;
  }

  &-wrapper {
    position: absolute;
    top: 12%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
  }

  &-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
    background: rgba(55, 55, 55, .6);
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    vertical-align: middle;
    color: #999;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: #999;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }

  > header {
    font-size: 16px;
    color: #17233d;
    padding: 14px 16px;
    border-bottom: 1px solid #e8eaec;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }

  > main {
    font-size: 14px;
    color: #515a6e;
    padding: 16px;
    line-height: 1.5;
  }

  > footer {
    padding: 12px 18px 12px 18px;
    border-top: 1px solid #e8eaec;
    text-align: right;

    > .one-model-cancel {
      margin-left: 8px;
    }
  }

}
</style>