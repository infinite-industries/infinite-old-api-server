<template>
  <div>
    <v-alert :error="true" :dismissible="true" v-model="is_error" transition="fade-transition">
      {{txt}}
    </v-alert>

    <v-alert :info="true" :dismissible="true" v-model="is_info" transition="fade-transition">
      {{txt}}
    </v-alert>

    <v-alert :success="true" :dismissible="true" v-model="is_success" transition="fade-transition">
      {{txt}}
    </v-alert>

    <v-alert :warning="true" :dismissible="true" v-model="is_warning" transition="fade-transition">
      {{txt}}
    </v-alert>
  </div>
</template>

<script>
  import EventBus from '../helpers/EventBus.js';

  export default {
    data: function () {
      return {
        is_error: false,
        is_info: false,
        is_success: false,
        is_warning: false,
        txt: ""
      }
    },
    mounted: function(){
      const self = this;

      EventBus.$on('ALERT', function(params){
        self.txt = params.txt;

        if(params.type === "success"){
          self.is_success = true;
          self.is_info = false,
          self.is_error = false,
          self.is_warning = false
        }
        else if(params.type === "info"){
          self.is_success = false;
          self.is_info = true,
          self.is_success = false,
          self.is_warning = false
        }
        else if(params.type === "error"){
          self.is_success = false;
          self.is_info = false,
          self.is_error = true,
          self.is_warning = false
        }
        else if(params.type === "warning"){
          self.is_success = false;
          self.is_info = false,
          self.is_error = false,
          self.is_warning = true
        }
        else{
          self.is_success = false,
          self.is_info = false,
          self.is_error = false,
          self.is_warning = false
        }

      });
    }
  }
</script>
