import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire';
import VueRouter from 'vue-router';

import vueCompositionApi from '@vue/composition-api';


Vue.use(VueRouter)
Vue.use(firestorePlugin)
Vue.use(vueCompositionApi)

Vue.config.productionTip = false

import Home from './components/Home';
import ChatRoom from './components/ChatRoom'
const router = new VueRouter({
  routes: [
    { path: '/' , component: Home },
    { path: '/chats/:id', component: ChatRoom, name: 'chat' }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
