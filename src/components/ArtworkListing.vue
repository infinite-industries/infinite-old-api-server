<style>
  .listing-card{
    margin-top: 10px;
    max-width: 900px;
  }

  .artwork-descriptor{
    max-width:400px;
    display: inline;
    position:absolute;
    left: 110px;
    top: 5px;
  }

  .listing-card-controlls{
    max-width:300px;
    display: inline;
    position:absolute;
    right: 10px;
    top: 5px;
  }

  .more-info{
    padding-top: 10px;
  }

  .more-info:hover{
    color: red;
  }
</style>


<template>
  <div>
    <!-- Show Confirmation Dialog if deleting entity -->
    <confirm-delete></confirm-delete>

      <v-card v-for="(artwork, index) in show_artworks" class="listing-card">
        <img src="https://unsplash.it/100" height="100px" width ="100px"  @click="RouteWithProps('/show-single-artwork', artwork.id)">

        <div class="artwork-descriptor">
          {{ artwork.title }} by {{ artwork.artist_name }}
          <div class="more-info" @click="RouteWithProps('/show-single-artwork', artwork.id)">
            more info
          </div>
        </div>
        <div class="listing-card-controlls">
          <v-btn flat @click.native.stop="Delete(artwork.id, index)">Delete</v-btn>

          <v-btn flat primary @click.native.stop="RouteWithProps('/edit-artwork', artwork.id)">Edit</v-btn>
        </div>
        <!-- {{test}} -->
      </v-card>
  </div>
</template>



<script>
  import EventBus from '../helpers/EventBus.js';

  import ConfirmDelete from '../components/ConfirmDelete.vue';

  export default {
    name:'ArtworkListing',
    props: ['max_entries'],
    methods: {
      DirectRoute: function(set_path){
        this.$router.push({ path: set_path})
      },
      RouteWithProps: function(set_path, props){
        const route_path = set_path +"/"+ props;
        this.$router.push({ path: route_path})
      },
      Delete: function(id, index){
        this.show_artworks.splice(index, 1);
        //EventBus.$emit('DELETE_ARTWORK', { type:'artwork', id: id});
        EventBus.$emit('CONFIRMATION_DIALOG', { type:'artwork', id: id});
      }
    },
    mounted: function() {
      if(this.max_entries === 'all'){
        this.show_artworks = this.artworks;
      }
      else{
        this.show_artworks = this.artworks.slice(0,this.max_entries);
      }

    },
    data: function () {
      return {
        show_artworks: [],
        artworks : [
          {
            title: "'dogg 1'",
            artist_name: "cat O'catly",
            id: "1"
          },
          {
            title: "dogg 2",
            artist_name: "cat O'catly",
            id: "2"
          },
          {
            title: "dogg 3",
            artist_name: "cat O'catly",
            id: "3"
          },
          {
            title: "dogg 4",
            artist_name: "cat O'catly",
            id: "4"
          },
          {
            title: "'dogg 5'",
            artist_name: "cat O'catly",
            id: "5"
          },
          {
            title: "dogg 6",
            artist_name: "cat O'catly",
            id: "6"
          },
          {
            title: "dogg 7",
            artist_name: "cat O'catly",
            id: "7"
          }
        ]
      }
    },
    components: {
      'confirm-delete': ConfirmDelete
    }
  }
</script>
