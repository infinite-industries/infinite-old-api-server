<template>
  <div>
      <v-card v-for="event in show_events" style="margin-top: 10px; max-width: 900px">
        <img src="https://unsplash.it/100" height="100px" width ="100px">
        <div style="max-width:400px; display: inline; position:absolute; left: 110px;top: 5px;">
          {{ event.title }}
          <div>{{event.description}}</div>
        </div>
        <div style="max-width:300px; display: inline; position:absolute; right: 10px;top: 5px;">
          <v-btn flat>Delete</v-btn>
          <v-btn flat primary @click.native.stop="directRoute('/edit-event')">Edit</v-btn>
        </div>
        <!-- {{test}} -->
      </v-card>
  </div>
</template>

<script>
  export default {
    name:'EventListing',
    props: ['max_entries'],
    mounted: function() {
        if(this.max_entries === 'all'){
          this.show_events = this.events;
        }
        else{
          this.show_events = this.events.slice(0,this.max_entries);
        }

    },
    methods: {
      directRoute: function(set_path){
        this.$router.push({ path: set_path})
      }
    },
    data: function () {
      return {
        show_events: [],
        events : [
          {
            title: "'dogg 1'",
            description: "A show by Dogg 1"
          },
          {
            title: "dogg 2",
            description: "A show by Dogg 2"
          },
          {
            title: "dogg 3",
            description: "A show by Dogg 3"
          },
          {
            title: "dogg 4",
            description: "A show by Dogg 4"
          },
          {
            title: "'dogg 5'",
            description: "A show by Dogg 5"
          },
          {
            title: "dogg 6",
            description: "A show by Dogg 6"
          },
          {
            title: "dogg 7",
            description: "A show by Dogg 7"
          }
        ]
      }
    }
  }
</script>
