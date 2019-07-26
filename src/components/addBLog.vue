<template>
    <div>
        <form v-if="!submitted">
        <label >title</label>
        <input type="text" v-model.lazy="blog.title">
        <label >content</label>
        <textarea v-model.lazy="blog.content" cols="30" rows="10"></textarea>

        <button v-on:click.prevent='post'>Post BLog</button>
        </form>
        <div v-if="submitted">
            <h3>You have post </h3>
        </div>

        <div>
            <h2>blog preview</h2>
            <p>title</p>
            <p>{{blog.title}}</p>
            <p>content:</p>
            <p>{{blog.content}}</p>
        </div>
    </div>
</template>

<script>
import { constants } from 'crypto';
export default {

    data(){
        return {
            blog:{
                title:"",
                content:"",
            },
               submitted:false,
        }
    },
    methods:{
        post:function(){
            // vue-resource http post
            this.$http.post('https://jsonplaceholder.typicode.com/posts',{
                title:this.blog.title,
                body:this.blog.content,
            }).then(res=>{
                console.log(res)
                this.submitted=true;
            })

            
        }
    }

}
</script>

<style>

</style>
