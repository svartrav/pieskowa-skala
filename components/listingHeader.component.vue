<template>
  <div>
    <div style="background:url(https://img.geocaching.com:443/1c75def2-54cb-4ce8-9e09-dcc22042d151.png); border:2px solid black; color:white; margin-bottom:30px; padding:30px">
      <h3 style="text-align: center">
        <strong>
          <span style="color: white; cursor: pointer" @click="routeTo('PL')">Język Polski</span> |
          <span style="color: white; cursor: pointer" @click="routeTo('EN')">English</span> |
          <span style="color: white; cursor: pointer" @click="routeTo('UA')">Українська мова</span> |
          <span style="color: white; cursor: pointer" @click="routeTo('DE')">Deutsch</span> |
          <span style="color: white; cursor: pointer" @click="routeTo('CZ')">Če&scaron;tina</span>
        </strong>
      </h3>
    </div>

    <p style="text-align: center">
      <img
        src="https://img.geocaching.com:443/801b9bf1-ec97-4af5-bdd4-bf191efb6045.jpg"
        alt="PS"
      />
    </p>
  </div>
</template>

<script>

export default {
  name: "ListingHeader",
  methods: {
    routeTo(listingVersion) {
      // router.push(`/listing-${listingVersion}`);
    },
  },
};
</script>
