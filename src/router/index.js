import Vue from 'vue'
import Router from 'vue-router'

import array from '@/components/lodash/Array'
Vue.use(Router)

const routes = [
	{ path: '/',name: 'array',component: array }
]

const router = new Router({
	mode:'history',
    routes
});

export default router;
