<template>
<div
    class="container"
>
    <div
        class="login-form"
    >
        <div
            class="title"
        >
            Авторизация
        </div>
        <div
            class="credentials"
        >
            <i 
                class="material-icons small valign"
                title="Имя пользователя"
            >
                person
            </i>
            <input 
                type="text"
                v-model="login"
                ref="loginInput"
                placeholder="Имя пользователя"
            >
        </div>
        <div
            class="credentials"
        >
            <i
                class="material-icons"
                title="Пароль"
            >
                lock
            </i>
            <input 
                type="password"
                v-model="password"
                placeholder="Пароль"
                @keyup.enter="logIn"
            >
        </div>
        <div>
            <button
                @click="logIn"
            >
                Войти
            </button>
        </div>
        <div
            class="footer-login"
        >
            <router-link to="/register">
                Регистрация
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'LoginView',
        data: () => ({
            login: '',
            password: ''
        }),
        computed: {
            authUser () {
                return this.$store.state.authUser
            },
            valid () {
                return this.login.length > 0 && this.password.length > 0
            }
        },
        methods: {
            logIn () {
                if (!this.valid) { return }
                this.$store.dispatch('logIn', {
                    login: this.login,
                    password: this.password
                })
                .then(() => {})
                .catch(e => alert(e))
            }
        },
        mounted () {
            this.authUser ? this.$router.replace('/home') : null
            this.$refs.loginInput.focus()
        },
        watch: {
            authUser (val) {
                val ? this.$router.replace('/home') : null
            }
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
    .footer-login {
        padding-right: 1em;
        justify-content: flex-end;
        display: inline-flex;
    }
    .credentials {
        display: inline-flex;
        vertical-align: middle;
        align-items: center;
        margin: .3em;
        justify-content: center;
    }
    .title {
        margin: .5em;
        color: #424242;
    }
    .login-form {
        display: flex;
        flex-direction: column;
        width: 30em;
        height: 9em;
        background-color: #E3F2FD;
        box-shadow: 0.4em 0.4em 5px rgba(122,122,122,0.5);
        border-radius: .3em;
        font-family: Roboto;
    }
</style>