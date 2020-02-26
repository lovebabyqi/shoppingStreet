import Vue from 'vue'
import App from './App.vue'
import router from './router'

//让components/common/index 执行
import 'components/common'
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
    loading:require('assets/img/common/placeholder.png')
})
import store from './views/store'
//全局注册
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

/*
* components
*   common 放置适用性很高的组件 不局限当前的项目
*   content 放置适用当前项目的组件
*
*
* 如果NavBar组件是全局组件  可以少做两件事情
*   1.不在Home组件中导入
*   2.不在Home组件中注册
*
*
*   如何把common文件夹中的所有组件都注册成全局组件
* */
