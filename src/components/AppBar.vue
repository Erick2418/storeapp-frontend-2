<template>
  <div>
    <v-navigation-drawer temporary v-model="drawer" app>
      <!--  -->
      <v-list>
        <v-list-item v-for="item in items" :key="item.id" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!--  -->
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app class="deep-orange darken-1 elevate-on-scroll">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">StoreApp</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn class="mx-2" fab dark small>
        <v-icon dark>
          {{ mdiPhone }}
        </v-icon>
      </v-btn>
      <!-- Contactanos -->
      <v-btn class="mx-2" fab dark small @click="onClickOutside">
        <v-badge
          :content="this.getCarproductsLength"
          :value="this.getCarproductsLength"
          color="green"
          overlap
        >
          <v-icon>
            {{ mdiCartOutline }}
          </v-icon>
        </v-badge>
      </v-btn>

      <v-btn class="mx-2" fab dark small>
        <v-icon dark>
          {{ mdiAccount }}
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-snackbar v-model="snackbar">
      Aun no se añaden productos al carrito

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Getter, Mutation } from "vuex-class";
import { mdiCartOutline, mdiAccount, mdiPhone } from "@mdi/js";

@Component
export default class Product extends Vue {
  producto: any;
  numberCar: number = 0;
  //vuex
  @Getter getCarproductsLength!: number;
  @Getter getDraweCarProduct!: boolean;
  @Mutation handleDrawerCar!: any;
  //data
  snackbar: boolean = false;
  name: string = "AppBar";
  messages: any = 0;
  drawer: boolean = false;
  drawerCar: boolean = true;
  selectedItem = 1;
  mdiCartOutline: any = mdiCartOutline;
  mdiAccount: any = mdiAccount;
  mdiPhone: any = mdiPhone;
  items: any = [
    { title: "Dashboard", icon: "mdi-view-dashboard" },
    { title: "Account", icon: "mdi-account-box" },
    { title: "Admin", icon: "mdi-gavel" },
    { title: "Admin2", icon: "mdi-gavel" },
    { title: "Admin3", icon: "mdi-gavel" },
    { title: "Admin4", icon: "mdi-gavel" },
    { title: "Admin5", icon: "mdi-gavel" },
  ];
  //methos

  onClickOutside() {
    if (this.getCarproductsLength > 0) {
      this.handleDrawerCar(true);
    } else {
      this.snackbar = true;
    }
  }
  //vuex
}
</script>
