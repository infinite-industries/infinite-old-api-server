<template>
  <v-alert :info="is_info" :error="is_error" :success="is_success" :warning="is_warning" :dismissible="true" v-model="show">
    {{txt}}
  </v-alert>
</template>

<script>
  export default {
    props: ['show','type','txt'],
    data: function () {
      return {
        is_error: false,
        is_info: false,
        is_success: false,
        is_warning: false
      }
    },
    mounted: function(){
      if(this.type === "success"){
        this.is_success = true;
        this.is_info = false,
        this.is_error = false,
        this.is_warning = false
      }
      else if(this.type === "info"){
        this.is_success = false;
        this.is_info = true,
        this.is_success = false,
        this.is_warning = false
      }
      else if(this.type === "error"){
        this.is_success = false;
        this.is_info = false,
        this.is_error = true,
        this.is_warning = false
      }
      else if(this.type === "warning"){
        this.is_success = false;
        this.is_info = false,
        this.is_error = false,
        this.is_warning = true
      }
      else{
        this.is_success = false,
        this.is_info = false,
        this.is_error = false,
        this.is_warning = false
      }
    }
  }
</script>
