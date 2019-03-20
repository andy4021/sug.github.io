<template>
  <header>
      <div class="header_one">
          <a href="#"><img src="/static/my/head01.jpg" alt=""/></a>
          <a href="#"><img src="/static/my/head02.jpg" alt=""/></a>
          <a href="#"><img src="/static/my/head03.jpg" alt=""/></a>
      </div>
  </header>
</template>

<script>
    export default {
        name: "myHeader"
    }
</script>

<style scoped>
  header{
    width: 100%;
    height: .4rem;
    background:url("/static/my/head04.jpg") repeat-y;
    background-size:100%;
  }
  .header_one{
    width: 100%;
    height: .4rem;
    display: -webkit-flex;
    -webkit-align-items:center;
    -webkit-justify-content:flex-end;
  }
  .header_one a img{
      width:.23rem;
      height:.23rem;
      margin:0 .16rem 0 .05rem;
  }

</style>
