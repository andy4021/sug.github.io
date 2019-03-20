<template>
  <footer>
    <router-link tag="a" to="/index">
      <img src="/static/imgClass/foot01.png" alt=""><span>首页</span>
    </router-link>
    <router-link tag="a" to="/classification">
      <img src="/static/imgClass/foot02.png" alt=""><span class="words">分类</span>
    </router-link>
    <router-link tag="a" to="/goodscart">
      <img src="/static/img-id/foot-03.png" alt=""><span>购物车</span>
    </router-link>
    <router-link tag="a" to="/my">
      <img src="/static/img-id/foot-04.png" alt=""><span>我的</span>
    </router-link>
  </footer>
</template>

<script>
    export default {
        name: "classFooter"
    }
</script>

<style scoped>
  footer{
    width: 100%;
    height: .5rem;
    border-top: 2px solid #f1f1f1;
    display: -webkit-flex;
    -webkit-align-items:center;
    /* position:fixed;
    bottom:0;
    left:0;
    background:white; */
  }
  footer a{
    -webkit-flex:1;
    text-align: center;
  }
  footer img{
    width: .25rem;
    height: .2rem;
    margin:0 auto;
  }
  footer span{
    display: block;
    font-size: 10px;
    color: #666666;
  }
  .words{
    color:#ff8800;
  }
</style>
