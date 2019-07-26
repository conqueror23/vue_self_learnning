<template>
    <div>
        <form >
        <label >title</label>
        <input type="text" v-model.lazy="blog.title">
        <label >content</label>
        <textarea v-model.lazy="blog.content" cols="30" rows="10"></textarea>

        <button v-on:click.prevent='post'>Post BLog</button>
        </form>

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
export default {

    data(){
        return {
            blog:{
                title:"",
                content:"",

            }
        }
    },
    methods:{
        post:function(){
            this.$http.post('https://jsonplaceholder.typicode.com/posts',{
                title:this.blog.title,
                body:this.blog.content,
            }).then(res=>{
                console.log(res)
            })

        }
    }

}
</script>

<style>

</style>
