<template>
    <div>
        <button
            class="ns-button blue ripple"
            @click="showDialog"
        >
            Добавить заметку
        </button>
        <table class="mt-1">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Текст</th>
                    <th>Дата создания</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                <note
                    v-for="(item, index) in notes"
                    :key="index"
                    :note="item"
                    :index="index"
                />
            </tbody>
        </table>
        <modal
            v-show="dialog || editingNote"
            @close="hideDialog"
        />
        <confirm
            v-show="confirm"
        />
    </div>
</template>

<script>
    // eslint-disable-next-line no-unused-vars
    import Note from './Note'
    import Modal from './Modal'
    import Confirm from './Confirm'
    export default {
        name: 'Notes',
        computed: {
            confirm () {
                return !!this.$store.state.deletingNote
            },
            editingNote () {
                return this.$store.state.editingNote
            },
            dialog: {
                get () {
                    return this.$store.state.dialog
                },
                set (val) {
                    this.$store.commit('SET_DIALOG_VALUE', val)
                }
            },
            notes () {
                return this.$store.state.notes
            }
        },
        methods: {
            hideDialog () {
                this.$store.commit('SET_DIALOG_VALUE', false)
            },
            showDialog () {
                this.$store.commit('SET_EDITING_NOTE', null)
                this.$store.commit('SET_DIALOG_VALUE', true)
            }
        },
        components: {
            Confirm,
            Modal,
            Note
        }
    }
</script>

<style scoped>
    table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid grey;
    } 
    th {
        border: 1px solid grey;
    }
    td {
        border: 1px solid grey;
    }
</style>