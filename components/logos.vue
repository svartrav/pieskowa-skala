<template>
  <div class="logos">
    <div class="logos__node">
      <img
        src="~/assets/logos/ILN.png"
        alt="ILN grants"
        class="logos__node__image"
      /><br/>
    </div>

    <div class="logos__node">
      <img
        src="~/assets/logos/MKiDN.png"
        alt="Ministerstwo Kultury i Dziedzictwa Narodowego"
        class="logos__node__image"
      />
    </div>

    <div class="logos__row">
      <div class="logos__node">
        <img
          src="~/assets/logos/Wawel.png"
          alt="Wawel"
          class="logos__node__image"
          style="margin-bottom: 10px;"
        />
        BENEFICJENT
      </div>

      <div class="logos__node">
        <img
          src="~/assets/logos/NILU.png"
          alt="NILU"
          class="logos__node__image"
          style="margin-bottom: 10px;"
        />
        PARTNER
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: "Logos",
}
</script>

<style scoped lang="scss">
.logos {
  margin-top: 5px;
  width: 100%;
  text-align: center;

  &__node {
    margin: 20px 15px 40px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__image {
      max-height: 150px;
      max-width: calc(100% - 30px);
    }
  }
}
</style>
