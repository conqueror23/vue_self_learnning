import Vue from 'vue'
import App from './components/App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routes/routes'
Vue.use(VueResource);
Vue.use(VueRouter);
// routers
const router = new VueRouter({
  routes:routes,
  // remove hash address change to history mode 
  // mode:'history' 
});

Vue.config.productionTip = false

// custom directives
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color= "#"+Math.random().toString().slice(2,8);
  }
})
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value=='wide'){
      el.style.maxWidth='90%'
    }else{
      el.style.maxWidth="60%"
    }
    if(binding.arg=='column'){
      el.style.background='gray';
    }
  }
})

// filters
Vue.filter('to-uppercase',function(value){
  return value.toUpperCase()
})
Vue.filter('snippet',function(value){
  return value.slice(0,10)+'...'
})
export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
