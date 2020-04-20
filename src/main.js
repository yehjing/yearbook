import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  console.log(to);
  if (to.name) {
    document.title = `2018台灣音樂年鑑-${to.name}`;
  }
  next();
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
