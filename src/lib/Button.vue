<template>
  <button class="one-button-basic"
          :class="{
              [`one-button-type-${type}`]:type,
              [`one-button-size-${size}`]:size,
              ['one-button-transparent']:transparent===''||transparent==='true',
              ['one-button-disabled']:disabled===''||disabled==='true',
          }"
          :disabled="(disabled===''||disabled==='true')?true:false">
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
    size: {
      type: String,
      default: 'normal'
    },
    transparent: String,
    disabled: String,
  }
};
</script>

<style lang="scss">
.one-button-basic {
  background: white;
  color: #515a6e;
  border: none;
  border-radius: 4px;
  padding: 0 15px;
  cursor: pointer;
  vertical-align: middle;
  white-space: nowrap;
  transition: all .4s;

  &.one-button-size-big {
    height: 36px;
    line-height: 36px;
    font-size: 16px;
  }

  &.one-button-size-normal {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
  }

  &.one-button-size-small {
    height: 24px;
    line-height: 24px;
    font-size: 12px;
  }

  &.one-button-transparent {
    background: transparent;
  }

  &.one-button-disabled {
    cursor: not-allowed;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px #84c1fb;
  }
}

.one-button-type-button {
  border: 1px solid #dcdee2;

  &.one-button-transparent {
    border: 1px solid #ffffff;
    color: white;

    &.one-button-disabled {
      background: none;
    }
  }

  &:hover {
    border: 1px solid #409eff;
    color: #409eff;
  }

  &.one-button-disabled {
    background: #f7f7f7;
    border: 1px solid #dcdee2;
    color: #dcdee2;
  }
}

.one-button-type-primary {
  background: #409eff;
  transition: all .4s;
  color: white;

  &.one-button-transparent {
    border: 1px solid #409eff;
    color: #409eff;

    &:hover {
      background: rgba(245, 249, 254, .5);
    }

    &.one-button-disabled {
      background: none;
      //border: 1px solid #dcdee2;
      //color: #dcdee2;
    }
  }

  &:hover {
    background: #5cadff;
  }

  &.one-button-disabled {
    background: #f7f7f7;
    border: 1px solid #dcdee2;
    color: #dcdee2;
  }
}

.one-button-type-dashed {
  border: 1px dashed #dcdee2;
  color: #515a6e;

  &.one-button-transparent {
    border: 1px dashed white;
    color: white;

    &.one-button-disabled {
      background: none;
    }
  }

  &:hover {
    border: 1px dashed #409eff;
    color: #409eff;
  }

  &.one-button-disabled {
    background: #f7f7f7;
    border: 1px dashed #dcdee2;
    color: #dcdee2;
  }
}

.one-button-type-text {
  color: #515a6e;

  &.one-button-transparent {
    color: white;
  }

  &:hover {
    color: #409eff;
  }

  &.one-button-disabled {
    color: #dcdee2;
  }

}

.one-button-type-info {
  background: #2db7f5;
  color: #ffffff;

  &.one-button-transparent {
    border: 1px solid #2db7f5;
    color: #2db7f5;

    &:hover {
      background: rgba(245, 249, 254, .5);
    }

    &.one-button-disabled {
      background: none;
    }
  }

  &:hover {
    background: #57c5f7;
  }

  &.one-button-disabled {
    background: #f7f7f7;
    border: 1px solid #dcdee2;
    color: #dcdee2;
  }
}

.one-button-type-success {
  transition: all .4s;
  background: #19be6b;
  color: #ffffff;

  &.one-button-transparent {
    border: 1px solid #19be6b;
    color: #19be6b;

    &:hover {
      background: rgba(245, 249, 254, .5);
    }

    &.one-button-disabled {
      background: none;
    }
  }

  &:hover {
    background: #47cb89;
  }

  &.one-button-disabled {
    background: #f7f7f7;
    border: 1px solid #dcdee2;
    color: #dcdee2;
  }
}

.one-button-type-warning {
  transition: all .4s;
  background: #ff9900;
  color: #ffffff;

  &.one-button-transparent {
    border: 1px solid #ff9900;
    color: #ff9900;

    &:hover {
      background: rgba(245, 249, 254, .5);
    }

    &.one-button-disabled {
      background: none;
    }
  }

  &:hover {
    background: #ffad33;
  }

  &.one-button-disabled {
    background: #f7f7f7;
    border: 1px solid #dcdee2;
    color: #dcdee2;
  }
}

.one-button-type-error {
  transition: all .4s;
  background: #ed4014;
  color: #ffffff;

  &.one-button-transparent {
    border: 1px solid #ed4014;
    color: #ed4014;

    &:hover {
      background: rgba(245, 249, 254, .5);
    }

    &.one-button-disabled {
      background: none;
    }
  }

  &:hover {
    background: #f16643;
  }

  &.one-button-disabled {
    background: #f7f7f7;
    border: 1px solid #dcdee2;
    color: #dcdee2;
  }
}

</style>