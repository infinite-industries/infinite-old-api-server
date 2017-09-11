<template>
  <v-app id="app" standalone>

    <v-navigation-drawer permanent clipped light>
      <side-menu-desktop></side-menu-desktop>
    </v-navigation-drawer>

    <v-toolbar class="deep-purple darken-1" dark>
      <v-toolbar-title>Infinite Industries: Curator Dashboard Prototype</v-toolbar-title>
    </v-toolbar>

    <main>
      <v-container fluid>

        <alert></alert>

        <!-- Show Confirmation Dialog if deleting entity -->
        <confirm-delete></confirm-delete>

        <router-view></router-view>
      </v-container>
    </main>

  </v-app>
</template>

<script>
  import SideMenuDesktop from './components/SideMenuDesktop.vue';
  import Alert from './components/Alert.vue';
  import ConfirmDelete from './components/ConfirmDelete.vue';

  import EventBus from './helpers/EventBus.js';

  export default {
    data () {
      return {

      }
    },
    methods:{

      ShowAlert: function(type, txt){
        EventBus.$emit('ALERT', { type: type, txt: txt });
        // All of the guts of the alert live in components/Alert.vue
        // Alert states are: success, error, info, warning

        const self = this;
        if(type === "success"){
        // force the user to manually dismiss all messages other than SUCCESS
          setTimeout(function(){
            self.ShowAlert('hide','');
          }, 3000);
        }
      },

      ShowConfirmDeleteDialog: function(data){
        EventBus.$emit('CONFIRMATION_DIALOG', data);
        // All of the guts of the confirmation dialog live in components/ConfirmDelete.vue
      },

      DirectRoute: function(set_path){
        this.$router.push({ path: set_path})
      }
    },
    mounted: function(){
      //--------- All Message Bus events flow here -----------
      const self = this;

      //self.ShowConfirmDeleteDialog({type:'test', id: 'some_id'});

      EventBus.$on('CREATE_ARTWORK', function(data){
        console.log("Creating new entity artwork:");
        console.log(data);
        self.ShowAlert('success','Added another artwork now!');
      });

      EventBus.$on('UPDATE_ARTWORK', function(data){
        console.log("Updating entity artwork:");
        console.log(data);
      });

      EventBus.$on('DELETE_ARTWORK', function(data){
        console.log("Double-check if artwork needs deletin':");
        console.log(data);
        self.ShowConfirmDeleteDialog(data);
      });

      EventBus.$on('CONFIRMED_DELETE_ARTWORK', function(data){
        console.log("Delete entity artwork:");
        console.log(data);
        self.ShowAlert('success','Artwork listing deleted.');
      });

      EventBus.$on('CREATE_EVENT', function(data){
        console.log("Adding new entity event:");
        console.log(data);
        self.ShowAlert('success','Added your event!');
      });

      EventBus.$on('UPDATE_EVENT', function(data){
        console.log("Updating entity event:");
        console.log(data);
      });

      EventBus.$on('DELETE_EVENT', function(data){
        console.log("Double-check if artwork needs deletin':");
        console.log(data);
      });

      EventBus.$on('CONFIRMED_DELETE_EVENT', function(data){
        console.log("Delete entity event:");
        console.log(data);
      });

      EventBus.$on('UPDATE_SETTINGS', function(data){
        console.log("Updating user settings:");
        console.log(data);
      });

    },
    components: {
      'side-menu-desktop': SideMenuDesktop,
      'alert': Alert,
      'confirm-delete': ConfirmDelete
    }
  }
</script>
