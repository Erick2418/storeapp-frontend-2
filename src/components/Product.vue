<template>
  <v-container class="grey lighten-5 "  >
    <div class="d-flex justify-center mb-2 mt-2">
      <h2>MEJORES OFERTAS</h2>
    </div>

    <v-row no-gutters>
      <div v-for="item in items" :key="item.id">
        <v-col cols="12" sm="12">
          <v-card :loading="loading" class="mx-auto" max-width="180">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img
              height="160"
              :src="getImgUrl(item.nombre)"
              v-bind:alt="item.nombre"
              style="cursor: pointer"
            ></v-img>
            <v-card-text>
              <div class="d-flex justify-center">
                <div
                  class="
                    text-center text-capitalize
                    deep-orange--text
                    text--darken-2
                  "
                >
                  <h3>
                    <strong>{{ item.nombre }}</strong>
                  </h3>
                </div>
              </div>

              <div class="my-4 text-subtitle-1 indigo--text text--darken-2">
                <div class="d-flex justify-center mb-3">
                  <h4 class="deep-orange--text text--lighten-2">
                    ${{ item.precio }}
                  </h4>
                  &nbsp; &nbsp;
                </div>

                <div class="text-center">
                  <div class="my-2">
                    <v-btn
                      small
                      color="deep-orange darken-1"
                      v-on:click="AddToCar(item.id)"
                      dark
                    >
                      Añadir al carrito
                    </v-btn>
                  </div>
                </div>

                <div></div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </div>
    </v-row>

    <v-snackbar v-model="snackbar" :multi-line="true" color="success" shaped>
      Producto Añadido al carrito!

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import { Product as IProduct } from "@/types/types";
import { State, Getter, Mutation, Action } from "vuex-class";

@Component
export default class Product extends Vue {
  //vuex
  @State products!: Product[];
  @Getter getProducts!: Product[];
  @Action getProductsAsync: any;

  @Action getCarproductAsync: any;
  @Action addProductCar: any;
  @Getter getCarproduct!: Product[];
  @Getter getCarproducts!: Product[];

  //life cycle
  async mounted() {
    await this.getProductsAsync(); // peticion de get products axios
    this.items = this.getProducts;
  }

  //data
  loading: boolean = false;
  selection: number = 1;
  items: any = []; // lo agrego desde el mounted, con el metodo setusertable
  snackbar = false;

  //metods
  reserve() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 2000);
  }
  getImgUrl(index: string) {
    // src="./../assets/img/Chetos.jpg"
    var images = require.context("../assets/img/", false, /\.jpg$/);
    return images("./" + index + ".jpg");
  }
  async AddToCar(idProducto: string) {
    await this.getCarproductAsync(idProducto); // llamo al producto con su id
    this.handleCar(); // aniado el producto al carrito
  }
  handleCar() {
    this.addProductCar(this.getCarproduct);
    this.snackbar = true;
  }
}
</script>
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000

 
</style>
