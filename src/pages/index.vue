<template>
    <div class="flex_sec">
      <index-header></index-header>
      <index-section></index-section>
      <index-footer></index-footer>
    </div>
</template>

<script>
    import indexHeader from "../components/index/indexHeader"
    import indexSection from "../components/index/indexSection"
    import indexFooter from "../components/index/indexFooter"
    export default {
      name: "index",
      components:{
          "index-header":indexHeader,
          "index-section":indexSection,
          "index-footer":indexFooter
      }
    }
</script>

<style >
  @import "../assets/css/public.css";
</style>
