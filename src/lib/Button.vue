<template>
  <button class="one-button-basic"
          :class="classes"
          :disabled="isDisabled || isLoading">
    <span v-if="isLoading" class="one-button-loading-indicator"></span>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';

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
    loading: String,
  },
  setup(props, context) {
    const isDisabled = computed(() => {
      return props.disabled === '' || props.disabled === 'true';
    });
    const isTransparent = computed(() => {
      return props.transparent === '' || props.transparent === 'true';
    });
    const isLoading = computed(() => {
      // 加载和禁用同时出现的时候加载样式不生效
      return (props.loading === '' || props.loading === 'true') && !isDisabled.value;
    });
    const classes = computed(() => {
      return {
        [`one-button-type-${props.type}`]: props.type,
        [`one-button-size-${props.size}`]: props.size,
        ['one-button-transparent']: isTransparent.value,
        ['one-button-disabled']: isDisabled.value,
        ['one-button-loading']: isLoading.value,
      };
    });
    return {
      classes,
      isDisabled,
      isLoading
    };
  }
};
</script>

<style lang="scss">
.one-button-basic {
  background: white;
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

  > .one-button-loading-indicator {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 4px;
    border-radius: 8px;
    border-style: solid;
    border-width: 2px;
    vertical-align: text-top;
    animation: one-loading-spin 1s infinite linear;
  }
}

.one-button-type-button {
  border: 1px solid #dcdee2;
  color: #515a6e;

  &.one-button-transparent {
    border: 1px solid #ffffff;
    color: white;

    &.one-button-disabled {
      background: none;
    }

    & > .one-button-loading-indicator {
      background: none;
      border-color: white white white transparent;
    }

    &.one-button-loading {
      &:hover {
        border: 1px solid white;
        //cursor: default;
      }
    }

    & > .one-button-loading-indicator {
      background: none;
      border-color: white white white transparent;
    }

    &.one-button-loading {
      &:hover {
        color: white;
        //cursor: default;
      }
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

  & > .one-button-loading-indicator {
    background: white;
    border-color: #c5c8ce #c5c8ce #c5c8ce transparent;
  }

  &.one-button-loading {
    &:hover {
      border: 1px solid #dcdee2;
      color: #515a6e;
      //cursor: default;
    }
  }
}

.one-button-type-primary {
  border: 1px solid #409eff;
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
    }

    & > .one-button-loading-indicator {
      background: none;
      border-color: #409eff #409eff #409eff transparent;
    }

    &.one-button-loading {
      background: rgba(245, 249, 254, .5);

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

  & > .one-button-loading-indicator {
    background: #5cadff;
    border-color: white white white transparent;
  }

  &.one-button-loading {
    background: #5cadff;

    &:hover {
      //cursor: default;
    }
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

    & > .one-button-loading-indicator {
      background: none;
      border-color: white white white transparent;
    }

    &.one-button-loading {

      &:hover {
        color: white;
        border: 1px dashed white;
        //cursor: default;
      }
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

  & > .one-button-loading-indicator {
    background: white;
    border-color: #c5c8ce #c5c8ce #c5c8ce transparent;
  }

  &.one-button-loading {
    &:hover {
      border: 1px dashed #bec8c8;
      color: #515a6e;
      //cursor: default;
    }
  }
}

.one-button-type-text {
  color: #515a6e;

  &.one-button-transparent {
    color: white;

    & > .one-button-loading-indicator {
      background: none;
      border-color: white white white transparent;
    }

    &.one-button-loading {
      &:hover {
        color: white;
        //cursor: default;
      }
    }
  }

  &:hover {
    color: #409eff;
  }

  &.one-button-disabled {
    color: #dcdee2;
  }

  & > .one-button-loading-indicator {
    background: white;
    border-color: #c5c8ce #c5c8ce #c5c8ce transparent;
  }

  &.one-button-loading {
    &:hover {
      color: #515a6e;
      //cursor: default;
    }
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

    & > .one-button-loading-indicator {
      background: none;
      border-color: #2db7f5 #2db7f5 #2db7f5 transparent;
    }

    &.one-button-loading {
      background: rgba(245, 249, 254, .5);

      &:hover {
        //cursor: default;
      }
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

  & > .one-button-loading-indicator {
    background: #57c5f7;
    border-color: white white white transparent;
  }

  &.one-button-loading {
    background: #57c5f7;

    &:hover {
      //cursor: default;
    }
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

    & > .one-button-loading-indicator {
      background: none;
      border-color: #19be6b #19be6b #19be6b transparent;
    }

    &.one-button-loading {
      background: rgba(245, 249, 254, .5);

      &:hover {
        //cursor: default;
      }
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

  & > .one-button-loading-indicator {
    background: #47cb89;
    border-color: white white white transparent;
  }

  &.one-button-loading {
    background: #47cb89;

    &:hover {
      //cursor: default;
    }
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

    & > .one-button-loading-indicator {
      background: none;
      border-color: #ff9900 #ff9900 #ff9900 transparent;
    }

    &.one-button-loading {
      background: rgba(245, 249, 254, .5);

      &:hover {
        //cursor: default;
      }
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

  & > .one-button-loading-indicator {
    background: #ffad33;
    border-color: white white white transparent;
  }

  &.one-button-loading {
    background: #ffad33;

    &:hover {
      //cursor: default;
    }
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

    & > .one-button-loading-indicator {
      background: none;
      border-color: #ed4014 #ed4014 #ed4014 transparent;
    }

    &.one-button-loading {
      background: rgba(245, 249, 254, .5);

      &:hover {
        //cursor: default;
      }
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

  & > .one-button-loading-indicator {
    background: #f16643;
    border-color: white white white transparent;
  }

  &.one-button-loading {
    background: #f16643;

    &:hover {
      //cursor: default;
    }
  }
}

@keyframes one-loading-spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

</style>