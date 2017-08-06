import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import Vuetify from 'vuetify';

import App from './App.vue';


Vue.use(VueRouter);
Vue.use(Vuetify);

// const router = new VueRouter({
//     routes: [
//       {
//         path: '/',
//         name: 'home',
//         component: Home
//       }
//     ]
//   })

const app = new Vue({
    //router,
    render: createEle => createEle(App),
    beforeCreate: function(){
      console.log("started app");
    }
}).$mount('#app')
