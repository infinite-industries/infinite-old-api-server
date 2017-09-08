<template>

  <v-container fluid>
    <v-card>
      <v-card-title class="dashboard-title">Your Current Settings</v-card-title>
      <v-card-text>
        setting here
      </v-card-text>
    </v-card>
    <v-btn primary dark @click.native.stop="directRoute('/edit-settings')" class="deep-purple darken-3">Edit</v-btn>

  </v-container>

</template>

<script>
  import EventBus from '../helpers/EventBus.js';
  
  export default {
    methods: {
      directRoute: function(set_path){
        this.$router.push({ path: set_path})
      }
    }
  }
</script>
