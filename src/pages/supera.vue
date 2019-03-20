<template>
    <div class="flex_sec">
        <super-header></super-header>
        <super-section></super-section>
        <super-footer></super-footer>
    </div>
</template>

<script>
    import superHeader from "../components/super/superHeader"
    import superSection from "../components/super/superSection"
    import superFooter from "../components/super/superFooter"
    export default {
        name: "supera",
        components:{
            "super-header":superHeader,
            "super-section":superSection,
            "super-footer":superFooter
        }
    }
</script>

<style>
@import "../assets/css/public.css";
</style>