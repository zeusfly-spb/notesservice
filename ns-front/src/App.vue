<template>
  <div id="app" class="container">
    <login-page/>
  </div>
</template>

<script>
import LoginPage from './components/LoginPage.vue'

export default {
  name: 'App',
  components: {
    LoginPage
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
