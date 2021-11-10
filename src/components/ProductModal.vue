<template>
  <v-navigation-drawer
    v-model="counter"
    app
    right
    :style="{ width: sizeScreen < 768 ? '100%' : '270px' }"
  >
    <div>
      <v-card
        class="d-flex flex-column allheight align-content-space-around"
        flat
        tile
      >
        <v-card tile>
          <v-card-title>
            <v-btn text x-small @click="CloseCar">
              <v-icon>
                {{ mdiCloseThick }}
              </v-icon>
            </v-btn>
            &nbsp; &nbsp; Carrito
          </v-card-title>
          <v-spacer></v-spacer>
        </v-card>

        <v-card tile>
          <v-virtual-scroll
            :items="getCarproducts"
            :item-height="220"
            height="500"
            class="scrolldesing"
          >
            <template v-slot:default="{ item }">
              <v-card class="mt-2 mb-2" width="344" outlined shaped>
                <v-list-item three-line @click="onClickOutside">
                  <v-list-item-content>
                    <div class="text-overline">{{ item.nombre }}</div>
                    <v-card-text>
                      <div class="text--primary">{{ item.descripcion }}</div>
                    </v-card-text>
                  </v-list-item-content>
                  <v-list-item-avatar tile size="80">
                    <v-img
                      class="elevation-6"
                      :src="getImgUrl(item.nombre)"
                      v-bind:alt="item.nombre"
                    ></v-img>
                  </v-list-item-avatar>
                </v-list-item>

                <v-card-actions class="text-center">
                  <v-card-text class="d-inline">
                    <v-btn
                      icon
                      color="info"
                      @click="operacionProducto(item.id, 'Suma')"
                    >
                      <v-icon>mdi-plus-circle</v-icon>
                    </v-btn>
                    <v-chip outlined color="green darken-3">{{
                      item.cantidad
                    }}</v-chip>
                    <v-btn
                      icon
                      color="red"
                      @click="operacionProducto(item.id, 'Resta')"
                    >
                      <v-icon>mdi-minus-circle</v-icon>
                    </v-btn>
                  </v-card-text>
                </v-card-actions>
              </v-card>
            </template>
          </v-virtual-scroll>
        </v-card>
        <v-card class="mt-auto pa-2" tile>
          <v-card-text elevation="0" shaped>
            *iva incluido
            <h3>
              Subtotal: <strong>${{ subtotal }}</strong>
            </h3>
            <h2>
              Total: <strong>${{ subtotal }}</strong>
            </h2>
          </v-card-text>
          <br />
          <v-btn block color="success">Cerrar Pedido</v-btn>
        </v-card>
      </v-card>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import { Getter, Mutation } from "vuex-class";
import { mdiCloseThick } from "@mdi/js";

@Component
export default class CarProduct extends Vue {
  //vuex
  @Getter getCarproductsLength!: CarProduct[];
  @Getter getCarproducts!: CarProduct[];
  @Getter getDraweCarProduct!: boolean;

  @Mutation handleDrawerCar!: any;
  @Mutation operacionesProductoCar!: any;

  //icons
  mdiCloseThick: any = mdiCloseThick;
  //data
  producto: any;
  numberCar: number = 0;
  valWidth: string = "100%";
  subtotal: string = "0";
  //props computeds
  get counter(): boolean {
    return this.getDraweCarProduct;
  }
  set counter(val: boolean) {}
  get sizeScreen(): number {
    var w = window.innerWidth;
    return w;
  }
  set sizeScreen(val: number) {}

  //life cicle
  @Watch("getCarproducts")
  onProductCarChanged(val: number, oldVal: number) {
    let costo: number = 0;
    let cantidad: number = 0;
    let costoAcum: number = 0;
    this.getCarproducts.map((producto: any) => {
      // extraemos la cantidad de productos y lo multiplicamos por el precio
      cantidad = Number(producto.cantidad);
      costo = Number(producto.precio) * cantidad;
      costoAcum += costo;
    });
    this.subtotal = costoAcum.toFixed(2);
  }

  //methods
  getImgUrl(index: string) {
    var images = require.context("../assets/img/", false, /\.jpg$/);
    return images("./" + index + ".jpg");
  }
  CloseCar() {
    this.handleDrawerCar(false);
  }
  onClickOutside() {}

  operacionProducto(idProducto: number, operacion: string) {
    let productoIdOp = {
      id: idProducto,
      operacion,
    };
    this.operacionesProductoCar(productoIdOp);
  }
}
</script>
<style>
.allheight {
  height: 100vh;
}

.scrolldesing::-webkit-scrollbar {
  width: 10px;
  background:rgb(255, 255, 255);
}
.scrolldesing::-webkit-scrollbar-thumb {
  background: #fc9d80; 
  border-radius: 10px;
  border-right: 2px solid rgba(255, 255, 255, 0);
}   
</style>