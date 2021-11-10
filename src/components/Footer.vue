<template>

 <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="deep-orange darken-1">
          <strong class="subheading"
            >Contactanos en nuestras redes sociales!</strong
          >

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon href="https://www.linkedin.com/in/erick2418/">
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Erick | OK </strong>
        </v-card-text>
      </v-card>
    </v-footer>

</template>
<script lang="ts">
  import Vue from 'vue'
import { mdiCartOutline, mdiAccount, mdiPhone } from "@mdi/js";
  
  
  export default Vue.extend({
    name: 'Footer',

    data: () => ({
    messages: 0,
    show: false,
    drawer: false,
    group: null,
    mdiCartOutline,
    mdiAccount,
    mdiPhone,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Account", icon: "mdi-account-box" },
      { title: "Admin", icon: "mdi-gavel" },
    ],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  watch: {
    group() {
      this.drawer = true;
    },
  },
  })
</script>
