// 导入 VUe 框架
import Vue from 'vue';
// 导入 app.vue 组件
import App from './app.vue';
// 导入 vue-router 路由配置文件
import router from './src/routers/router';
// 导入 vuex 配置文件
import store from './src/vuex/vuex';
// 导入 vue-bus 配置
import VueBus from './src/vue-bus';

Vue.use(VueBus);




// 创建 Vue 根实例
new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});
