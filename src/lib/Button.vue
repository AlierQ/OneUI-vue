<template>
  <button class="basic"
  :class="{[`type-${type}`]:type}">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default:'button'
    }
  }
};
</script>

<style lang="scss" scoped>
.basic {
  background: white;
  height: 30px;
  color: #515a6e;
  line-height: 30px;
  border: none;
  border-radius: 4px;
  padding:0 15px;
  cursor: pointer;
  vertical-align: middle;
}
.type-button{
  border: 1px solid #dcdee2;
  transition: all .4s;
  &:hover{
    border: 1px solid #409eff;
    color: #409eff;
  }
  &:focus{
    outline: none;
    box-shadow: 0 0 4px #84c1fb;
  }
}
.type-primary{
  background: #409eff;
  transition: all .4s;
  color: white;
  &:hover{
    background: #5cadff;
  }
  &:focus{
    outline: none;
    box-shadow: 0 0 4px #84c1fb;
  }
}
.type-dashed{
  border: 1px dashed #dcdee2;
  transition: all .4s;
  color: #515a6e;
  &:hover{
    border: 1px dashed #409eff;
    color: #409eff;
  }
  &:focus{
    outline: none;
    box-shadow: 0 0 4px #84c1fb;
  }
}
.type-text{
  transition: all .4s;
  color: #515a6e;
  &:hover{
    color: #409eff;
  }
  &:focus{
    outline: none;
    box-shadow: 0 0 4px #84c1fb;
  }
}
.type-info{
  transition: all .4s;
  background: #2db7f5;
  color: #ffffff;
  &:hover{
    background: #57c5f7;
  }
  &:focus{
    outline: none;
    box-shadow: 0 0 4px #84c1fb;
  }
}
.type-success{
  transition: all .4s;
  background: #19be6b;
  color: #ffffff;
  &:hover{
    background: #47cb89;
  }
  &:focus{
    outline: none;
    box-shadow: 0 0 4px #84c1fb;
  }
}
.type-success{
  transition: all .4s;
  background: #19be6b;
  color: #ffffff;
  &:hover{
    background: #47cb89;
  }
  &:focus{
    outline: none;
    box-shadow: 0 0 4px #84c1fb;
  }
}
.type-warning{
  transition: all .4s;
  background: #ff9900;
  color: #ffffff;
  &:hover{
    background: #ffad33;
  }
  &:focus{
    outline: none;
    box-shadow: 0 0 4px #84c1fb;
  }
}
.type-error{
  transition: all .4s;
  background: #ed4014;
  color: #ffffff;
  &:hover{
    background: #f16643;
  }
  &:focus{
    outline: none;
    box-shadow: 0 0 4px #84c1fb;
  }
}
</style>