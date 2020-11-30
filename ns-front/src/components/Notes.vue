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
            v-show="dialog"
            @close="hideDialog"
        />
    </div>
</template>

<script>
    // eslint-disable-next-line no-unused-vars
    import Note from './Note'
    import Modal from './Modal'
    export default {
        name: 'Notes',
        computed: {
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
                this.$store.commit('SET_DIALOG_VALUE', true)
            }
        },
        components: {
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