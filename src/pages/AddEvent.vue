<template>


  <v-container fluid>
    <v-card>
      <v-card-title class="dashboard-title">Add Event</v-card-title>
      <v-card-text>

        <v-menu offset-y>
          <v-btn primary dark slot="activator">Choose a venue </v-btn>
          <v-list>
            <v-list-tile v-for="venue in venues" :key="venue.name">
              <v-list-tile-title>{{ venue.name }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        or enter the location in the form below

        <vue-form-generator :schema="schema" :model="model"></vue-form-generator>

        <div class="text-xs-right form-submit-button-container">
          <v-btn primary dark class="deep-purple darken-3" @click.native.stop="AddEvent()">ADD EVENT</v-btn>
        </div>

      </v-card-text>
    </v-card>
  </v-container>


</template>

<script>
  import EventBus from '../helpers/EventBus.js';

  export default {
    methods:{
      AddEvent: function(){
        EventBus.$emit('CREATE_EVENT', this.model);
      }
    },
    data: function(){
      return {
        model: {
          title: '',
          description: '',
          presenter_venue: '',
          location_name: '',
          location_country: '',
          location_city: '',
          location_state: '',
          location_neighborhood: '',
          location_street: '',

          website_link: '',
          facebook_event_link: '',

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
              inputType: "textArea",
              label: "Description",
              model: "description",
              required: true
            },
            {
              type: "input",
              inputType: "text",
              label: "Venue",
              model: "presenter_venue",
              required: false
            },
            {
              type: "input",
              inputType: "text",
              label: "Location Name (Optional)",
              model: "location_name",
              required: false
            },
            {
              type: "input",
              inputType: "text",
              label: "Street Address",
              model: "location_street",
              required: true
            },
            {
              type: "input",
              inputType: "text",
              label: "City",
              model: "location_city",
              required: true
            },
            {
              type: "input",
              inputType: "text",
              label: "State",
              model: "location_state",
              required: true
            },
            {
              type: "input",
              inputType: "text",
              label: "Country",
              model: "location_country",
              required: true
            },
            {
              type: "input",
              inputType: "text",
              label: "Neighborhood",
              model: "location_neighborhood",
              required: true
            },
            {
              type: "input",
              inputType: "text",
              label: "Website Link",
              model: "website_link",
              required: false
            },
            {
              type: "input",
              inputType: "text",
              label: "Facebook Event Link",
              model: "facebook_event_link",
              required: false
            },
            {
              type: "input",
              inputType: "text",
              label: "Notes",
              model: "notes",
              required: false,
              // styleClasses: "border-color:red"
            }
          ]
        }
      }
    }
  }
</script>
