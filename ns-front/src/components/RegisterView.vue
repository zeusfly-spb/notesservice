<template>
<div
    class="container"
>
    <div
        class="register-form"
    >
        <div
            class="title"
        >
            Регистрация
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
            />
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
            >
        </div>
        <div
            class="credentials"
        >
            <i
                class="material-icons"
                title="Повторный ввод пароля"
            >
                vpn_key
            </i>
            <input 
                type="password"
                v-model="passwordConfirm"
                placeholder="Повторный ввод пароля"
            >
        </div>
        <div>
            <button
                @click="registerUser"
            >
                Регистрировать
            </button>
        </div>
        <div
            class="footer-register"
        >
            <router-link to="/login">
                Войти
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'RegisterView',
        data: () => ({
            login: '',
            password: '',
            passwordConfirm: ''
        }),
        computed: {
            registeredUser () {
                return this.$store.state.registeredUser
            },
            valid () {
                return [this.login, this.password, this.passwordConfirm].every(item => item.length > 0) && this.password === this.passwordConfirm
            }
        },
        methods: {
            registerUser () {
                if (!this.valid) {
                    return
                }
                this.$store.dispatch('registerUser', {
                    login: this.login,
                    password: this.password
                })
                    .then(() => this.$router.push('/welcome'))
                    .catch(e => console.error(e))
            },
        },
        mounted () {
            this.$refs.loginInput.focus()
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
    .input-error {
        border:2px solid red;
    }    
    .footer-register {
        padding-right: .5em;
        justify-content: flex-end;
        display: inline-flex;
        position: relative;
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
    .register-form {
        display: flex;
        flex-direction: column;
        width: 30em;
        height: 11em;
        background-color: #E3F2FD;
        box-shadow: 0.4em 0.4em 5px rgba(122,122,122,0.5);
        border-radius: .3em;
        font-family: Roboto;
    }
</style>