<template>
    <div>
        <h1><a href="javascript:;" @click="login">登录</a></h1>
    </div>
</template>

<script>
    export default {
        methods: {
            login () {
                window.localStorage.setItem('token', 'login-test');
                console.log(window.localStorage.getItem('token'));
            }
        }
    }
</script>

<style scoped>

</style>