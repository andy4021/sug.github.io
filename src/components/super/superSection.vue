<template>
    <section>
        <div class="adv">
            <div class="vip_top">
            </div>
            <img class="adv_vip" src="/static/super/adv01.jpg" alt=""/>
            <p class="word_vip">开通会员一年可省 <span>720</span>元</p>
            <div class="privilege">
                <div class="priv_top">
                    <div class="priv_topleft">
                        <img src="/static/super/adv02.jpg" alt=""/>
                        <h3>会员特权</h3>
                    </div>
                    <div class="priv_topright">
                        <span>详细介绍</span>
                        <img src="/static/super/adv03.jpg" alt=""/>
                    </div>
                </div>
                <img class="priv_img" src="/static/super/adv04.jpg" alt=""/>
                <img class="priv_img2" src="/static/super/adv05.jpg" alt=""/>
            </div>
        </div>
        <div class="hotsell">
            <div class="hot_title">
                <img class="hotimg1" src="/static/super/adv07.jpg" alt=""/>
                <img class="hotimg2" src="/static/super/adv06.jpg" alt=""/>
                <h3>热销爆款</h3>
                <img class="hotimg2" src="/static/super/adv06.jpg" alt=""/>
                <img class="hotimg1" src="/static/super/adv07.jpg" alt=""/>
            </div>
            <div class="hot_detail">
                <div class="hot_goods">
                    <img class="goods_left" src="/static/super/goods01.jpg" alt=""/>
                    <div class="goods_right">
                        <p>贝拉小蜜蜂BELLABEE婴儿植物洗衣</p>
                        <p>已售7000+</p>
                        <span>￥23.9</span>
                        <p>￥19.9 <img src="/static/super/goods03.jpg" alt=""/></p>
                    </div>
                    <div class="count">
                        <img src="/static/super/goods04.jpg" alt=""/>
                        <span>1</span>
                        <img src="/static/super/goods05.png" alt=""/>
                    </div>
                </div>
                <div class="hot_goods">
                    <img class="goods_left" src="/static/super/goods02.jpg" alt=""/>
                    <div class="goods_right">
                        <p>贝拉小蜜蜂BELLABEE婴儿植物洗衣</p>
                        <p>已售7000+</p>
                        <span>￥23.9</span>
                        <p>￥19.9 <img src="/static/super/goods03.jpg" alt=""/></p>
                    </div>
                    <div class="count">
                        <img src="/static/super/goods04.jpg" alt=""/>
                        <span>1</span>
                        <img src="/static/super/goods05.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "superSection"
    }
</script>

<style scoped>
    section{
        -webkit-flex:1;
        overflow-y: auto;
        overflow-x: hidden;
        position: relative;
        background:#f2f2f2;
    }
    .adv{
        background:white;
        /*padding:0 .1rem;*/
        position:relative;
    }
    .vip_top{
        height:1.22rem;
        background:url("/static/super/adv1.png") repeat-y;
        background-size:100%;
        border-top:1px solid #e6e6e6;
    }
    .adv_vip{
        width:3.35rem;
        height:1.41rem;
        position:absolute;
        left:.2rem;
        top:.61rem;
    }
    .word_vip{
        font-size:11px;
        color:#323232;
        background:#f6c8a3;
        width:2rem;
        height:.31rem;
        text-align:center;
        line-height:.31rem;
        border-radius:.04rem;
        z-index:1;
        position:absolute;
        left:.87rem;
        top:1.85rem;
        font-weight:900;
    }
    .word_vip span{
        color:#eb463d;
    }
    .privilege{
        margin-top:1.1rem;
        padding:0 .1rem .11rem;
    }
    .priv_top{
        display:-webkit-flex;
        -webkit-justify-content:space-between;
        -webkit-align-items:center;
        height:.38rem;
    }
    .priv_topleft{
        display:-webkit-flex;
        -webkit-align-items:center;
    }
    .priv_topleft img{
        width:.03rem;
        height:.16rem;
        margin-right:.06rem;
    }
    .priv_topleft h3{
        font-size:16px;
        color:#333333;
    }
    .priv_topright{
        display:-webkit-flex;
        -webkit-align-items:center;
    }
    .priv_topright span{
        font-size:12px;
        color:#343434;
    }
    .priv_topright img{
        width:.07rem;
        height:.12rem;
        margin-left:.06rem;
    }
    .priv_img{
        width:3.55rem;
        height:1.16rem;
        margin:0 auto;
    }
    .priv_img2{
        width:3.55rem;
        height:1.22rem;
        margin:.08rem auto 0;
    }
    .hotsell{
        background:white;
        margin-top:.1rem;
    }
    .hot_title{
        height:.4rem;
        display:-webkit-flex;
        -webkit-align-items:center;
        -webkit-justify-content: center;
        border-bottom:1px solid #f1f1f1;
    }
    .hot_title h3{
        margin:0 .11rem;
        font-size:15px;
        color:#4f4f4f;
    }
    .hotimg1{
        width:.04rem;
        height:.04rem;
        margin:0 .04rem;
    }
    .hotimg2{
        width:.1rem;
        height:.1rem;
    }
    .hot_goods{
        display:-webkit-flex;
        padding:.12rem;
        border-bottom:1px solid #f1f1f1;
        position:relative;
    }
    .goods_left{
        width:.89rem;
        height:.83rem;
        flex-self:center;
        margin-right:.1rem;
    }
    .goods_right p:nth-child(1){
        font-size:14px;
        color:#222222;
        font-weight:900;
        margin-top:.15rem;
    }
    .goods_right p:nth-child(2){
        font-size:14px;
        color:#666666;
        margin:.1rem 0 .12rem;
    }
    .goods_right span:nth-child(3){
        font-size:10px;
        color:#ec622a;
        display:block;
        font-weight:900;
    }
    .goods_right p:nth-child(4){
        font-size:12px;
        color:#e7ad3b;
        margin-top:.07rem;
        display:-webkit-flex;
        font-weight:900;
        -webkit-align-items: center;
    }
    .goods_right p:nth-child(4) img{
        width:.4rem;
        height:.1rem;
        margin-left:.05rem;
    }
    .count{
        display:-webkit-flex;
        position:absolute;
        right:.12rem;
        bottom:.12rem;

    }
    .count img{
        width:.22rem;
        height:.22rem;
    }
    .count span{
        font-size:11px;
        color:#424242;
        margin:0 .11rem;
    }
</style>