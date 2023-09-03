<template>
  <div class="container">
    <div class="listing">
      <listing-header/>

      <div class="listing__section">
        <div class="listing__section__divider"/>

        <span class="listing__section__title">
          IN ARBEIT
        </span>

        <div class="listing__section__divider"/>
      </div>

      <div class="listing__section">
        <span class="listing__section__title">
          <a href="https://coord.info/GCA9WJX" class="link">
            Geocache-Listing auf Geocaching.com
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import ListingHeader from "@/components/listingHeader.component.vue";

export default {
  name: "ListingDE",
  components: { ListingHeader }
};
</script>

<style scoped lang="scss">
.container {
  background-image: url("~@/assets/listing-bg.jpeg");
  background-repeat: repeat;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  .listing {
    width: 1000px;
    max-width: calc(100% - 20px);
    padding: 50px;
    background-color: white;

    @media (max-width: 600px) {
      padding: 10px;
    }

    &__section {
      background: url("~@/assets/listing-text-bg.jpeg");
      border: 2px solid black;
      color: white;
      margin-bottom: 30px;
      margin-top: 30px;
      padding: 30px;

      @media (max-width: 600px) {
        padding: 10px;
      }

      &:last-child {
        margin-bottom: 0px;
      }

      &__divider {
        background: white;
        height: 1px;
        margin: 20px 5px;
        width: 100%;
      }

      &__title {
        display: inline-block;
        width: 100%;
        text-align: center;
        font-size: 24px;
        font-weight: bolder;
      }

      &__text {

      }
    }

    .link {
      color: white;
      text-decoration: underline;
      font-weight: bold;
    }
  }
}
</style>
