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
    editingNote () {
      return this.$store.state.editingNote
    },
    token () {
      return this.$store.state.token
    },
    authUser () {
      return this.$store.state.authUser
    },
    notes () {
      return this.$store.state.notes
    }    
  }
 }
</script>

<style>
  .uselect {
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
  }
  .red-text {
    color: #B71C1C;    
  }
  .green-text {
    color: #4CAF50;
  }
  .ripple {
    background-position: center;
    transition: background 0.8s;
  }
  .ripple:hover {
    background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
  }
  .ripple:active {
    background-color: #6eb9f7;
    background-size: 100%;
    transition: background 0s;
  }
  .blue {
    color: white;
    background-color: #47a7f5;
  }
  .blue-text {
    color: #47a7f5;
    background-color: white;
  }
  .mr-1 {
    margin-right: 1em;
  }
  .mt-1 {
    margin-top: 1em;
  }
  .mb-1 {
    margin-bottom: 1em;
  }
  .ns-button {
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    box-shadow: 0.4em 0.4em 5px rgba(122,122,122,0.5);
    cursor: pointer;
    border-radius: .3em;
    outline: none;
  }
  .bg-green {
    color: white;
    background-color: #4CAF50; /* Green */
  }
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
