<template>
    <div>
        <div
            class="home-header"
        >
            <span>
                Личный кабинет <span class="user-name">{{ userName }}</span>
            </span>
            <i
                class="material-icons exit-icon clickable"
                title="Выход"
                @click="logOut"
            >
                exit_to_app
            </i>
        </div>
        <div
            class="work-place"
        >
            <notes/>
        </div>
    </div>
</template>

<script>
    import Notes from './Notes'
    export default {
        name: 'HomeView',
        computed: {
            userName () {
                return this.authUser && this.authUser.login || ''
            },
            authUser () {
                return this.$store.state.authUser
            },
            notes () {
                return this.$store.state.notes
            }
        },
        methods: {
            logOut () {
                this.$store.commit('AUTH_LOGOUT')
                this.$router.replace('/login')
            }
        },
        mounted() {
            this.authUser ? this.$store.dispatch('setNotes', this.authUser.id) : null
        },
        watch: {
            authUser (val) {
                val ? this.$store.dispatch('setNotes', val.id) : null
            }
        },
        components: {
            Notes
        }
    }
</script>

<style scoped>
    .work-place {
        margin-top: 1em;
    }
    i {color: rgba(0,0,0,.54);}
    a {
        text-decoration: none;
        font-size: small;
    }
    input {outline:none;}
    .exit-icon {
        color: #FF6F00;
    }
    .user-name {
        color: #1565C0;
        font-weight: bold;
    }
    .home-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 1em;
        padding-right: 1em;
        height: 4em;
        background-color: #f5f5f5;
        box-shadow: 0.4em 0.4em 5px rgba(122,122,122,0.5);
        border-radius: .3em;
    }    
</style>