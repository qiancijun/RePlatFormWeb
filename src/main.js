import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/flexible.js'
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'
import NoteCard from './components/NoteCard'

Vue.component("mavon-editor", mavonEditor)
Vue.config.productionTip = false
Vue.component('SideBar', SideBar);
Vue.component("TopBar", TopBar);
Vue.component("NoteCard", NoteCard);



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
