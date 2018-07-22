<template>
    <div>
        <h1>首页</h1>
        <div>
            <div>Vuex计数器：{{ count }}</div>
            <button @click="handleClick('increment')">+{{ increment_step }}</button>
            <button @click="handleClick('decrease')">-{{ decrease_step }}</button>
        </div>

        <div>
            <div>{{ list }}</div>
            <div>{{ listCount }}</div>
            <button @click="handleAsyncIncrement">async + 1</button>
        </div>


        <router-link to="/about" tag="div" active-class>关于我们</router-link>

        <div>
            随机增加：
            <Counter :number="number"></Counter>
        </div>
    </div>
</template>

<script>
    import Counter from './counter.vue';

    export default {
        components: {
            Counter
        },
        data() {
            return {
                increment_step: 5,
                decrease_step: 3,
                number: 0,
            }
        },
        computed: {
            count: function () {
                return this.$store.state.a.count;
            },
            list: function () {
                return this.$store.getters.filteredList;
            },
            listCount: function () {
                return this.$store.getters.listCount;
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
            },
            handleAsyncIncrement () {
                this.$store.dispatch('asyncIncrement').then(() => {
                    console.log(this.$store.state.a.count);
                });
            },
            handleAddRandom (num) {
                this.number += num;
            }
        },
        created () {
            this.$bus.on('add', this.handleAddRandom);
        },
        beforeDestroy () {
            this.$bus.off('add', this.handleAddRandom);
        }
    }
</script>

<style scoped>

</style>
