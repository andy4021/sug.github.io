<template>
  <header>
    <div class="header_two">
      <div class="two_left">
        <img src="/static/img-id/h03.png" alt=""/>
        <span>水果</span>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: "classHeader"
    }
</script>

<style scoped>
  header{
    width: 100%;
    height: .43rem;
    position: relative;
    border-bottom:1px solid #e6e6e6;
  }
  .header_two{
    display: -webkit-flex;
    background: #f0f0f0;
    height:.3rem;
    width:3.51rem;
    border-radius:.14rem;
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom: 0;
    margin:auto;
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
</style>
