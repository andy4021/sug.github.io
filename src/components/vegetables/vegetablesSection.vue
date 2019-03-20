<template>

    <section>
        <img class="adv01" src="/static/verget/adv01.png" alt=""/>
        <img class="adv02" src="/static/verget/adv02.png" alt=""/>
        <div class="goodslist">
            <a href="#">
                <img src="/static/verget/goods01.png" alt=""/>
                <p>智利车厘子单J250g装</p>
                <span>￥24.9</span>
                <img class="cart01" src="/static/verget/cart01.png" alt=""/>
            </a>
            <a href="#">
                <img src="/static/verget/goods01.png" alt=""/>
                <p>智利车厘子单J250g装</p>
                <span>￥24.9</span>
                <img class="cart01" src="/static/verget/cart01.png" alt=""/>
            </a>
        </div>
        <img class="adv02" src="/static/verget/adv03.png" alt=""/>
        <div class="goodslist goods_detal">
            <a class="goods_at" href="#">
                <img src="/static/verget/goods04.png" alt=""/>
                <p>华山牧产品优酪乳    （燕麦） 180g</p>
                <img src="/static/verget/goods03.png" alt="">
                <span class="goods_through">￥5</span>
                <p class="goods_word">￥3.2</p>
                <img class="cart01" src="/static/verget/cart01.png" alt=""/>
            </a>
            <a class="goods_at" href="#">
                <img src="/static/verget/goods05.png" alt=""/>
                <p>蒙牛 优益C活菌型乳酸菌饮品 原味340ml</p>
                <img src="/static/verget/goods033.png" alt="">
                <span>￥24.9</span>
                <p class="goods_price">￥7.5 <img src="/static/verget/goods06.png" alt=""/></p>
                <img class="cart01" src="/static/verget/cart01.png" alt=""/>
            </a>
            <a class="goods_at" href="#">
                <img src="/static/verget/goods04.png" alt=""/>
                <p>华山牧产品优酪乳    （燕麦） 180g</p>
                <img src="/static/verget/goods03.png" alt="">
                <span class="goods_through">￥5</span>
                <p class="goods_word">￥3.2</p>
                <img class="cart01" src="/static/verget/cart01.png" alt=""/>
            </a>
            <a class="goods_at" href="#">
                <img src="/static/verget/goods05.png" alt=""/>
                <p>蒙牛 优益C活菌型乳酸菌饮品 原味340ml</p>
                <img src="/static/verget/goods033.png" alt="">
                <span>￥24.9</span>
                <p class="goods_price">￥7.5 <img src="/static/verget/goods06.png" alt=""/></p>
                <img class="cart01" src="/static/verget/cart01.png" alt=""/>
            </a>
            <a class="goods_at" href="#">
                <img src="/static/verget/goods04.png" alt=""/>
                <p>华山牧产品优酪乳    （燕麦） 180g</p>
                <img src="/static/verget/goods03.png" alt="">
                <span class="goods_through">￥5</span>
                <p class="goods_word">￥3.2</p>
                <img class="cart01" src="/static/verget/cart01.png" alt=""/>
            </a>
            <a class="goods_at" href="#">
                <img src="/static/verget/goods05.png" alt=""/>
                <p>蒙牛 优益C活菌型乳酸菌饮品 原味340ml</p>
                <img src="/static/verget/goods033.png" alt="">
                <span>￥24.9</span>
                <p class="goods_price">￥7.5 <img src="/static/verget/goods06.png" alt=""/></p>
                <img class="cart01" src="/static/verget/cart01.png" alt=""/>
            </a>
        </div>
    </section>
</template>

<script>
    export default {
        name: "vegetablesSection"
    }
</script>

<style scoped>

    section{
        width:100%;
        -webkit-flex:1;
        overflow-y: auto;
        overflow-x: hidden;
        position: relative;
        background:#ec622b;
    }
    .adv01{
        width:3.55rem;
        height:1.4rem;
        margin:0 auto;
    }
    .adv02{
        width:3.55rem;
        height:.8rem;
        margin:0 auto;
    }
    .adv01,.adv02{
        margin-top:.1rem;
    }
    .goodslist{
        display:-webkit-flex;
        width:3.55rem;
        margin:.1rem auto 0;
    }
    .goodslist a{
        width:1.49rem;
        background:white;
        padding:.13rem;
        position:relative;
        border-radius:.1rem;
    }
    .goodslist a:nth-child(2n-1){
        margin-right:.05rem;
    }
    .goodslist a img{
        width:1.33rem;
        height:1.48rem;
        margin:0 auto;
    }
    .goodslist a p{
        font-size:13px;
        color:#2e2e2e;
        margin-top:.1rem;
    }
    .goodslist a span{
        font-size:.12rem;
        color:#ec622a;
        display:block;
        margin-top:.6rem;
    }
    .goodslist .cart01{
        width:.28rem;
        height:.3rem;
        position:absolute;
        right:.13rem;
        bottom:.13rem;
    }
    .goodslist .goods_at img:nth-child(1){
        width:1.24rem;
        height:1.37rem;
    }
    .goodslist .goods_at img:nth-child(3){
        width:.95rem;
        height:.21rem;
        margin:0;
    }
    .goodslist .goods_at span{
        margin-top:.02rem;
    }
    .goodslist .goods_through{
        color:#999999;
        text-decoration:line-through;
    }
    .goodslist .goods_word{
        font-size:.12rem;
        color:#ec622a;
        font-weight:900;
    }
    .goodslist .goods_at .goods_price{
        font-size:.12rem;
        color:#e7ad3b;
        font-weight:900;
        display:-webkit-flex;
    }
    .goodslist .goods_at .goods_price img{
        width:.44rem;
        height:.12rem;
        margin:auto 0;
        margin-left:.06rem;
    }
    .goods_detal{
        flex-wrap:wrap;
    }
    .goods_detal .goods_at{
        margin-bottom:.06rem;
    }
</style>