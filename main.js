// 导入 VUe 框架
import Vue from 'vue';
// 导入 app.vue 组件
import App from './app.vue';
// 导入 vue-router 路由配置文件
import Routers from './src/routers/router.js';
// 导入 vuex 配置文件
import store from './src/vuex/vuex';
// 导入 vue-bus 配置
import VueBus from './src/vue-bus';

import VueRouter from 'vue-router';

import iView from 'iview';

import 'iview/dist/styles/iview.css';

import axios from 'axios';

import qs from 'qs';


Vue.use(VueBus);

Vue.use(VueRouter);

Vue.use(iView);

//Vue.prototype.$axios = axios;

axios.defaults.baseURL='https://api.example.com';
axios.defaults.headers.common['Authorization'] =store.state.token;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//使用get方式的http请求
/*this.$axios.get("url",{param:{}}).then(function(response){
    console.info(response.data);
}).catch(function(error){
    console.info(error);
});*/

//使用post方式的http请求
axios.post('http://localhost:8080/index')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// 添加请求拦截器
axios.interceptors.request.use(config => {
// 在发送请求之前做些什么
//判断是否存在token，如果存在将每个页面header都添加token
    if(store.state.token){
        config.headers.common['Authentication-Token']=store.state.token
    }

    return config;
}, error => {
// 对请求错误做些什么
    return Promise.reject(error);
});

// http response 拦截器
axios.interceptors.response.use(
    response => {

        return response;
    },
    error => {

        if (error.response) {
            switch (error.response.status) {
                case 401:
                    this.$store.commit('del_token');
                    router.replace({
                        path: '/login',
                        query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
                    })
            }
        }
        return Promise.reject(error.response.data)
    });

//路由配置
/*let router = new VueRouter();
router.map(Routers);
router.start(App,"#app");*/

// 创建 Vue 根实例
new Vue({
    el: '#app',
    router: Routers,
    store: store,
    render: h => h(App)
});
