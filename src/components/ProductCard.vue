<template>
    <div class="card mb-3 product-card" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
            <img :src="product.imgUrl" :alt="product.name" :title="product.name" class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
            <div class="card-body text-end">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">{{product.description}}</p>
                <p class="card-text price">${{product.price}}</p>
                <router-link class="btn btn-primary" :to="{name: 'product', params: {id: product.id}}">Buy Now</router-link>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Product Card",
    props: {
        product: Object,
    }
}
</script>

<style>
.product-card {
}
.price {
    font-weight: bold;
    font-size: 1.25em;
}
</style>