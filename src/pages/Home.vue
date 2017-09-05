<template>

  <v-container fluid>

    <v-card>
      <v-card-title class="dashboard-title">Your Artworks</v-card-title>
      <v-card-text>
        <artwork-listing :max_entries="4"></artwork-listing>

        <div class="text-xs-right form-submit-button-container">
          <v-btn @click.native.stop="directRoute('/all-artworks')" primary dark class="deep-purple darken-3">See All Artworks</v-btn>
        </div>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title class="dashboard-title">Your Events</v-card-title>
      <v-card-text>
        <event-listing :max_entries="4"></event-listing>

        <div class="text-xs-right form-submit-button-container">
          <v-btn flat primary @click.native.stop="directRoute('/all-finished-events')">Past Events Archive</v-btn>
          <v-btn primary dark @click.native.stop="directRoute('/all-active-events')" class="deep-purple darken-3">See All Active Events</v-btn>
        </div>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title class="dashboard-title">Monthly Stats</v-card-title>
      <v-card-text>
        <div>
          <em>Event Views</em>
          <event-analytics></event-analytics>
        </div>

        <div>
          <em>Artwork Views</em>
          <artwork-analytics></artwork-analytics>
        </div>

      </v-card-text>
    </v-card>


  </v-container>

</template>

<script>
  import Axios from 'axios';
  import ArtworkListing from '../components/ArtworkListing.vue';
  import EventListing from '../components/EventListing.vue';
  import ArtworkAnalytics from '../components/ArtworkAnalytics.vue';
  import EventAnalytics from '../components/EventAnalytics.vue';

  export default {
    methods: {
      directRoute: function(set_path){
        this.$router.push({ path: set_path})
      }
    },
    components: {
    'artwork-listing': ArtworkListing,
    'event-listing': EventListing,
    'artwork-analytics': ArtworkAnalytics,
    'event-analytics': EventAnalytics
    }
  }
</script>
