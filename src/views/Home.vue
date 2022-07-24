<template>
  <div class="container">
    <TopNav class="top-nav"></TopNav>
    <div class="banner">
      <h1 class="title">
        <span class="color-lump"></span>
        <span class="logo-one">One</span> <span class="logo-ui">UI</span>
      </h1>
      <h2 class="brief">基于 Vue3 的一款简洁易用的前端UI组件</h2>
      <p>
        <a href="">
          <Button size="big"><Icon icon-class="github" size="20"></Icon>Github</Button>
        </a>
        <router-link to="/document">
          <Button type="primary" size="big">开始使用</Button>
        </router-link>
      </p>
      <div class="feature">
        <div class="feature-item">
          <div class="feature-icon">
            <Icon icon-class="vue" size="100"></Icon>
          </div>
          <div class="feature-content">
            <h2 class="feature-title">基于 Vue3</h2>
            <p class="feature-text">UI组件库使用了 Vue3 框架进行开发</p>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            <Icon icon-class="typescript" size="100"></Icon>
          </div>
          <div class="feature-content">
            <h2 class="feature-title">使用 TypeScript</h2>
            <p class="feature-text">UI组件使用了 TypeScript 语法</p>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            <Icon icon-class="yidu-icon" size="100"></Icon>
          </div>
          <div class="feature-content">
            <h2 class="feature-title">代码易读、使用简单</h2>
            <p class="feature-text">组件代码简洁易读，组件使用简单便捷</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import Button from '../lib/Button/Button.vue';

export default {
  components: {TopNav, Button}
};
</script>

<style lang="scss" scoped>

.top-nav {
  &:deep(.toggle-menu) {
    display: none;
  }

  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}

.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
  padding-top: 20vh;
  overflow: hidden;

  > .title {
    position: relative;
    color: #17233d;
    margin-top: 20px;
    font-size: 64px;

    > .color-lump {
      position: absolute;
      background: #409eff;
      right: 0;
      top: -18px;
      border-radius: 3px;
      width: 64px;
      height: 26px;
    }

    > .logo-one {
      color: #409eff;
      font-weight: 600;
    }

    > .logo-ui {
      color: #17233d;
      font-weight: 600;
    }

  }


  > .brief {
    margin: 15px 0;
  }

  > p {
    margin: 5px 0;
    display: flex;

    > a {
      margin: 20px 20px;
    }
  }

  > .feature {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    > .feature-item {
      padding: 20px 0;
      display: flex;
      margin: 0 20px;
      align-items: center;

      > .feature-content {
        margin-left: 20px;
      }
    }
  }

  @media (max-width: 500px) {
    padding-top: 50px;
    > .feature {

      > .feature-item {
        display: flex;
        margin: 0 20px;
        flex-direction: column;

        > .feature-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
    > .brief {
      margin: 10px 0;
      font-size: 20px;
    }
    > p {
      > a {
        margin: 10px 10px;
      }
    }
  }
}
</style>