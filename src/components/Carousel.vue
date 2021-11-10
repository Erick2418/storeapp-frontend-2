<template>
   <v-parallax
    dark
    src="../assets/img/mandm.jpg"
  >
  
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-start ml-12"
        cols="12"
        
      >
      <div style="max-width: 450px">
        <h1 class="text-h3  mb-4 font-weight-bold">
          Super Oferta!
        </h1>
        <h1 class="text-h3  mb-4 font-weight-bold">
          &nbsp;&nbsp; 50% de descuento!
        </h1>
        

      </div>
      </v-col>
    </v-row>

<!-- 
<div class="float-right">


    <v-row
       
    >
      <v-col
        class="text-start ml-12"
        cols="12"
        
      >
      <div style="max-width: 450px">
        <h1 class="text-h3    font-weight-bold">
          Super Oferta!
        </h1>
        <h1 class="text-h3    font-weight-bold">
          &nbsp;&nbsp; 50% de descuento!
        </h1>
        

      </div>
      </v-col>
    </v-row>




</div>

 -->




  </v-parallax>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Carousel',

    data: () => ({
    
    }),
    
    created(){
       
    }

  })
</script>
