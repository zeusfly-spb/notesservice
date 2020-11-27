<template>
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
            <input type="text">
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
            <input type="password">
        </div>
        <div>
            <button>
                Войти
            </button>
        </div>
        <div
            class="footer-login"
        >
            <a href="/register">Регистрация</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginPage',
        data: () => ({
            login: '',
            password: ''
        })
    }
</script>

<style scoped>
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
        height: 10em;
        background-color: #E3F2FD;
        box-shadow: 0.4em 0.4em 5px rgba(122,122,122,0.5);
        border-radius: .3em;
        font-family: Roboto;
    }
</style>