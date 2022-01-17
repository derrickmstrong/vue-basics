<template>
  <div class="mt-5 shop">
      <div class="row">

      <!-- Pass data as props to ProductCard via :product="product" -->
      <ProductCard v-for="product in productsAPI" :key="product.id" :product="product" />
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProductCard from './ProductCard.vue'

export default {
    name: 'Shop',
    data() {
        return {
            productsAPI: [],
        }
    },
    components: {
        ProductCard
    },
    created () {
        axios.get('http://localhost:3000/products')
        .then(res => {
            console.log(res.data)
            this.productsAPI = res.data
        })
        .catch(err => console.log(err))
    }
}
</script>

<style scoped>
.shop {
}
</style>

<!-- 
In order to run this file, in Terminal:
npm run serve // Runs app at http://localhost:8080
json-server --watch src/db/products.json // Runs the mock (api) database at http://localhost:3000/products and watch for changes in the file
 -->