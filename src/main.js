// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from '@/store'

import lodash from 'lodash'
// import VueLodash from 'vue-lodash'
// Vue.use(lodash)


// import 'alucy/lib/style.min.css'
// 项目api 挂载全局变量
import api from '@/utils/Api'
Vue.prototype.$api = api

import { Console } from '@/utils/function'
Vue.prototype.console = Console

// // 弹窗插件
// import 'vue2-toast/lib/toast.css';
// import toast from 'vue2-toast';
// Vue.use(toast);

// 弹窗插件
// import 'lucy-toast/lib/toast.css';
// import toast from 'lucy-toast';
// Vue.use(toast);


// 挂载axios
// import axios from '@/utils/http'
// Vue.prototype.$axios = axios


// import lucy from 'lucy-test01'

// Vue.prototype.lucy = lucy


// import sj from './page/sj/index.js'

// Vue.use(sj);

import LucyUI from './UI'
// Notification 样式 图标  暂时必须需要element Notification不需要了 
// import 'element-ui/lib/theme-default/index.css'
import './UI/lib/css/index.css';
Vue.use(LucyUI);


// import LucyUI from '../static/anchu.min.js'
// import './UI/lib/css/index.css';
// Vue.use(LucyUI);


// import anchuToast from './anchu-toast'
// Vue.use(anchuToast);

// import messageBox from './anchu-messageBox'
// Vue.use(messageBox);



// import JsEncrypt from 'jsencrypt/bin/jsencrypt'
// 将jsencrypt压入到Vue
// Vue.prototype.$jsEncrypt = JsEncrypt

// 注册全局过滤器
import * as filters from './utils/filter'
Object.keys(filters).forEach(k => Vue.filter(k,filters[k]));


import * as directives from './utils/directive'
Object.keys(directives).forEach(k => 
	Vue.directive(k,directives[k])
);




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
