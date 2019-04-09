import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import animate from 'animate.css'
Vue.use(animate)
Vue.prototype.$http = Axios
Vue.config.devtools = true

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')