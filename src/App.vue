<template>
  <v-app id="app" standalone>

    <v-navigation-drawer permanent clipped light>
      <side-menu-desktop></side-menu-desktop>
    </v-navigation-drawer>

    <v-toolbar class="deep-purple darken-1" dark>
      <v-toolbar-title>Infinite Industries: Curator Dashboard Prototype</v-toolbar-title>
    </v-toolbar>

    <main>
      <v-container fluid>

        <!-- Show Alerts when needed -->
        <alert :show="alert_params.visible" :type="alert_params.type" :txt="alert_params.txt"></alert>

        <router-view></router-view>
      </v-container>
    </main>

  </v-app>
</template>

<script>
  import SideMenuDesktop from './components/SideMenuDesktop.vue';
  import Alert from './components/Alert.vue';

  import EventBus from './helpers/EventBus.js';


  export default {
    data () {
      return {
        alert_params:{
          visible: false,
          type:"info",
          txt: " "
        }
      }
    },
    methods:{
      //Alert states are: success, error, info, warning
      ShowAlert: function(type, txt){

        this.alert_params.visible = true;
        this.alert_params.type = type;
        this.alert_params.txt = txt;
      }
    },
    mounted: function(){
      //--------- All Message Bus events flow here -----------
      const self = this;

      EventBus.$on('CREATE_ARTWORK', function(data){
        console.log("Creating new entity artwork:");
        console.log(data);
        self.ShowAlert('success','Added the artwork!');
      });

      EventBus.$on('UPDATE_ARTWORK', function(data){
        console.log("Updating entity artwork:");
        console.log(data);
      });

      EventBus.$on('DELETE_ARTWORK', function(data){
        console.log("Delete entity artwork:");
        console.log(data);
      });

      EventBus.$on('CREATE_EVENT', function(data){
        console.log("Adding new entity event:");
        console.log(data);
      });

      EventBus.$on('UPDATE_EVENT', function(data){
        console.log("Updating entity event:");
        console.log(data);
      });

      EventBus.$on('DELETE_EVENT', function(data){
        console.log("Delete entity event:");
        console.log(data);
      });

      EventBus.$on('UPDATE_SETTINGS', function(data){
        console.log("Updating user settings:");
        console.log(data);
      });

    },
    components: {
      'side-menu-desktop': SideMenuDesktop,
      'alert': Alert
    }
  }
</script>
