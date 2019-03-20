<template>
    <header>
        <img src="/static/shoping/H01.png" alt=""/><img src="/static/shoping/H02.png" alt=""/>
    </header>
</template>

<script>
    export default {
        name: "shopHeader"
    }
</script>

<style scoped>
    header{
        width:100%;
        height:.45rem;
        display:-webkit-flex;
        -webkit-justify-content:space-between;
        -webkit-align-items:center;
        backgound:transparent;
    }
    header img{
        width:.31rem;
        height:.31rem;
        margin:0 .19rem;
    }
</style>