<template>

  <v-container fluid>
    <v-card>
      <v-card-title class="dashboard-title">Edit Artwork: # {{id}}</v-card-title>
      <v-card-text>
        <!-- <vue-form-generator :schema="schema" :model="model"></vue-form-generator> -->

        <div class="text-xs-right form-submit-button-container">
          <v-btn class="deep-purple darken-3" flat="flat" @click.native.stop="DirectRoute('/')">Cancel</v-btn>
          <v-btn primary dark class="deep-purple darken-3" @click.native.stop="SaveArtwork()">SAVE</v-btn>
        </div>

      </v-card-text>
    </v-card>
  </v-container>

</template>

<script>
  import EventBus from '../helpers/EventBus.js';

  export default {
    props: ['id'],
    mounted: function(){
      console.log('entity id: '+this.id);
    },
    methods: {
      SaveArtwork: function(){
        EventBus.$emit('UPDATE_ARTWORK', this.model);
      },
      DirectRoute: function(set_path){
        this.$router.push({ path: set_path})
      },

    }
  }
</script>
