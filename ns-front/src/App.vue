<template>
  <div 
    id="app"
    class="main-layout"
  >
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    token () {
      return this.$store.state.token
    },
    authUser () {
      return this.$store.state.authUser
    }    
  }
 }
</script>

<style>
  .clickable {
    opacity: .7;
    cursor: pointer;
  }
  .clickable:hover {
    opacity: 1;
  }
  .main-layout {
    font-family: Roboto;
  }
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
