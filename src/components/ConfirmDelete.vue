<template>
  <v-dialog v-model="dialog" lazy>
    <v-card>
      <v-card-title>
        <div class="headline">Please Confirm</div>
      </v-card-title>
      <v-card-text>Are you sure you want to delete this {{type}}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="green--text darken-1" flat="flat" @click.native.stop="CloseDialog()">Cancel</v-btn>
        <v-btn class="green--text darken-1" flat="flat" @click.native.stop="CloseDialog()">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import EventBus from '../helpers/EventBus.js';

  export default {
    props: ['type'],
    methods: {
      CloseDialog: function(){
        //console.log(this.$parent.action_confirm_visible);
        this.$parent.action_confirm_visible=false;
      }
    },
    data () {
      return {
        dialog: true
      }
    }
  }
</script>
