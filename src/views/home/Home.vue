<template>
    <div class="home">
        <common-nav-bar>
            <template #middle>购物街</template>
        </common-nav-bar>
        <my-scroll>
            <common-swiper :banner="banner"/>
            <home-recommend :recommend="recommend"/>
            <home-popular/>
            <tab-control @tabClick="tabClick" :titles="Object.values(types)"/>
            <good-list :goods="goods[currentType].list"/>
        </my-scroll>
    </div>
</template>

<script>
    import TabControl from "components/content/tabcontrol/TabControl";
    import GoodList from "components/content/goodlist/GoodList";
    import HomePopular from "./base/Popular";
    import HomeRecommend from "./base/Recommend";
    import {reqHomeMultidata,reqHomeGoods} from 'api/home'
    export default {
        name: "Home",
        data(){
            return {
                banner:[],//轮播图数据
                recommend:[],//推荐数据
                currentType:'pop',//记录tab切换的类型
                types:{
                    pop:'流行',
                    new:'新款',
                    sell:'精选',
                },
                goods:{
                    pop:{
                        list:[],
                        page:1,
                    },
                    new:{
                        list:[],
                        page:1,
                    },
                    sell:{
                        list:[],
                        page:1,
                    }
                }
            }
        },
        created(){
            this.getHomeMultidata()
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
        },
        methods:{
            async getHomeMultidata(){
                const result = await reqHomeMultidata()
                const data = result.data
                this.banner = data.banner.list
                this.recommend = data.recommend.list
            },
            async getHomeGoods(type){
                const page = ++this.goods[type].page
                const result = await reqHomeGoods(type,page)
                this.goods[type].list.push(...result.data.list)
            },
            tabClick(index){
                this.currentType = Object.keys(this.types)[index]
            },
            loadMore(){
                console.log('loadMore')
                this.getHomeGoods(this.currentType)
            },
        },
        components:{
            HomePopular,
            HomeRecommend,
            TabControl,
            GoodList
        }
    }
</script>

<style lang="less" scoped >
    .nav-bar{
        background-color: pink;
        font-weight: bold;
        color:#fff
    }
    .wrapper{
        position:fixed;
        top:44px;
        bottom:49px;
        left: 0;
        right:0;
    }
</style>
