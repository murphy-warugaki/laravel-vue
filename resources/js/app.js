//import Vue from 'vue'
//import VueRouter from 'vue-router'

require('./bootstrap');

window.Vue = require('vue');

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('paginate', require('vuejs-paginate'));
Vue.component('attendances', require('./components/Attendances.vue'));
Vue.component('attendance-form', require('./components/AttendanceForm.vue'));
Vue.component('router-view', require('./components/Welcome.vue'));

/*
Vue.use(VueRouter)
 const router = new VueRouter({
	mode: 'history',
	rutes: [
		{
			path: '/welcome',
			component: require('./components/Welcome.vue')
		}
	]
 });
*/

const app = new Vue({
//	router,
    el: '#app'
});
