<template>
  <div>
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
.language-box {
  background:url(https://img.geocaching.com:443/1c75def2-54cb-4ce8-9e09-dcc22042d151.png);
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
  text-align: center;
}

a {
  color: white !important;
}
</style>
