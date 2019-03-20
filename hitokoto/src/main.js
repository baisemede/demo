import Vue from 'vue'
import App from './App.vue'
import HeyUI from 'heyui';
import Axios from 'axios'
Vue.prototype.$http = Axios
Vue.use(HeyUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')