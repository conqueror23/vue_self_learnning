<template>
    <div>
        <form action="">
        <label >title</label>
        <input type="text" v-model.lazy="blog.title">
        <label >content</label>
        <textarea v-model.lazy="blog.content" cols="30" rows="10"></textarea>

        <button v-on:click='post'></button>
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

        }
    }

}
</script>

<style>

</style>
