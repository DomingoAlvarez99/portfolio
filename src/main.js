import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueParticlesBg from "particles-bg-vue";

Vue.config.productionTip = false

Vue.use(VueParticlesBg)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
