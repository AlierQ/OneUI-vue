<template>
  <div>
    <MyComponent></MyComponent>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyComponent from './components/MyComponent.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    MyComponent
  }
}
</script>
