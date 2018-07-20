<template>
    <div>
        <h1>首页</h1>
        <div>
            <div>Vuex计数器：{{ count }}</div>
            <button @click="handleIncrement">+{{ increment_step }}</button>
            <button @click="handleDecrease">-{{ decrease_step }}</button>
        </div>


        <router-link to="/about" tag="div" active-class>关于我们</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                increment_step: 5,
                decrease_step: 3,
            }
        },
        computed: {
            count: function () {
                return this.$store.state.count;
            }
        },
        methods: {
            handleIncrement () {
                this.$store.commit('increment', this.increment_step);
            },
            handleDecrease () {
                this.$store.commit('decrease', this.decrease_step);
            }
        }
    }
</script>

<style scoped>

</style>