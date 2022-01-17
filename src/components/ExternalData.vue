<template>
  <div class="mt-5 external-data">
      <div v-for="(product, idx) in productsAPI" :key="product.id">
          <h3>{{ idx + 1 }}) {{ product.name }}</h3>
          <img class="img-fluid" :src="product.imgUrl" :alt="product.name" :title="product.name" width=200>
          <p>{{product.description}}</p>
          <p class="price">${{product.price}}</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'External Data via Axios',
    data() {
        return {
            productsAPI: [],
        }
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
.external-data {
}
.price {
    font-weight: bold;
    font-size: 1.25em;
}
</style>