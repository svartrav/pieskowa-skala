<template>
  <div class="logos">
    <img
      src="~/assets/logos/Wawel.png"
      alt="Wawel"
      class="logos__image"
    />

    <img
      src="~/assets/logos/ILN.png"
      alt="ILN grants"
      class="logos__image"
    />

    <img
      src="~/assets/logos/NILU.png"
      alt="NILU"
      class="logos__image"
    />

    <img
      src="~/assets/logos/MKiDN.png"
      alt="Ministerstwo Kultury i Dziedzictwa Narodowego"
      class="logos__image"
    />
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
  max-width: 100%;
  text-align: center;

  &__image {
    max-height: 150px;
    max-width: 100%;
    margin: 10px 15px;
  }
}
</style>
