<template>
  <div class="goods_detail">
    <div class="goods_left">
      <input type="checkbox" @change="goodsChecked(pid)" v-model="data.checked"/>
      <img :src="data.pic" alt=""/>
      <p>
        <span>{{data.title}}</span>
        <span>￥{{data.price}}</span>
      </p>
    </div>
    <div class="goods_right">
      <img class="disap" src="/static/goodsCart/goods05.png" alt="" @click.prevent.default="minus(pid)"/>
      <span class="disap">{{data.qal}}</span>
      <img src="/static/goodsCart/goods06.png" alt="" @click.prevent.default="add(pid)"/>
    </div>
  </div>
</template>

<script>
    export default {
        name: "goods",
        props:["data","pid"],
        methods:{
            goodsChecked(pid){
                this.$emit("goodsChecked",pid)
            },
            add(pid){
                this.$emit("add",pid)
            },
            minus(pid){
                this.$emit("minus",pid)
            }
        }
    }
</script>

<style scoped>
  .goods_detail,.goods_right{
    display:-webkit-flex;
  }
  .goods_detail{
    height:.85rem;
    position: relative;
    -webkit-align-items:center;
    border-bottom:1px solid #f2f2f2;
  }
  .goods_left{
    display:-webkit-flex;
  }
  .goods_left input{
    -webkit-align-self:center;
  }
  .goods_left img{
    width:.47rem;
    height:.57rem;
    margin:0 .16rem 0 .1rem;
  }
  .goods_left p span:nth-child(1){
    display:block;
    font-size:12px;
    color:#464646;
    margin-bottom:.1rem;
  }
  .goods_left p span:nth-child(2){
    display:block;
    font-size:10px;
    color:#ec622a;
    font-weight:900;
  }
  .goods_left p span:nth-child(3){
      display:block;
      font-size:10px;
      color:#ec622a;
      font-weight:900;
      width:.3rem;
  }
  .goods_right{
    -webkit-align-items:center;
    position: absolute;
    right:0;
    bottom:.1rem;
  }
  .goods_right img{
    width:.22rem;
    height:.22rem;
  }
  .goods_right span{
    font-size: 11px;
    color:black;
    display:block;
    margin:0 .08rem;
  }
</style>
