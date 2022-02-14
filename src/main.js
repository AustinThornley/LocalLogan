import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Activies from './components/Activities.vue'
import Home from './components/Home.vue'
import './assets/tailwind.css';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
	{ path: '/', component: Home},
	{ path: '/activities', component: Activies},
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
