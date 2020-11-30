<template>
 <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
        >
            Удаление заметки
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          Удалить заметку от <strong>{{ deletingNote && deletingNote.createdAt | moment('DD/MM/YYYY HH:mm') }}</strong>?         
        </section>
        <footer class="modal-footer">
            <div>
                <button
                    type="button"
                    class="ns-button mr-1"
                    @click="cancel"
                >
                    Отмена
                </button>
                <button
                    type="button"
                    class="ns-button btn-red"
                    @click="deleteNote"
                >
                    Удалить
                </button>
            </div>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        name: 'Confirm',
        computed: {
          deletingNote () {
            return this.$store.state.deletingNote
          }
        },
        methods: {
          deleteNote () {
            this.$store.dispatch('deleteNote', this.deletingNote.id)                        
          },
          cancel () {
            this.$store.commit('SET_DELETING_NOTE', null)
          }
        }
    }
</script>

<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    border-radius: .3em;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    background-color:  #FF1744;
    border-bottom: 1px solid #eeeeee;
    color: white;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-red {
    color: white;
    background: #FF1744;
    border: 1px solid #FF1744;
    border-radius: .3em;
  }

  .btn-white {
    color: black;
    background: white;
    border: 1px solid white;
    border-radius: 2px;
  }
</style>