<template>

    <div class="left">
        <ul id="menu">
            <li @click="tab(pid)" :class="activeClass == pid ? 'active':''" v-for="(goodsList,pid) in data.products" :key="goodsList.pid">
                <img src="/static/imgClass/left011.png" alt=""/>
                <span>{{goodsList.title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "classLeft",
        props:["data"],
        data() {
            return {
                activeClass: 0, // 0为默认选择第一个，-1为不选择
            }
        },
        methods:{
            tab(cm){
                this.$emit("tab",cm);
                this.activeClass = cm
            }
        }
    }
</script>

<style scoped>
    .left{
        /*-webkit-flex:1;*/
        width:.83rem;
        flex-shrink:0;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .left ul{
        display:-webkit-flex;
        flex-direction:column;
        overflow-y:auto;
        background:#f5f5f5;
    }
    .left ul li{
        display:-webkit-flex;
        width:100%;
        height:.5rem;
        -webkit-justify-content:center;
        -webkit-align-items:center;
        /* background:url(../images/imgClass/left01.png) no-repeat;
        background-size:.03rem .5rem; */
        -webkit-flex-shrink:0;
    }
    .left ul li img{
        display: none;
    }
    .left ul li:first-child img{
        width:.13rem;
        height:.13rem;
        margin-right:.03rem;
        display:block;
    }
    .left ul li span{
        font-size: 13px;
        color:black;
    }
    .active {
        background:#eee url(/static/imgClass/left01.png) no-repeat;
        background-size:.03rem .5rem;
        font-weight: bolder;
    }
</style>