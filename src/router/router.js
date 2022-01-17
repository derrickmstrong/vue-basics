import { createWebHistory, createRouter } from 'vue-router'
import Home from '../components/Home.vue'
import Shop from '../components/Shop.vue'
import Product from '../components/Product.vue'

const history = createWebHistory();

const router = createRouter({
    history,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/shop",
            name: "shop",
            component: Shop,
        },
        {
            path: "/shop/product/:id",
            name: 'product',
            component: Product,
            props: true, // allows use of named props in route
        }
    ]
})

export default router;