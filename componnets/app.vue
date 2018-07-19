<template>
    <div>
        <v-title title="Vue 组件化"></v-title>
        <v-button @click="handleClick">点击按钮</v-button>
    </div>
</template>

<script>
    // 导入组件
    import vTitle from './title.vue';
    import vButton from './button.vue';

    export default {
        data() {
            return {
                name: "Vue.js"
            }
        },
        components: {
            vTitle: vTitle,
            vButton: vButton
        },
        methods: {
            handleClick: function (e) {
                console.log(e);
            }
        }
    }
</script>

<style scoped>
    div {
        color: #f60;
        font-size: 24px;
    }
</style>
