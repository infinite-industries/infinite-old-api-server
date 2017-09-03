<template>

  <v-container fluid>
    <h1 class="dashboard-title">Artworks</h1>

        <artwork-listing :max_entries="all"></artwork-listing>

        <div class="text-xs-right form-submit-button-container">
          <v-btn primary dark class="deep-purple darken-3">ADD ARTWORK</v-btn>
        </div>

  </v-container>

</template>

<script>
  import Axios from 'axios';
  import ArtworkListing from '../components/ArtworkListing.vue';

  export default {
    components: {
    'artwork-listing': ArtworkListing
    }
  }
</script>
