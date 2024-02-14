<template>
  <div id="app">
    <Navbar></Navbar>
    <div style="display: flex;">
      <Sidebar></Sidebar>
      <MainContent></MainContent>
    </div>
  </div>
</template>


<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import MainContent from './components/MainContent.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Navbar,
    MainContent
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
