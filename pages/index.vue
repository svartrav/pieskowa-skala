<template>
  <div class="home">
    <div class="home__language-box">
      <span class="home__language-box__title">
        Zamek Pieskowa Skała<br />
      </span>

      <span class="home__language-box__subtitle">
        Letterbox - GCA9WJX
      </span>

      <div class="home__language-box__divider"/>

      <span class="home__language-box__text">
        Select listing language:
      </span>

      <div class="home__language-box__flags">
        <div class="home__language-box__flags__row">
          <NuxtLink to="/ListingPL">
            <img src="@/assets/flags/PL.png" class="country-flag"  alt="PL" />
          </NuxtLink>

          <NuxtLink to="/ListingEN">
            <img src="@/assets/flags/UK.png" class="country-flag" alt="EN" />
          </NuxtLink>

          <NuxtLink to="/ListingUA">
            <img src="@/assets/flags/UA.png" class="country-flag" alt="UA" />
          </NuxtLink>

          <NuxtLink to="/ListingDE">
            <img src="@/assets/flags/DE.png" class="country-flag" alt="DE" />
          </NuxtLink>

          <NuxtLink to="/ListingCZ">
            <img src="@/assets/flags/CZ.png" class="country-flag"  alt="CZ" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="scss">
.home {
  background-image: url("~@/assets/bg.svg");
  background-repeat: repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__language-box {
    max-width: calc(100% - 30px);
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

    &__subtitle {
      color: #0c2038;
      font-size: 20px;
      text-align: center;
      margin-bottom: 10px;
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
        text-align: center;

        .country-flag {
          margin: 0 5px 10px 5px;
          width: 200px;
          height: 120px;
          border: black solid 1px;
          border-radius: 5px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
