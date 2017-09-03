<template>

<v-card class="ma-3">
  <v-list dense >

    <v-list-tile :href="route_to_home">
      <v-list-tile-action >
        <v-icon>home</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile :href="route_to_add_artwork">
      <v-list-tile-action >
        <v-icon>insert_photo</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Add Artwork</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile :href="route_to_add_event">
      <v-list-tile-action >
        <v-icon>insert_invitation</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Add Event</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile :href="route_to_settings">
      <v-list-tile-action >
        <v-icon>settings</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Settings</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

  </v-list>
</v-card>

</template>

<script>
  export default {
    name:'SideMenuDesktop',
    data: function () {
      return {
        route_to_home: '#/',
        route_to_add_artwork: '#/add-artwork',
        route_to_add_event: '#/add-event',
        route_to_settings: '#/settings'
      }
    }
  }
</script>
