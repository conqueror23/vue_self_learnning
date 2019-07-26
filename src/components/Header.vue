<template>
    <h1 v-on:click="changeTitile" >{{title}}</h1>
</template>

<script>
import {bus} from '../index'

export default {
name:'header',
props:{
    title:{
        type:String,
    }
},
data(){
    return {
        title:'Vue nija',
    }
},methods:{
    changeTitile:function (){
        // this.$emit('changeTitle','vue wizardf')
        this.title='vue wizzrds';
        bus.$emit('titleChanged','vue wizard');
    }
},

}
</script>

<style>

</style>
