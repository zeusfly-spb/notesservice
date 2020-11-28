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
  name: 'App'
 }
</script>

<style>
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
