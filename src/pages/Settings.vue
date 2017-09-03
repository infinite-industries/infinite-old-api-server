<template>

  <v-container fluid>
    <v-card>
      <v-card-title class="dashboard-title">Settings</v-card-title>
      <v-card-text>
        <vue-form-generator :schema="schema" :model="model"></vue-form-generator>


        <div class="text-xs-right form-submit-button-container">
          <v-btn primary dark class="deep-purple darken-3">Edit</v-btn>
        </div>

      </v-card-text>
    </v-card>
  </v-container>

</template>

<script>
  export default {

    data: function(){
      return {
        model:{
          name: '',
          portrait_img: '',
          contact_email: '',
          email_is_public: true,
          venue: '',
          website: '',
          facebook: '',
          twitter: '',
          instagram: '',
          blog: ''
        },

        schema: {
          fields: [
            {
                type: "input",
                inputType: "text",
                label: "Name",
                model: "name",
                required: true
            },
            {
                type: "image",
                label: "Portrait Image",
                model: "portrait_img",
                required: false,
                preview: false,
                hideInput: true
            },
            {
                type: "input",
                inputType: "text",
                label: "Contact Email",
                model: "contact_email",
                required: true
            },
            {
                type: "checkbox",
                label: "Email is Public",
                model: "email_is_public",
                required: false
            },
            {
                type: "input",
                inputType: "text",
                label: "Gallery",
                model: "venue",
                required: false
            },
            {
                type: "input",
                inputType: "text",
                label: "Website",
                model: "website",
                required: false
            },
            {
                type: "input",
                inputType: "text",
                label: "Facebook",
                model: "facebook",
                required: false
            },
            {
                type: "input",
                inputType: "text",
                label: "Twitter",
                model: "twitter",
                required: false
            },
            {
                type: "input",
                inputType: "text",
                label: "Instagram",
                model: "instagram",
                required: false
            },
            {
                type: "input",
                inputType: "text",
                label: "blog",
                model: "blog",
                required: false
            }
          ]

      }
    }
  }
}
</script>
