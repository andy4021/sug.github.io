<template>
  <header>
    <h2 class="goods kongkong">购物车</h2>
    <div class="head">
      <img src="/static/goodsCart/goods02.png" alt=""/>
      <h2 class="goods">购物车</h2>
      <span id="edit" @click="edit">编辑</span>
    </div>
  </header>
</template>

<script>

    export default {
        name: "cartHeader",
        methods:{
            edit(){
                this.$emit("edit")
            }
        }
    }
</script>

<style scoped>
  .kongkong{
    display:none;
  }
  header{
    width: 100%;
    height: .45rem;
    background:#f2a946;
    display:-webkit-flex;
    -webkit-justify-content:space-between;
  }
  .goods{
    font-size:15px;
    color:white;
    line-height:.45rem;
    margin:0 auto;
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
  .head span{
    font-size:13px;
    color:white;
    margin-right:.1rem;
  }
</style>
