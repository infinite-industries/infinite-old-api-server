<template>

  <v-container fluid>

    <v-card>
      <v-card-title class="dashboard-title">All Active Events</v-card-title>
      <v-card-text>
        <!-- <vue-form-generator :schema="schema" :model="model"></vue-form-generator> -->
        ALL events here
        <div class="text-xs-right form-submit-button-container">
          <v-btn primary dark class="deep-purple darken-3">ADD YOUR EVENT</v-btn>
        </div>

      </v-card-text>
    </v-card>
  </v-container>

</template>

<script>
  import EventBus from './helpers/EventBus.js';

  export default {

  }
</script>
