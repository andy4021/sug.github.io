<template>
    <div class="total">
        <div id="settlement">
            <div class="totalleft">
                <p>
                    <span>总计：</span>
                    <span>￥{{data.totalPrice}}</span>
                </p>
                <span class="totalword">另需配送费￥5元，满￥48免费配送</span>
            </div>
            <img src="/static/goodsCart/goods08.png" alt=""/>
        </div>

        <div id="delet" class="dele">
            <div class="dele_left">
                <input type="checkbox" @change="cartsChecked" v-model="data.checked">
                <p>全选 <span>(已选{{data.count}}件)</span> </p>
            </div>
            <span class="delet" @click="delet">删除</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cartsCounterBar",
        props:["data"],
        methods:{
            delet(){
                this.$emit("delet")
            },
            cartsChecked(){
                this.$emit("cartsChecked")
            }
        }
    }
</script>

<style scoped>
  #settlement{
    display:-webkit-flex;
    -webkit-justify-content:flex-end;
    height:.62rem;
    -webkit-align-items:center;
  }
  .total{
      position:relative;
  }
  .totalleft p{
    font-size:14px;
  }
  .totalleft p{
    display:-webkit-flex;
    -webkit-justify-content:flex-end;
  }
  .totalleft p span:first-child{
    color:#595959;
  }
  .totalleft p span:last-child{
    color:#ff6c00;
    font-weight: 900;
    /* margin-left:.05rem; */
  }
  .totalword{
    color:#aaaaaa;
    font-size:10px;
    display:block;
  }
  .total img:nth-child(2){
    width:.9rem;
    height:.32rem;
    margin-left:.12rem;
  }
    .dele{
        width:100%;
        background:white;
        height:.5rem;
        position:fixed;
        bottom:.51rem;
        left:-1000px;
        display:-webkit-flex;
        -webkit-justify-content:space-between;
        -webkit-align-items:center;

    }
    .dele_left{
        display:-webkit-flex;
        -webkit-align-items:center;
        margin-left:.1rem;
    }
    .dele_left p span{
        color:#999999;
        display:block;
    }
    .dele p{
        font-size:15px;
        color:#333333;
        display:-webkit-flex;
        margin-left:.02rem;
    }
    .dele .delet{
        font-size:15px;
        width:.9rem;
        height:.32rem;
        background:red;
        color:white;
        text-align:center;
        line-height:.32rem;
        border-radius:.05rem;
        margin-right:.1rem;
    }
</style>
