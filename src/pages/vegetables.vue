<template>
    <div class="flex_sec">
        <vegetables-header></vegetables-header>
        <vegetables-section></vegetables-section>
        <vegetables-footer></vegetables-footer>
    </div>
</template>

<script>
    import vegetablesHeader from "../components/vegetables/vegetablesHeader"
    import vegetablesSection from "../components/vegetables/vegetablesSection"
    import vegetablesFooter from "../components/vegetables/vegetablesFooter"
    export default {
        name: "vegetables",
        components:{
            "vegetables-header":vegetablesHeader,
            "vegetables-section":vegetablesSection,
            "vegetables-footer":vegetablesFooter
        }
    }
</script>

<style>
@import "../assets/css/public.css";
</style>