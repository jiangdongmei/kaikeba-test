import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.directive('focus', {
  inserted(el) {
    el.focus();
  }

});
Vue.prototype.$bus = new Vue();
new Vue({
  render: h => h(App),
}).$mount('#app')
