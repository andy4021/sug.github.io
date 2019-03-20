<template>
    <header>
        <div class="head">
            <img @click="go" src="/static/verget/head01.png" alt=""/>
            <h2 class="goods">生鲜水果</h2>
            <img src="/static/verget/head02.png" alt=""/>
        </div>
    </header>
</template>

<script>
    export default {
        name: "vegetablesHeader",
        methods:{
            go(){
                history.back()
            }
        }
    }
</script>

<style scoped>
    header{
        width: 100%;
        height: .42rem;
        background:white;
        display:-webkit-flex;
        -webkit-justify-content:space-between;
    }
    .goods{
        font-size:16px;
        color:#333333;
        line-height:.42rem;
        margin:0 auto;
        font-weight:900;
    }
    .head{
        display:-webkit-flex;
        -webkit-justify-content:space-between;
        -webkit-align-items:center;
        width:100%;
    }
    .head img:nth-child(1){
        width:.11rem;
        height:.2rem;
        margin-left:.16rem;
    }
    .head img:nth-child(3){
        width:.2rem;
        height:.2rem;
        margin-right:.16rem;
    }
</style>