/**************************
 *          路由文件       *
 **************************/
// 导入 VUe 框架
import Vue from 'vue';
// 导入 vue-router 组件
import VueRouter from 'vue-router';


const Routers = [
    {
        path: '/login',
        component: (resolve) => require(['../../views/login.vue'], resolve)
    },
    {
        path: '/index',
        component: (resolve) => require(['../../views/index.vue'], resolve)
    },
    {
        path: '/about',
        component: (resolve) => require(['../../views/about.vue'], resolve)
    },
    {
        path: '/user/:id',
        component: (resolve) => require(['../../views/user.vue'], resolve)
    },
    // 404
    {
        path: '*',
        redirect: '/index'
    }
];


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

Vue.use(VueRouter);

export default router;
