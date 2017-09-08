<template>

  <v-container fluid>
    <h1 class="dashboard-title">Artworks</h1>

        <artwork-listing :max_entries="all"></artwork-listing>

        <div class="text-xs-right form-submit-button-container">
          <v-btn primary dark class="deep-purple darken-3" @click.native.stop="DirectRoute('/add-artwork')">ADD ARTWORK</v-btn>
        </div>

  </v-container>

</template>

<script>
  import Axios from 'axios';
  import ArtworkListing from '../components/ArtworkListing.vue';

  import EventBus from '../helpers/EventBus.js';

  export default {
    methods:{
      DirectRoute: function(set_path){
        this.$router.push({ path: set_path})
      }
    },
    components: {
    'artwork-listing': ArtworkListing
    }
  }
</script>
