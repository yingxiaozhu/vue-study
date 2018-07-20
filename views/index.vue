<template>
    <div>
        <h1>首页</h1>
        <div>
            <div>Vuex计数器：{{ count }}</div>
            <button @click="handleClick('increment')">+{{ increment_step }}</button>
            <button @click="handleClick('decrease')">-{{ decrease_step }}</button>
        </div>

        <div> {{ list }}</div>


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
            },
            list: function () {
                return this.$store.getters.filteredList;
            }
        },
        methods: {
            handleClick (type) {
                var _this = this;
                if (type === 'increment') {
                    this.$store.commit({
                        type: 'increment',
                        count: _this.increment_step
                    });
                } else if (type === 'decrease') {
                    this.$store.commit({
                        type: 'decrease',
                        count: _this.decrease_step
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>