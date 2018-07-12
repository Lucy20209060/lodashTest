import Vue from 'vue'
import Router from 'vue-router'

import array from '@/components/lodash/Array';
import chain from '@/components/lodash/Chain';
import collection from '@/components/lodash/Collection';
import date from '@/components/lodash/Date';
import Function from '@/components/lodash/Function';
import Lang from '@/components/lodash/Lang';
import Math from '@/components/lodash/Math';
Vue.use(Router)

const routes = [
	{ path: '/',name: 'array',component: array },
	{ path: '/chain',name: 'chain',component: chain },
	{ path: '/date',name: 'date',component: date },
	{ path: '/collection',name: 'collection',component: collection },
	{ path: '/function',name: 'function',component: Function },
	{ path: '/lang',name: 'lang',component: Lang },
	{ path: '/math',name: 'math',component: Math }
]

const router = new Router({
	mode:'history',
    routes
});

export default router;
