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


Vue.use(VueBus);

Vue.use(VueRouter);

Vue.use(iView);

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
