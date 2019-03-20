<template>
  <header>
    <div class="header_one">
      <div class="head_left">
        <img src="/static/img-id/h01.png" alt=""/>
        <span>送至：立人科技园C座</span><span>1小时送达</span>
      </div>
      <img class="head_right" src="/static/img-id/h02.png" alt=""/>
    </div>
    <div class="header_two">
      <div class="two_left">
        <img src="/static/img-id/h03.png" alt=""/>
        <span>水果</span>
      </div>
      <img class="two_right" src="/static/img-id/h04.png" alt=""/>
    </div>
  </header>
</template>

<script>
    export default {
        name: "indexHeader"
    }
</script>

<style >
header{
  width: 100%;
  height: .74rem;
}
.header_one{
  width: 100%;
  height: .44rem;
  display: -webkit-flex;
  -webkit-align-items:center;
  -webkit-justify-content:space-between;
}
.head_left{
  display:-webkit-flex;

}
.head_left img{
  width:.14rem;
  height:.16rem;
  margin-left:.13rem;
}
.head_left span:nth-of-type(1){
  font-size: 14px;
  color:#333333;
  margin-left:.05rem;
  margin-right:.1rem;
}
.head_left span:nth-of-type(2){
  font-size: 14px;
  color:#ff8700;
  font-weight: 900;
}
.head_right{
  width:.2rem;
  height:.2rem;
  margin-right:.1rem;
}
.header_two{
  display: -webkit-flex;
  background: #f0f0f0;
  height:.3rem;
  width:3.51rem;
  border-radius:.14rem;
  margin:0 auto;
  -webkit-align-items:center;
  -webkit-justify-content:space-between;
}
.two_left{
  display:-webkit-flex;
  -webkit-align-items:center;
}
.two_left img{
  width:.13rem;
  height:.13rem;
  margin-left:.12rem;
  margin-right:.06rem;
}
.two_left span{
  font-size:14px;
  color:#999999;
}
.two_right{
  width:.18rem;
  height:.17rem;
  margin-right:.12rem;
}
</style>
