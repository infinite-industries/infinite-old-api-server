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
        <router-view></router-view>
      </v-container>
    </main>

  </v-app>
</template>

<script>
  import SideMenuDesktop from './components/SideMenuDesktop.vue'
  import EventBus from './helpers/EventBus.js';

  export default {
    data:{

    },
    mounted: function(){
      //--------- All Message Bus events flow here -----------
      EventBus.$on('CREATE_ARTWORK', function(data){
        console.log("Creating new entity artwork:");
        console.log(data);
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
      'side-menu-desktop': SideMenuDesktop
    }
  }
</script>
