<template>
  <div>
      <v-card v-for="artwork in show_artworks" style="margin-top: 10px; max-width: 900px">
        <img src="https://unsplash.it/100" height="100px" width ="100px">
        <div style="max-width:400px; display: inline; position:absolute; left: 110px;top: 5px;">
          {{ artwork.title }} by {{ artwork.artist_name }}
        </div>
        <div style="max-width:300px; display: inline; position:absolute; right: 10px;top: 5px;">
          <v-btn flat>Delete</v-btn>
          <v-btn flat primary>Edit</v-btn>
        </div>
        <!-- {{test}} -->
      </v-card>
  </div>
</template>

<script>
  export default {
    name:'ArtworkListing',
    props: ['max_entries'],
    mounted: function() {
        if(this.max_entries === 'all'){
          this.show_artworks = this.show_artworks;
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
            artist_name: "cat O'catly"
          },
          {
            title: "dogg 2",
            artist_name: "cat O'catly"
          },
          {
            title: "dogg 3",
            artist_name: "cat O'catly"
          },
          {
            title: "dogg 4",
            artist_name: "cat O'catly"
          },
          {
            title: "'dogg 5'",
            artist_name: "cat O'catly"
          },
          {
            title: "dogg 6",
            artist_name: "cat O'catly"
          },
          {
            title: "dogg 7",
            artist_name: "cat O'catly"
          }
        ]
      }
    }
  }
</script>
