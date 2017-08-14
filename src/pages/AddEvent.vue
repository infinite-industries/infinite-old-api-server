<template>


  <v-container fluid>
    <v-card>
      <v-card-title class="dashboard-title">Add Event</v-card-title>
      <v-card-text>
        <vue-form-generator :schema="schema" :model="model"></vue-form-generator>

        <div class="text-xs-right form-submit-button-container">
          <v-btn primary dark class="deep-purple darken-3">ADD</v-btn>
        </div>

      </v-card-text>
    </v-card>
  </v-container>


</template>

<script>
  export default {
    // title: String,

    // description: String,
    // tags: Array,
    // status: String, //can cancel and/or postpone events here
    // presenter_curator: String,
    // presenter_curator_id: String,
    // has_venue: Boolean,
    // presenter_venue: String,
    // presenter_venue_id: String,
    // one_day_event: Boolean,
    // start_date_time: Date,
    // end_date_time: Date,
    // has_opening: Boolean,
    //
    // // in case it is NOT a venue (ex. public performance) or
    // // not a venue that is in the system
    // location_name: String,
    // location_country: String,     // intentionally duplicate of venue entity field
    // location_city: String,        // intentionally duplicate of venue entity field
    // location_state: String,       // intentionally duplicate of venue entity field
    // location_neighborhood: String // intentionally duplicate of venue entity field
    // location_street: String,      // intentionally duplicate of venue entity field
    //
    // website_link: String,
    // facebook_event_link: String

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
          facebook_event_link: ''

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
              label: "Description",
              model: "description",
              required: true
            },
            {
              type: "input",
              inputType: "text",
              label: "Venue",
              model: "presenter_venue",
              required: true
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
            }
          ]
        }
      }
    }
  }
</script>
