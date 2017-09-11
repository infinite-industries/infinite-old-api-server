<template>

  <v-container fluid>
    <v-card>
      <v-card-title class="dashboard-title">Present Single Artworks</v-card-title>
      <v-card-text>
        artwork id: {{id}}
      </v-card-text>
    </v-card>
  </v-container>

</template>

<script>
  import EventBus from '../helpers/EventBus.js';

  export default {
    props: ['id'],
    mounted: function(){
      console.log('page id: '+this.id);
    }
  }
</script>
