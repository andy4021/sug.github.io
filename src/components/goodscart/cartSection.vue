<template>
  <section>
    <div id="kong" class="kongkong sect">
      <img src="/static/goodsCart/back01.png" alt=""/>
      <p>购物车空空如也</p>
      <span>快挑选你喜欢的商品，让购物车充实起来</span>
      <img @click="goGoods" src="/static/goodsCart/back02.png" alt=""/>
    </div>
    <div class="goodsCat">
      <div class="top">
        <span>送至</span>
        <span>立人科技园C座</span>
        <img src="/static/goodsCart/goods09.png" alt=""/>
      </div>
      <cart-shop @delet="delet" @goodsChecked="goodsChecked" @cartsChecked="cartsChecked" @add="add" @minus="minus" :data="data"></cart-shop>
    </div>
  </section>


</template>

<script>
    import cartShop from "./cartShop"
    export default {
        name: "cartSection",
        props:["data"],
        components:{
            "cart-shop":cartShop
        },
        methods:{
            goGoods(){
                location.href="/#/index"
            },
            delet(){
                this.$emit("delet")
            },
            goodsChecked(pid){
                this.$emit("goodsChecked",pid)
            },
            cartsChecked(){
                this.$emit("cartsChecked")
            },
            add(pid){
                console.log("cartsection",pid)
                this.$emit("add",pid)
            },
            minus(pid){
                console.log("cartsection",pid)
                this.$emit("minus",pid)
            }
        }
    }
</script>

<style scoped>
  section{
    -webkit-flex:1;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    background: #f2f2f2;
  }
  .kongkong{
    /*display: none;*/
      /*overflow: hidden;*/
      position:absolute;
      left:-10000px;
      top:0;
  }
  .sect{
    margin:1.15rem auto;
  }
  .kongkong img:nth-child(1){
    width:1.7rem;
    height:1.64rem;
    margin:auto;
  }
  .kongkong p{
    font-size:14px;
    color:#565656;
    text-align: center;
  }
  .kongkong span{
    display:block;
    font-size:14px;
    color:#666666;
    text-align: center;
  }
  .kongkong img:last-child{
    width:.8rem;
    height:.3rem;
    margin:auto;
  }
  .goodsCat{
    background:#f2f2f2;
    width:100%;
      position:absolute;
      left:0;
      top: 0;
  }
  .top{
    display:-webkit-flex;
    height:.4rem;
    -webkit-align-items:center;
  }
  .top span:nth-child(1){
    font-size:13px;
    color:#a9a9a9;
    margin:0 .08rem 0 .15rem;
  }
  .top span:nth-child(2){
    font-size:13px;
    color:#424242;
    margin-right:.11rem;
  }
  .top img{
    width:.1rem;
    height:.05rem;
    margin-top:.04rem;
  }

</style>
