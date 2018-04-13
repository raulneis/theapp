import Vue from 'vue';
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';
import Framework7Styles from 'framework7/dist/css/framework7.css';
import Vuefire from 'vuefire'

import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

import Routes from './routes.js'
import App from './app';
import firebase from './services/firebase'

Vue.use(Vuefire)
Vue.use(Framework7Vue, Framework7)

new Vue({
  el: '#app',
  template: '<app/>',
  framework7: {
    id: 'io.theapp.testapp',
    name: 'TheApp',
    theme: 'auto',
    routes: Routes,
    panel: {
      swipe: 'left',
    },
    view: {
      pushState: true,
    },
  },
  components: {
    app: App
  },
  data: {
    firebase
  }
});
