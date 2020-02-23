<template>
    <div class="detail">
        <detail-nav-bar></detail-nav-bar>
        <common-scroll>
            <common-swiper :padding-bottom="'80%'" :banner="banner"></common-swiper>
            <detail-goods-info :good-info="goodInfo"></detail-goods-info>
            <detail-shop-info :shop="shopInfo"></detail-shop-info>
            <div v-for="item in 100">{{item}}</div>
        </common-scroll>
    </div>
</template>

<script>
    import {reqDetails,GoodsInfo,ShopInfo} from 'api/detail'
    import DetailNavBar from './base/NavBar'
    import DetailGoodsInfo from './base/GoodsInfo'
    import DetailShopInfo from './base/ShopInfo'
    export default {
        name: "Detail",
        data(){
            return{
                banner:[],
                goodInfo:{},
                shopInfo:{}
            }
        },
        components:{
            DetailNavBar,
            DetailGoodsInfo,
            DetailShopInfo
        },
        created(){
            this.getDetails()
        },
        methods:{
            async getDetails(){
                const iid = this.$route.params.iid
                const {result} = await reqDetails(iid)
                //轮播图数据
                this.banner = result.itemInfo.topImages
                //商品信息
                this.goodInfo = new GoodsInfo(result.itemInfo,result.columns,result.shopInfo.services)
                //商铺信息
                this.shopInfo = new ShopInfo(result.shopInfo)
            }
        }
    }
</script>

<style scoped lang="less">
    .wrapper{  /*设置better-scroll滚动区域的高度*/
        /*height:calc(100% - 44px);*/
        /*height: calc(~"100vh - 93px"); // less会导致编译的css不一样   可以百度less中使用calc 就会找到解决方法了*/
        position: fixed;
        top:44px;
        bottom:49px;
        left:0;
        right:0;
    }
</style>
