<template xmlns="">
    <div class="flex_sec">
        <cart-header @edit="editCart"></cart-header>
        <cart-section @delet="delGoods" @goodsChecked="goodsAllChecked" @cartsChecked="cartsAllChecked" @add="addQal" @minus="minusQal" :data="goodsInfo"></cart-section>
        <cart-footer></cart-footer>
    </div>
</template>

<script>

    import cartHeader from "../components/goodscart/cartHeader"
    import cartSection from "../components/goodscart/cartSection"
    import cartFooter from "../components/goodscart/cartFooter"
    import axios from "axios"
    export default {
        name: "goodscart",
        components:{
            "cart-header":cartHeader,
            "cart-section":cartSection,
            "cart-footer":cartFooter
        },
        data(){
            return {
                goodsInfo:{},
                totalPrice:0
            }
        },
        methods:{
            _initData(){
                axios.get("/static/cartsInfo-data.json").then(res =>{
                    this.goodsInfo = res.data;
                    console.log(this.goodsInfo)
                    this._counteTotalMoney()
                    this._totalCount()
                })
            },
            _initCarts(){
                if(this.goodsInfo.products.length==0){
                    document.querySelector(".cart").style.position="absolute"
                    document.querySelector(".cart").style.left="-10000px"
                    document.querySelector("#kong").style.position="static"
                    document.querySelector("#delet").style.left="-10000px"
                    document.querySelector("#edit").innerHTML=""
                }else{
                    document.querySelector(".cart").style.position="static"
                    document.querySelector("#kong").left="-10000px"
                }
            },
            _counteTotalMoney(){
                let totalPrice = 0;
                this.goodsInfo.products.forEach((goods,pid)=>{
                    if(goods.checked){
                        totalPrice += goods.price * goods.qal;
                    }
                })
                this.goodsInfo.totalPrice = totalPrice.toFixed(2)
            },
            _totalCount(){
                let count = 0;
                this.goodsInfo.products.forEach((goods,pid)=>{
                    if(goods.checked){
                        count += goods.qal;
                    }
                })
                this.goodsInfo.count = count;
            },
            editCart(){
                if(document.querySelector("#edit").innerHTML=="编辑"){
                    document.querySelector("#delet").style.left="0"
                    document.querySelector("#settlement").style.position="absolute"
                    document.querySelector("#settlement").style.left="-10000px"
                    document.querySelector("#edit").innerHTML="完成"
                    document.querySelector(".goodsmoney").style.position="absolute"
                    document.querySelector(".goodsmoney").style.left="-10000px"
                    this._initCarts()

                }else{
                    document.querySelector("#edit").innerHTML="编辑"
                    document.querySelector("#delet").style.left="-10000px"
                    document.querySelector("#settlement").style.position="static"
                    document.querySelector(".goodsmoney").style.position="static"
                    // document.querySelector("#settlement").style.left="0"
                    // document.querySelector("#settlement").style.top="0"
                    this._initCarts()
                }

            },
            delGoods(){
                let delArr=[]
                for(let i=0;i<this.goodsInfo.products.length;i++){
                    if(this.goodsInfo.products[i].checked){
                        delArr.push(this.goodsInfo.products[i].title)
                    }
                }
                console.log(delArr);
                if(delArr.length>0){
                    if (confirm("亲，确定要删除商品吗？")) {
                        for(let j=0;j< delArr.length;j++){
                            let title = delArr[j]
                            this.goodsInfo.products.forEach((goods,pid)=>{
                                if(title===this.goodsInfo.products[pid].title){
                                    this.goodsInfo.products.splice(pid,1)
                                }
                            })
                        }
                        this._totalCount()
                    }
                }
            },
            goodsAllChecked(pid){
                let checked = this.goodsInfo.products[pid].checked
                if(checked){
                    let m = 0
                    this.goodsInfo.products.forEach((goods)=>{
                        if(goods.checked)
                            m++
                        if(m===this.goodsInfo.products.length){
                            this.goodsInfo.checked = checked
                        }
                    })
                }else{
                    this.goodsInfo.checked = checked
                }
                this._totalCount()
            },
            cartsAllChecked(){
                let checked = this.goodsInfo.checked;
                this.goodsInfo.products.forEach((goods,pid)=>{
                        goods.checked=checked;
                })
                this._totalCount()
            },
            addQal(pid){
                this.goodsInfo.products[pid].qal++
                if(this.goodsInfo.products[pid].checked)
                this.goodsInfo.count++
            },
            minusQal(pid) {
                if( this.goodsInfo.products[pid].qal<=1){
                    this.goodsInfo.products[pid].qal = 1
                    // if(pid===0){
                    //     console.log(pid,document.querySelectorAll(".disap").length)
                    //     document.querySelectorAll(".disap")[0].style.opacity="0"
                    //     document.querySelectorAll(".disap")[1].style.opacity="0"
                    // }else{
                    //     console.log(2,2*pid+2)
                    //     document.querySelectorAll(".disap")[2*pid+1].style.opacity="0"
                    //     document.querySelectorAll(".disap")[2*pid+2].style.opacity="0"
                    // }

                }else{
                    this.goodsInfo.products[pid].qal--
                    if(this.goodsInfo.products[pid].checked)
                        this.goodsInfo.count--
                }
            }
        },
        created(){
            this._initData()
        },
        watch:{
            goodsInfo:{
                deep:true,
                handler: function(n,o){
                    this._counteTotalMoney()
                    this._initCarts()
                }
            }
        }
    }
</script>

<style>
    @import "../assets/css/public.css";
</style>
