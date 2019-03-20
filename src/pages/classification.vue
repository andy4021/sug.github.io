<template>
    <div class="flex_sec">
      <class-header></class-header>
      <class-section :datas="classInfo"></class-section>
      <class-footer></class-footer>
    </div>
</template>

<script>
    import classHeader from "../components/classification/classHeader"
    import classSection from "../components/classification/classSection"
    import classFooter from "../components/classification/classFooter"
    import axios from "axios"
    export default {
        name: "classification",
        components:{
          "class-header":classHeader,
          "class-section":classSection,
          "class-footer":classFooter
        },
        data(){
            return {
                classInfo:{}
            }
        },
        methods:{
            _initData(){
                axios.get("/static/classifi-data.json").then(res =>{
                    this.classInfo = res.data;
                    console.log(this.classInfo)
                })
            }
        },
        created(){
            this._initData()
        }
    }
</script>

<style>
  @import "../assets/css/public.css";
</style>
