<template>

    <header>
        <img src="/static/super/head01.jpg" alt="" @click="go"/>
        <h3>SUPER会员小店版</h3>
    </header>
</template>

<script>
    export default {
        name: "superHeader",
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
        height: .44rem;
        display:-webkit-flex;
        -webkit-align-items:center;
    }
    header img{
        width:.12rem;
        height:.18rem;
        margin-right:.93rem;
        margin-left:.12rem;
    }
    header h3{
        font-size:16px;
        color:#333333;
    }
</style>