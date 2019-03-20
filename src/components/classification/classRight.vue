<template>
    <div>
    <div class="right" v-if="ind==pid" v-for="(gods,ind) in data">
        <img :src="gods.adv" alt=""/>
        <p>国产水果</p>
        <div class="detail" v-for="goods in gods.detail" @click="goto(goods.goodsId)">
            <img :src="goods.pic" alt=""/>
            <div class="deta_right">
                <p>{{goods.title}}</p>
                <span>￥{{goods.price}}</span>
                <img src="/static/imgClass/right04.png" alt=""/>
            </div>
        </div>
        <img class="end" src="/static/imgClass/right06.png" alt=""/>
    </div>
    </div>
</template>

<script>
    export default {
        name: "classRight",
        props:["data","pid"],
        methods:{
            goto(m){
                // console.log("m",m)
                // window.location.href="/#/shoping?id='m'"
                this.$router.push({path:'shoping/'+m})

            }
        }
    }
</script>

<style scoped>
    .right{
        -webkit-flex:1;
        padding-left:.1rem;
        overflow-y:auto;
    }
    .right img:nth-child(1){
        width:2.73rem;
        height:.78rem;
        margin-top:.1rem;
    }
    .right p:nth-child(2){
        font-size:11px;
        color:#767676;
        height:.22rem;
        background:#fafafa;
        border-radius:.8rem;
        margin-top:.1rem;
        padding-left:.11rem;
        margin-right:.1rem;
        line-height:.22rem;
    }
    .detail{
        display: -webkit-flex;
        padding-top:.15rem;
        width:100%;
    }
    .deta_right{
        position: relative;
        -webkit-flex:1;
        border-bottom:1px solid #f2f2f2;
        padding-bottom:.15rem;
    }
    .detail img:nth-child(1){
        width:.58rem;
        height:.65rem;
        margin-left:.06rem;
        margin-right:.13rem;
    }
    .deta_right p{
        font-size:.13rem;
        color:#3a3a3a;
    }
    .deta_right span{
        font-size:11px;
        color:#ef752d;
        font-weight:900;
        display:block;
        margin-top:.36rem;
    }
    .deta_right img{
        width:.22rem;
        height:.22rem;
        position: absolute;
        right:.1rem;
        bottom:.15rem;
    }
    .end{
        width:.7rem;
        height:.48rem;
        margin:.1rem auto 0;
    }
</style>