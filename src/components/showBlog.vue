<template>
    <div id="show-blogs">
        <h1>All blogs things</h1>
        <div :key='trait' v-for="(trait,key) in people" class="single-blog" v-rainbow>
            {{key|to-uppercase}}:::{{trait|snippet}}
        </div>

    </div>
</template>

<script>
import { constants } from 'crypto';
export default {
data(){
    return {
        people:{},

    }
},
created(){
    this.$http.get('https://swapi.co/api/people/1/').then(res=>{
        console.log(res.body)
        this.people=res.body;
    })
}


}
</script>

<style>

</style>
