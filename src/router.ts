import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'heatamap',
      component: () => import('./views/Heatmap.vue'),
    },
    {
      path: '/example2',
      name: 'example2',
      component: () => import('./views/HeatmapTwo.vue'),
    },
  ],
});
