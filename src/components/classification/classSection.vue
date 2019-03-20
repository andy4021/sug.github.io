<template>
  <section>
      <!-- 左边导航 -->

        <class-left @tab="tabContent" :data="datas"></class-left>

    <!-- 右边详情 -->
        <class-right :data="datas.products" :pid="index"></class-right>
  </section>


</template>

<script>
    import classLeft from "./classLeft"
    import classRight from "./classRight"
    export default {
        name: "classSection",
        props:["datas"],
        data(){
            return {
                index:0
            }
        },
        components:{
            "class-left":classLeft,
            "class-right":classRight
        },
        methods:{
            tabContent(str){
                console.log(1,this.index);
                this.index = str;
                console.log("pid",str)
            }
        }
    }
</script>

<style scoped>
  section{
     /*-webkit-flex:1;*/
     /*overflow-y: auto;*/
      /*overflow-x: hidden;*/
     display:-webkit-flex;
   }


</style>
