<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      langs: [
        { text: "Polski", value: "pl" },
        { text: "English", value: "en" },
        { text: "Українська мова", value: "ua" },
        { text: "Deutsch", value: "de" },
        { text: "Čeština", value: "cz" },
      ]
    }
  },
};
</script>

<style lang="scss">
* { box-sizing: border-box; }
img { max-width: 100%; }
button, input { border: 0; }

#app {
  color: #546e7a;
  line-height: 1.5;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #eceff1;
  background-image: url("~@/assets/bg.svg");

  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;

  .lang { max-width: 10rem; }
}

.main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 1 100%;
  padding: 1rem;
}
</style>