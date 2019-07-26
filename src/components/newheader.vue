<template>
    <nav>
        <ul>
            <li>
                <router-link to='/'>home</router-link>
                <router-link to="/showBlog">show blogs</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
ul{
    list-style: none;
}
.router-link-exact-active{
    padding: 0.2em;
    background: red;
    color: white;
}

</style>
