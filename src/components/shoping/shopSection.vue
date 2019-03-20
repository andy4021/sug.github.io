<template>
    <section>
        <img class="goods_pic" :src="data.pic" alt=""/>
        <div class="vip">
            <img src="/static/shoping/H03.png" alt=""/>
            <p>距结束<span></span><span></span>天<span></span><span></span>:<span></span><span></span>:<span></span><span></span></p>
        </div>
        <p class="sell">
            <span><i>限购5件</i></span>
            <span>已售5525份</span>
        </p>
        <p class="title">{{data.title}}</p>
    </section>
</template>

<script>
    export default {
        name: "shopSection",
        props:["data"]
    }
</script>

<style scoped>
    .goods_pic{
        width:3.75rem;
        height:3.46rem;
    }
    .vip{
        display:-webkit-flex;
        -webkit-justify-content:space-between;
        -webkit-align-items:center;
        background:#f8d2ae;
        height:.45rem;
    }
    .vip img{
        width:1.44rem;
        height:.5rem;
        margin-bottom: .06rem;
    }
    .vip p{
        font-size:10px;
        color:#666666;
        display:-webkit-flex;
        -webkit-align-items:center;
    }
    .vip span{
        display:block;
        width:.14rem;
        height:.17rem;
        background:#fce9d7;
    }
    .vip p span:nth-child(2n-1){
        margin-right:.02rem;
    }
    .vip p span:last-child{
        margin-right:.14rem;
    }
    .sell{
        display:-webkit-flex;
        height:.28rem;
        -webkit-justify-content: space-between;
        -webkit-align-items:center;
        padding:0 .1rem;
    }
    .sell span:first-child{
        width:.45rem;
        height:.13rem;
        border:1px solid #6cb13f;
        text-align:center;
        border-radius:.06rem;
        line-height:.13rem;
    }
    .sell span i{
        display:block;
        color:#6cb13f;
        font-size: 10px;
        transform:scale(0.8);
        font-style:normal;
    }
    .sell span:last-child{
        font-size:11px;
        color:#999999;
    }
    .title{
        font-size:14px;
        color:#333333;
        height:.51rem;
        line-height:.51rem;
        padding-left:.1rem;
    }
</style>