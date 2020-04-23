// import Vue from 'vue'
// import VueRouter from 'vue-router'
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
        meta: { index: 3 ,requireAuth:true}
        //添加requireAuth值为true,表示我们需要让market组件进行权限验证
        //如果购物车中有数据,那就可以访问Market组件,即通过验证
        //如果购物车中无数据,就不能通过验证,不能访问Market组件
    },
    {
        path: '/profile',
        component: Profile,
        meta: { index: 4 }
    },
    {
        path:'/detail/:iid',
        component:Detail,
        meta:{index:2}
    }
]


const router = new VueRouter({
    mode: 'history',
    routes
})
//监听路由的跳转   跳转路由就会触发
router.beforeEach((to,from,next)=>{
    if(to.meta.requireAuth){
        if(localStorage.getItem('products')){   //如果获取到了数据,说明购物车中有数据
            next()
        }else{
            next('/home')
        }
    }else{
        next()
    }
})

export default router
