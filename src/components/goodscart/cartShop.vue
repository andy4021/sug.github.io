<template>
  <div class="cart">
    <div class="car_top">
      <input type="checkbox" @change="cartsChecked" v-model="data.checked"/>
      <img :src="data.imgs" alt=""/>
      <span>{{data.title}}</span>
    </div>
    <!-- 商品 -->
    <div class="car_goodslist">
      <goods @goodsChecked="goodsChecked" @minus="minus" @add="add" :data="item" :pid="pid" v-for="(item,pid) in data.products" :key="item.pid"></goods>
      <p class="goodsmoney">
        <span>商品总额</span>
        <span>￥{{data.totalPrice}}</span>
      </p>
      <carts-counter-bar @cartsChecked="cartsChecked" @delet="delet" :data="data"></carts-counter-bar>
    </div>
  </div>
</template>

<script>
    import goods from "./goods"
    import cartsCounterBar from "./cartsCounterBar"
    export default {
        name: "cartShop",
        props:["data"],
        components:{
            "goods":goods,
            "carts-counter-bar":cartsCounterBar
        },
        methods:{
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
                console.log("shop",pid)
                this.$emit("add",pid)
            },
            minus(pid){
                console.log("shop",pid)
                this.$emit("minus",pid)
            }

        }

    }
</script>

<style scoped>
  .cart{
    width:3.51rem;
    margin:0 auto;
    border-radius:.08rem;
    background:white;
    position:absolute;
    left:0;
    top:0;
  }
  .car_top{
    display:-webkit-flex;
    height:.42rem;
    -webkit-align-items:center;
    border-bottom:1px solid #f4f4f4;
  }
  .car_top img{
    width:.2rem;
    height:.2rem;
  }
  .car_top input{
    margin:0 .12rem;
  }
  .car_top span{
    font-size:11px;
    color:#313131;
    margin-left:.1rem;
  }
  .car_goodslist{
    /* width:100%; */
    padding:0 .12rem;
  }

  .goodsmoney{
    height:.4rem;
    display:-webkit-flex;
    -webkit-align-items:center;
    -webkit-justify-content:space-between;
    border-bottom:1px solid #f2f2f2;
  }
  .goodsmoney span{
    font-size:14px;
    color:#323232;
    font-weight: 900;
  }

</style>
