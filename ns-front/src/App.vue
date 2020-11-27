<template>
  <div id="app" class="container">
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
