<template>
  <div class="container" style="width:100%; display:flex; justify-content: center; min-height: 100vh;">
    <div style="max-width: 1000px; padding: 50px; background-color: white;">
      <listing-header/>

      <div style="background:url(https://img.geocaching.com:443/1c75def2-54cb-4ce8-9e09-dcc22042d151.png); border:2px solid black; color:white; margin-bottom:30px; margin-top:30px; padding:30px">
        <div style="background:white; height:1px; margin-bottom:5px; margin-left:5px; margin-right:5px; margin-top:5px; width:100%">&nbsp;</div>

        <h1 style="text-align:center;"><strong>WORK IN PROGRESS</strong></h1>

        <div style="background:white;height:1px;margin-bottom:5px;margin-left:5px;margin-right:5px;margin-top:5px;width:100%;"> </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListingHeader from "@/components/listingHeader.component.vue";

export default {
  name: "ListingEN",
  components: { ListingHeader }
};
</script>

<style scoped lang="scss">
.container {
  background-image: url("~@/assets/listing-bg.jpeg");
  background-repeat: repeat;
  max-width: 100%;
}
</style>
