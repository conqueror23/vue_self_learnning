import Vue from 'vue'
import App from './components/App.vue'

Vue.config.productionTip = false

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
