<template>
    <div class="flex_sec">
        <selection-header></selection-header>
        <selection-section></selection-section>
        <selection-footer></selection-footer>
    </div>
</template>

<script>
    import selectionHeader from "../components/selection/selectionHeader"
    import selectionSection from "../components/selection/selectionSection"
    import selectionFooter from "../components/selection/selectionFooter"
    export default {
        name: "selection",
        components:{
            "selection-header":selectionHeader,
            "selection-section":selectionSection,
            "selection-footer":selectionFooter
        }
    }
</script>

<style>
@import "../assets/css/public.css";
</style>