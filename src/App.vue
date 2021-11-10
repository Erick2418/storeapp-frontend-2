<template>
  <v-app id="inspire">
    <AppBar />
  <ProductModal/>
    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script lang="ts">

import Vue from "vue";
import AppBar from "./components/AppBar.vue";
import Footer from "./components/Footer.vue";
import ProductModal from "./components/ProductModal.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppBar,
    ProductModal,
    Footer,
  },
  data: () => ({

  }),
  watch: {
    nombre(nuevoValor, valorAnterior){
      console.log("El nombre pasó de ser %s a %s", valorAnterior, nuevoValor);
    }
  },
});
</script>
