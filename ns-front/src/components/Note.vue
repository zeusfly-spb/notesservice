<template>
    <tr>
        <td
            align="center"
            class="index"
        >
        {{ index + 1 }}
        </td>
        <td>
            <span class="note-text">{{ note.text }}</span>
        </td>
        <td
            align="center"
            class="created"
        >
            {{ note.createdAt | moment('DD/MM/YY HH:mm') }}
        </td>
        <td
            align="center"
            class="link-field uselect"
        >
            <i
                v-if="note.link" 
                class="material-icons clickable valign green-text"
                title="Скопировать ссылку"
                v-clipboard="link"
                @success="infoLink"
            >
                link
            </i>
        </td>
        <td
            align="right"
            class="actions uselect"
        >
            <i 
                class="material-icons small valign blue clickable"
                title="Поделиться"
                @click="shareNote"
            >
                share
            </i>
            <i 
                class="material-icons small valign green-text clickable"
                title="Редактировать"
                @click="toEdit"
            >
                edit
            </i>
            <i 
                class="material-icons small valign red-text clickable"
                title="Удалить"
                @click="toDelete"
            >
                delete
            </i>
        </td>
    </tr>
</template>
<script>
    export default {
        name: 'Note',
        props: {
            index: Number,
            note: Object
        },
        computed: {
            link () {
                return `${document.location.host}/shared/${this.note.link}`
            },
            shared () {
                return !!this.note.link
            }
        },
        methods: {
            infoLink () {
                alert('Ссылка скопирована в буфер обмена')
            },
            shareNote () {
                this.$store.dispatch('shareNote', {
                    note_id: this.note.id,
                    mode: !this.shared
                })
            },
            toEdit () {
                this.$store.commit('SET_EDITING_NOTE', this.note)
            },
            toDelete () {
                this.$store.commit('SET_DELETING_NOTE', this.note)
            }
        }
    }
</script>

<style scoped>
    .link-field {
        width: 2em;
    }
    .note-text {
        margin-left: 0.2em;
    }
    .index {
        width: 3em;
    }
    .created {
        width: 10em;
    }
    .actions {
        width: 4em;
    }
    tr {
        border: 1px solid grey;
    }
    td {
        border: 1px solid grey;
    }

</style>