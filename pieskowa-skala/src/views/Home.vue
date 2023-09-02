<template>
  <div class="home">
    <div class="home__language-box">
      <span style="justify-content: center" class="home__language-box__title">
        Letterbox Zamek Pieskowa Skała
      </span>

      <div class="home__language-box__divider"/>

      <span class="home__language-box__text">
        Select listing language:
      </span>

      <div class="home__language-box__flags">
        <div class="home__language-box__flags__row">
          <img src="@/assets/flags/PL.png" class="country-flag" alt="PL" @click="routeTo('PL')" />
          <img src="@/assets/flags/UK.png" class="country-flag" alt="EN" @click="routeTo('EN')" />
          <img src="@/assets/flags/UA.png" class="country-flag" alt="UA" @click="routeTo('UA')" />
        </div>

        <div class="home__language-box__flags__row">
          <img src="@/assets/flags/DE.png" class="country-flag" alt="DE" @click="routeTo('DE')" />
          <img src="@/assets/flags/CZ.png" class="country-flag" alt="CZ" @click="routeTo('CZ')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Home",
  methods: {
    routeTo(listingVersion) {
      router.push(`/listing-${listingVersion}`);
    },
  },
};
</script>

<style lang="scss">
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__language-box {
    width: 700px;
    padding: 30px;
    background-color: white;
    border: #0c2038 solid 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__title {
      color: #0c2038;
      font-size: 30px;
      text-align: center;
    }

    &__divider {
      height: 2px;
      background-color: #0c2038;
      width: 100%;
      margin-bottom: 10px;
    }

    &__text {
      color: #0c2038;
      font-size: 20px;
    }

    &__flags {
      margin-top: 10px;

      &__row {
        margin-bottom: 19px;

        &:last-child {
          margin-bottom: 0px;
        }

        .country-flag {
          width: 200px;
          height: 120px;
          margin-right: 19px;
          border: black solid 1px;
          border-radius: 5px;
          cursor: pointer;

          &:last-child {
            margin-right: 0px;
          }
        }
      }
    }
  }
}
</style>