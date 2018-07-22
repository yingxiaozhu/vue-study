/**************************
 *          vuex文件       *
 **************************/
// 导入 VUe 框架
import Vue from 'vue';
// 导入 vuex 组件
import Vuex from 'vuex';


const moduleA = {
    // 定义全局变量
    state: {
        count: 0,
        list: [1, 5, 8, 10, 30, 50]
    },
    // 处理全局变量
    mutations: {
        increment (state, params) {
            state.count += params.count;
        },
        decrease (state, params) {
            state.count -= params.count;
        }
    },
    // 全局修改
    getters: {
        filteredList: state => {
            return state.list.filter(item => item < 10);
        },
        listCount: (state, getters) => {
            return getters.filteredList.length;
        }
    },
    // 操作 mutations ，异步操作
    actions: {
        asyncIncrement (context) {
            return new Promise(resolve => {
                setTimeout(() => {
                    context.commit({
                        type: 'increment',
                        count: 1
                    });
                    resolve();
                }, 1000)
            });
        }
    }
};

Vue.use(Vuex);

/** vuex **/
const store = new Vuex.Store({
    modules: {
        a: moduleA,
    }
});

export default store;