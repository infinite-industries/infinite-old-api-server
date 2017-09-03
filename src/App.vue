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

  export default {
    mounted: function(){

    },
    components: {
      'side-menu-desktop': SideMenuDesktop
    }
  }
</script>
