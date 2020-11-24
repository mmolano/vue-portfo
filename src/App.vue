<template>
  <project-view></project-view>
</template>

<script>
  import ProjectView from './components/Portfolio.vue'
  export default {
    name: 'App',
    components: {
      ProjectView
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
