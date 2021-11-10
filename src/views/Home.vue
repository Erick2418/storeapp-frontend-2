<template>
  <div>
    <Carousel />
    
    <Product />

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Product from '../components/Product.vue'
  import Carousel from '../components/Carousel.vue'

  export default Vue.extend({
    name: 'Home',
   
    components: {
      Product,
      Carousel,
    },
  })
</script>
