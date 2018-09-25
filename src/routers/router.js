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
        path: '/modify',
        component: (resolve) => require(['../../views/modifyPassword.vue'], resolve)
    },
    {
        path: '/user/:id',
        component: (resolve) => require(['../../views/user.vue'], resolve)
    },
    {
      path: '/zhihu',
      component: (resolve) => require(['../../demo/zhihu.vue'], resolve)
    },
    // 404
    {
        path: '*',
        redirect: '/index'
    }
];


// 页面刷新时，重新赋值token
if (sessionStorage.getItem('token')) {
    store.commit('set_token', sessionStorage.getItem('token'))
}

const router = new VueRouter({
    // 使用 html5 的 History 路由模式
    mode: 'history',
    routes: Routers
});
// beforeEach
router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {           //这里的requireAuth为路由中定义的 meta:{requireAuth:true}，意思为：该路由添加该字段，表示进入该路由需要登陆的
        if (store.state.token) {
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
});
  /*  window.document.title = to.meta.title;
    next();*/

    /*if (window.localStorage.token) {
        next();
    } else {
        next('/login');
    }*/
/*});*/
// afterEach
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);  // 滚动条返回顶部
});





Vue.use(VueRouter);

export default router;
