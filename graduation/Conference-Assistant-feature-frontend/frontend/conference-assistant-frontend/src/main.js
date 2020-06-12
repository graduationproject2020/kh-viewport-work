// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VModal from 'vue-js-modal'
import moment from "moment";
import ToggleButton from 'vue-js-toggle-button'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
//vue meta import
import VueMeta from 'vue-meta'

import Directives from './plugins/directives';
import io from 'socket.io-client';
const socket = io('http://localhost:8080/chat'); // socket server namespace : /chat

// Vue.use(Vuetify)
Vue.use(VModal, {dynamic: true})
Vue.config.productionTip = false
Vue.prototype.$socket =socket;
Vue.prototype.EventBus = new Vue();

Vue.use(Directives)

//vue meta use
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

Vue.prototype.moment = moment;

Vue.use(ToggleButton)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
