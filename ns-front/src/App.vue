<template>
  <div id="app" class="container">
    <register-view/>
  </div>
</template>

<script>
import RegisterView from './components/RegisterView.vue'

export default {
  name: 'App',
  components: {
    RegisterView
  }
}
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
