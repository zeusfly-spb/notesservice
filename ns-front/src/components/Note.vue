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
            align="right"
            class="actions"
        >
            <i 
                class="material-icons small valign blue clickable"
                title="Редактировать"
            >
                share
            </i>
            <i 
                class="material-icons small valign green-text clickable"
                title="Редактировать"
            >
                edit
            </i>
            <i 
                class="material-icons small valign red-text clickable"
                title="Удалить"
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
        }
    }
</script>

<style scoped>
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