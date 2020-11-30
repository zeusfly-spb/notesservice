<template>
  <div
    class="container"
  >
    
    <div
      class="text-place"
    >
      <div
        class="green-text"
      >
        Заметка пользователя <strong>{{ note && note.user && note.user.login }}</strong>
      </div>
      <span class="mt-1">{{ text }}</span>
      <div
        class="date-place blue-text"
      >
        Время создания: {{ note && note.createdAt | moment('DD/MM/YYYY HH:mm') }}
      </div>  
    </div>

  </div>
</template>

<script>
export default {
  name: 'SharedView',
  computed: {
    note () {
      return this.$store.state.sharedNote
    },
    text () {
      return this.note && this.note.text || ''
    },
    link () {
      return this.$route.params.link && this.$route.params.link.slice(1) || null
    }
  },
  mounted() {
    this.link ? this.$store.dispatch('getSharedNote', this.link) : null          
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .date-place {
    margin-top: 1em;
    padding: .5em;
    background-color: white;
  }
  .text-place {
    padding: .5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50em;
    background-color: #E3F2FD;
    box-shadow: 0.4em 0.4em 5px rgba(122,122,122,0.5);
    border-radius: .3em;
    font-family: Roboto;
  }
</style>
