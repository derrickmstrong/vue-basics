<template>
    <div class="data">
        <p>This is my name: {{name}}</p>
        <div v-for="(product, idx) in products" :key="product.id">
            <h3>{{ idx + 1 }}) {{ product.name }}</h3>
            <img class="img-fluid" :src="product.imgUrl" :alt="product.name" :title="product.name" width=200>
            <p>{{product.description}}</p>
            <p class="price">${{product.price}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Data',
    data() {
        return {
            name: 'D.Strong',
            products: [
                {
                    id: 1,
                    name: 'Mario Sweater',
                    description: 'Cute, warm, its a sweater',
                    imgUrl: 'https://media.kohlsimg.com/is/image/kohls/4506684?wid=600&hei=600&op_sharpen=1',
                    price: 99,
                },
                {
                    id: 2,
                    name: 'Luigi Sweater',
                    description: 'Neat, warm, its a sweater',
                    imgUrl: 'https://m.media-amazon.com/images/I/B1paZXqZSQS._CLa%7C2140%2C2000%7CB1OncZbgekS.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png',
                    price: 89,
                },
            ],
        }
    }
}
</script>

<style>

</style>    