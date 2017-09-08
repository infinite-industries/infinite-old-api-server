<template>

  <v-container fluid>
    <v-card>
      <v-card-title class="dashboard-title">Add Artwork</v-card-title>
      <v-card-text>
        <vue-form-generator :schema="schema" :model="model"></vue-form-generator>

      <div class="text-xs-right form-submit-button-container">
        <v-btn primary dark class="deep-purple darken-3" @click.native.stop="AddArtwork()">SAVE</v-btn>
      </div>

      </v-card-text>
    </v-card>
  </v-container>

</template>

<script>

import EventBus from '../helpers/EventBus.js';

  export default {
    methods:{
      AddArtwork: function(){
        EventBus.$emit('CREATE_ARTWORK', this.model);
      }
    },
    data: function(){
      return {

        model: {
          title: '',
          artist: [],
          image: '',
          notes: ''
        },

        schema: {
          fields: [
            {
                type: "input",
                inputType: "text",
                label: "Title",
                model: "title",
                required: true
            },
            {
                type: "input",
                inputType: "text",
                label: "Artist(s) Please use commas to separate.",
                model: "artist",
                required: true
            },
            {
                type: "image",
                label: "Artwork Image",
                model: "image",
                preview: false,
                hideInput: true,
                required: true
            },
            {
                type: "input",
                inputType: "text",
                label: "Notes (optional)",
                model: "notes",
                required: false
            }


          ]
        }
      }
    }
  }
</script>
