<template>
  <button class="button-basic"
          :class="{
              [`type-${type}`]:type,
              transparent:transparent===''||transparent===true
          }">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    transparent: String
  },
  setup(props, context) {
    console.log('transparent:' + props.transparent);
  }
};
</script>

<style lang="scss">
.button-basic {
  background: white;
  height: 30px;
  color: #515a6e;
  line-height: 30px;
  border: none;
  border-radius: 4px;
  padding: 0 15px;
  cursor: pointer;
  vertical-align: middle;
  white-space: nowrap;
  transition: all .4s;

  &.transparent {
    background: transparent;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px #84c1fb;
  }
}

.type-button {
  border: 1px solid #dcdee2;

  &.transparent {
    border: 1px solid #ffffff;
    color: white;
  }

  &:hover {
    border: 1px solid #409eff;
    color: #409eff;
  }
}

.type-primary {
  background: #409eff;
  transition: all .4s;
  color: white;

  &.transparent {
    border: 1px solid #409eff;
    color: #409eff;

    &:hover {
      background: rgba(245, 249, 254, .5);
    }
  }

  &:hover {
    background: #5cadff;
  }
}

.type-dashed {
  border: 1px dashed #dcdee2;
  color: #515a6e;

  &.transparent {
    border: 1px dashed white;
    color: white;
  }

  &:hover {
    border: 1px dashed #409eff;
    color: #409eff;
  }
}

.type-text {
  color: #515a6e;

  &.transparent {
    color: white;
  }

  &:hover {
    color: #409eff;
  }

}

.type-info {
  background: #2db7f5;
  color: #ffffff;

  &.transparent {
    border: 1px solid #2db7f5;
    color: #2db7f5;

    &:hover {
      background: rgba(245, 249, 254, .5);
    }
  }

  &:hover {
    background: #57c5f7;
  }

}

.type-success {
  transition: all .4s;
  background: #19be6b;
  color: #ffffff;

  &.transparent {
    border: 1px solid #19be6b;
    color: #19be6b;

    &:hover {
      background: rgba(245, 249, 254, .5);
    }
  }

  &:hover {
    background: #47cb89;
  }

}

.type-warning {
  transition: all .4s;
  background: #ff9900;
  color: #ffffff;

  &.transparent {
    border: 1px solid #ff9900;
    color: #ff9900;

    &:hover {
      background: rgba(245, 249, 254, .5);
    }
  }

  &:hover {
    background: #ffad33;
  }

}

.type-error {
  transition: all .4s;
  background: #ed4014;
  color: #ffffff;

  &.transparent {
    border: 1px solid #ed4014;
    color: #ed4014;

    &:hover {
      background: rgba(245, 249, 254, .5);
    }
  }

  &:hover {
    background: #f16643;
  }

}

</style>