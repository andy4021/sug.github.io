<template>
    <div class="flex_sec">
        <shop-header></shop-header>
        <shop-section :data="shopsInfo"></shop-section>
        <shop-footer></shop-footer>
    </div>

</template>

<script>
    import shopHeader from "../components/shoping/shopHeader"
    import shopSection from "../components/shoping/shopSection"
    import shopFooter from "../components/shoping/shopFooter"
    import axios from "axios"
    export default {
        name: "shoping",
        components:{
            "shop-header":shopHeader,
            "shop-section":shopSection,
            "shop-footer":shopFooter
        },
        data(){
            return {
                shopsInfo:{},
                goodsId:""
            }
        },
        methods:{
            getUrlParam() {

            },
            _initshops(){
                this.goodsId=this.$route.params && this.$route.params.id;
                console.log(this.goodsId);
                var datas = {};
                axios.get("/static/classifi-data.json").then(res =>{
                    datas = res.data.products;
                    console.log(datas);
                    var goodsInfo = {};
                    datas.forEach((detals)=>{
                        detals.detail.forEach((goods)=>{
                            if(goods.goodsId===this.goodsId){
                                this.shopsInfo=goods;
                                console.log(2,this.shopsInfo);
                            }
                        })
                    })
                })
            }
        },
        created(){
            this._initshops()
        }
    }
</script>

<style>
    @import "../assets/css/public.css";
</style>