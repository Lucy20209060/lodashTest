import Vue from 'vue'
import Router from 'vue-router'

import array from '@/components/lodash/Array';
import chain from '@/components/lodash/Chain';
import collection from '@/components/lodash/Collection';
import date from '@/components/lodash/Date';
import Function from '@/components/lodash/Function';
import Lang from '@/components/lodash/Lang';
import Math from '@/components/lodash/Math';
import Number from '@/components/lodash/Number';
import Object from '@/components/lodash/Object';
import String from '@/components/lodash/String';
import Utility from '@/components/lodash/Utility';
Vue.use(Router)
const routes = [
	{ path: '/',name: 'array',component: array },
	{ path: '/chain',name: 'chain',component: chain },
	{ path: '/date',name: 'date',component: date },
	{ path: '/collection',name: 'collection',component: collection },
	{ path: '/function',name: 'function',component: Function },
	{ path: '/lang',name: 'lang',component: Lang },
	{ path: '/math',name: 'math',component: Math },
  	{ path: '/number',name: 'number',component: Number },
	{ path: '/object',name: 'object',component: Object },
	{ path: '/string',name: 'string',component: String },
	{ path: '/utility',name: 'utility',component: Utility }
]

const router = new Router({
	mode:'history',
    routes
});

export default router;
