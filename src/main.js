import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import Vuetify from 'vuetify';
import VueFormGenerator from "vue-form-generator";

import App from './App.vue';

import Home from './pages/Home.vue';
import EditSettings from './pages/EditSettings.vue';
import EditArtwork from './pages/EditArtwork.vue';
import EditEvent from './pages/EditEvent.vue';
import AddArtwork from './pages/AddArtwork.vue';
import AddEvent from './pages/AddEvent.vue';
import ListAllActiveEvents from './pages/ListAllActiveEvents.vue';
import ListAllArtworks from './pages/ListAllArtworks.vue';
import ListAllPastEvents from './pages/ListAllPastEvents.vue';
import ShowSingleArtwork from './pages/ShowSingleArtwork.vue';
import ShowSingleEvent from './pages/ShowSingleEvent.vue';
import ShowSettings from './pages/ShowSettings.vue';

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueFormGenerator);

const router = new VueRouter({
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/settings',
        name: 'settings',
        component: ShowSettings
      },
      {
        path: '/edit-settings',
        name: 'edit_settings',
        component: EditSettings
      },
      {
        path: '/edit-event/:id',
        name: 'edit_event',
        component: EditEvent,
        props: true
      },
      {
        path: '/edit-artwork',
        name: 'edit_artwork',
        component: EditArtwork
      },
      {
        path: '/add-artwork',
        name: 'add_artwork',
        component: AddArtwork
      },
      {
        path: '/add-event',
        name: 'add_event',
        component: AddEvent
      },
      {
        path: '/all-artworks',
        name: 'all_artworks',
        component: ListAllArtworks
      },
      {
        path: '/all-active-events',
        name: 'all_active_events',
        component: ListAllActiveEvents
      },
      {
        path: '/all-finished-events',
        name: 'all_finished_events',
        component: ListAllPastEvents
      },
      {
        path: '/show-single-artwork',
        name: 'show_single_artwork',
        component: ShowSingleArtwork
      },
      {
        path: '/show-single-event',
        name: 'show_single_event',
        component: ShowSingleEvent
      }

    ]
  })

const app = new Vue({
    router,
    render: createEle => createEle(App),
    beforeCreate: function(){
      console.log("started app");
    }
}).$mount('#app')
