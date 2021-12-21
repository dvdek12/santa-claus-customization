import Vue from 'vue'
import App from './App.vue'
import './index.css'

Vue.config.productionTip = false

Vue.directive('custom-beard', function(el, binding){
  console.log(el, binding.value)
  el.style.backgroundColor = binding.value
})

Vue.directive('custom-mustache', function(el, binding){
  console.log(el, binding.value)
  el.style.backgroundColor = binding.value
})

Vue.directive('custom-hat', function(el, binding){
  el.style.backgroundColor = binding.value
})

Vue.directive('custom-suit', function(el, binding){
  console.log(el, binding.value)
  console.log("body childs: ", el.parentNode)
  let arms = el.parentNode.querySelector('.arms')
  let legs = el.parentNode.querySelectorAll('.leg')
  let leg1 = legs[0]
  let leg2 = legs[1]
  el.style.backgroundColor = binding.value
  arms.style.backgroundColor = binding.value
  leg1.style.backgroundColor = binding.value
  leg2.style.backgroundColor = binding.value
})

new Vue({
  render: h => h(App),
}).$mount('#app')
