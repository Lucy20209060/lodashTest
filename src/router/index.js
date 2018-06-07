import Vue from 'vue'
import Router from 'vue-router'

import array from '@/components/lodash/Array';
import chain from '@/components/lodash/Chain';
import collection from '@/components/lodash/Collection';
Vue.use(Router)

const routes = [
	{ path: '/',name: 'array',component: array },
	{ path: '/chain',name: 'chain',component: chain },
	{ path: '/collection',name: 'collection',component: collection }
]

const router = new Router({
	mode:'history',
    routes
});

export default router;
