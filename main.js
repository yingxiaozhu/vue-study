// 导入 VUe 框架
import Vue from 'vue';
import VueRouter from 'vue-router';
// 导入 app.vue 组件
import App from './app.vue';

Vue.use(VueRouter);

const Routers = [
    {
        path: '/index',
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/about',
        component: (resolve) => require(['./views/about.vue'], resolve)
    },
];

const RouterConfig = {
    // 使用 html5 的 History 路由模式
    mode: 'history',
    routes: Routers
};

const router = new VueRouter(RouterConfig);

// 创建 Vue 根实例
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});

//document.getElementById('app').innerHTML = 'Hello webpack!';