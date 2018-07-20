// 导入 VUe 框架
import Vue from 'vue';
// 导入 vue-router 组件
import VueRouter from 'vue-router';
// 导入 vuex 组件
import Vuex from 'vuex';
// 导入 app.vue 组件
import App from './app.vue';
// 导入 vue-router 路由配置文件
import Routers from './src/routers/router';



Vue.use(VueRouter);
Vue.use(Vuex);


/** vue-router **/
const router = new VueRouter({
    // 使用 html5 的 History 路由模式
    mode: 'history',
    routes: Routers
});
// beforeEach
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();

    /*if (window.localStorage.token) {
        next();
    } else {
        next('/login');
    }*/
});
// afterEach
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);  // 滚动条返回顶部
});


/** vuex **/
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state, params) {
            state.count += params.count;
        },
        decrease (state, params) {
            state.count -= params.count;
        }
    }
});


// 创建 Vue 根实例
new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});
