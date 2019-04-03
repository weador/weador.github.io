import Vue from 'vue'
import App from './App.vue'
import Header from './components/header.vue'
import Home from './components/home.vue'
import Footer from './components/footer.vue'

Vue.component('app-header', Header)
Vue.component('app-home', Home)
Vue.component('app-footer', Footer)

new Vue({
  el: '#app',
  render: h => h(App)
})
