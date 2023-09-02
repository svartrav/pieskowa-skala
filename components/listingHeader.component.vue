<template>
  <div class="listing-header">
    <div class="language-box">
        <NuxtLink to="/ListingPL" class="link">
          Język Polski
        </NuxtLink> |

        <NuxtLink to="/ListingEN" class="link">
          English
        </NuxtLink> |

        <NuxtLink to="/ListingUA" class="link">
          Українська мова
        </NuxtLink> |

        <NuxtLink to="/ListingDE" class="link">
          Deutsch
        </NuxtLink> |

        <NuxtLink to="/ListingCZ" class="link">
          Če&scaron;tina
        </NuxtLink>
    </div>

    <div class="image-box">
      <img
        src="~/assets/pieskowa-skala.jpg"
        alt="PS"
        class="image-box__image"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: "ListingHeader",
};
</script>

<style lang="scss">
.listing-header {
  width: 900px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.language-box {
  width: 100%;
  background:url("~@/assets/listing-text-bg.jpeg");
  border:2px solid black;
  color:white;
  margin-bottom:30px;
  padding:30px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}

.link {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.image-box {
  width: 500px;
  max-width: 90%;
  text-align: center;

  &__image {
    width: 100%;
  }
}

a {
  color: white !important;
}
</style>
