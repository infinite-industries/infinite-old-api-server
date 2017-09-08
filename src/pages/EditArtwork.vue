<template>

  <v-container fluid>
    <v-card>
      <v-card-title class="dashboard-title">Edit Artwork</v-card-title>
      <v-card-text>
        <!-- <vue-form-generator :schema="schema" :model="model"></vue-form-generator> -->

        <div class="text-xs-right form-submit-button-container">
          <v-btn class="deep-purple darken-3" flat="flat" @click.native.stop="BackToHome()">Cancel</v-btn>
          <v-btn primary dark class="deep-purple darken-3" @click.native.stop="SaveArtwork()">SAVE</v-btn>
        </div>

      </v-card-text>
    </v-card>
  </v-container>

</template>

<script>
  import EventBus from '../helpers/EventBus.js';

  export default {
    methods: {
      SaveArtwork: function(){
        EventBus.$emit('UPDATE_ARTWORK', this.model);
      },
      
    }
  }
</script>
