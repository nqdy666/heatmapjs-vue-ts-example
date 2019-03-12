import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import heatmapjsVue from 'heatmapjs-vue';

Vue.use(heatmapjsVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
