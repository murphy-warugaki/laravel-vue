
require('./bootstrap');

window.Vue = require('vue');


Vue.component('example-component', require('./components/ExampleComponent.vue'));

Vue.component('paginate', require('vuejs-paginate'));
Vue.component('attendances', require('./components/Attendances.vue'));
Vue.component('attendance-form', require('./components/AttendanceForm.vue'));

const app = new Vue({
    el: '#app'
});
