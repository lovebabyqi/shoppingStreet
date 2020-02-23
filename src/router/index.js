import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Profile = () => import('views/profile/Profile.vue')
const Market = () => import('views/market/Market.vue')
const Detail = ()   =>import('views/detail/Detail')
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: { index: 0 }
    },
    {
        path: '/category',
        component: Category,
        meta: { index: 1 }
    },
    {
        path: '/market',
        component: Market,
        meta: { index: 2 }
    },
    {
        path: '/profile',
        component: Profile,
        meta: { index: 3 }
    },
    {
        path:'/detail/:iid',
        component:Detail,
        meta:{index:4}
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
