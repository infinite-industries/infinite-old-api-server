<template>
  <v-dialog v-model="dialog" lazy>
    <v-card>
      <v-card-title>
        <div class="headline">Please Confirm</div>
      </v-card-title>
      <v-card-text>Are you sure you want to delete this {{entity_type}}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn dark class="deep-purple darken-3" flat="flat" @click.native.stop="CloseDialog()">Cancel</v-btn>
        <v-btn dark class="deep-purple darken-3" @click.native.stop="ConfirmDeletion()">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import EventBus from '../helpers/EventBus.js';

  import Alert from '../components/Alert.vue';

  export default {
    data () {
      return {
        dialog: false,
        entity_type: 'default',
        id: null
      }
    },
    methods: {
      CloseDialog: function(){
        //console.log(this.$parent.action_confirm_visible);
        this.dialog=false;
      },
      ConfirmDeletion: function(){
        const self = this;

        this.dialog=false;
        if((this.entity_type === 'artwork')&&(this.id !== null)){
          EventBus.$emit('CONFIRMED_DELETE_ARTWORK', self.id);
        }
        else if((this.entity_type === 'event')&&(this.id !== null)){
          EventBus.$emit('CONFIRMED_DELETE_EVENT', self.id);
        }
        else {
          EventBus.$emit('ALERT', { type: 'error', txt: 'Unable to perform delete action!' });
        }
      }
    },
    mounted: function(){
        const self = this;
        EventBus.$on('CONFIRMATION_DIALOG', function(params){
          self.dialog = true;
          self.entity_type = params.type;
          self.id = params.id;
      })
    }
  }
</script>
