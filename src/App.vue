<template>
  <v-app id="app">
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: 'App',

  components: {
    Header,
    Footer
  }
}
</script>
