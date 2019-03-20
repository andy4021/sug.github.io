<template>
    <div class="flex_sec">
        <my-header></my-header>
        <my-section></my-section>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import myHeader from "../components/my/myHeader"
    import mySection from "../components/my/mySection"
    import myFooter from "../components/my/myFooter"
    export default {
        name: "my",
        components:{
            "my-header":myHeader,
            "my-section":mySection,
            "my-footer":myFooter
        }
    }
</script>

<style>
@import "../assets/css/public.css";
</style>
