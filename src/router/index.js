import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import about from '@/components/about'
import cart from '@/components/cart'
import test from '@/components/test'
import array from '@/components/lodash/Array'
Vue.use(Router)

const routes = [
	{ path: '/',name: 'index',component: index },
	{ path: '/hello',name: 'Hello',component: Hello },
	{ path: '/home',name: 'home',component: Home },
	{ path: '/cart',name: 'cart',component: cart },
	{ path: '/about',name: 'about',component: about },
	{ path: '/test',name: 'test',component: test },
	{ path: '/array',name: 'array',component: array }
]

const router = new Router({
	mode:'history',
    routes
});

export default router;
