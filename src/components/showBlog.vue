<template>
  <div id="show-blogs">
    <h1>All blogs things</h1>
    <input type="text" v-model="search" placeholder="Search" value="SearchBox">
    <div
      :key="trait"
      v-for="(trait,key) in people"
      class="single-blog"
      v-rainbow
    >{{key|to-uppercase}}:::{{trait|snippet}}</div>

    <div>
        <h2> films</h2>
        <div  v-for="film in filteredList">
            {{film}}
        </div>
    </div>
  </div>
</template>

<script>
import { constants } from "crypto";
export default {
  data() {
    return {
      people: [],
      films:[],
      listh:['jake','sally','tonye','jerry','wayne'],
      search:"ss",
    };
  },
  created() {
    this.$http.get("https://swapi.co/api/people/1/").then(res => {
      console.log(res.body);
      this.people = res.body;
      this.films=res.body.films;
    });
  },
  computed:{
      filteredList:function(){
          return this.listh.filter((item)=>{
              return item.match(this.search)
          })
      }

  }
};
</script>

<style>
</style>
