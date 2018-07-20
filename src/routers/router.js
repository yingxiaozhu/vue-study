/**************************
 *          路由文件       *
 **************************/
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

export default Routers;