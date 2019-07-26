<template>
    <div id='single-blog'>
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
    </div>
</template>

<script>
import { constants } from 'crypto';
export default {
    data(){
        return{
            id:this.$route.params.id,
            blog:{
            }
        }
    },
    created(){
        this.$http.get(`https://jsonplaceholder.typicode.com/posts/`+this.id).then(res=>{
            console.log(res)
            this.blog=res.body;
        })
    }
}
</script>

<style>

</style>
