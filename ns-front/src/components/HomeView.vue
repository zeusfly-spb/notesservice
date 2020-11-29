<template>
    <div>
        <div
            class="home-header"
        >
            <span
                style="margin-left: 1em"
            >
                Личный кабинет <span class="user-name">{{ userName }}</span>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeView',
        data: () => ({
        }),
        computed: {
            userName () {
                return this.authUser && this.authUser.login || ''
            },
            authUser () {
                return this.$store.state.authUser
            }
        },
        mounted () {
        }
    }
</script>

<style scoped>
    i {color: rgba(0,0,0,.54);}
    a {
        text-decoration: none;
        font-size: small;
    }
    input {outline:none;}
    .user-name {
        color: #1565C0;
        font-weight: bold;
    }
    .home-header {
        display: flex;
        align-items: center;
        height: 4em;
        background-color: #f5f5f5;
        box-shadow: 0.4em 0.4em 5px rgba(122,122,122,0.5);
        border-radius: .3em;
    }    
</style>