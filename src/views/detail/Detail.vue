<template>
    <div class="detail">
        <detail-nav-bar @itemClick="itemClick"></detail-nav-bar>
        <common-scroll ref="scroll">
            <common-swiper :padding-bottom="'80%'" :banner="banner"/>
            <detail-good-info :good-info="goodInfo"/>
            <detail-shop-info :shop="shopInfo"/>
            <detail-image-info :image-info="imageInfo"/>
            <detail-params-info ref="params" :params-info="paramsInfo"/>
            <detail-comment-info ref="comment" :comment-info="commentInfo"/>
            <good-list ref="good" :goods="recommendInfo"/>
        </common-scroll>
    </div>
</template>

<script>
    import {
        reqDetails,
        GoodsInfo,
        ShopInfo,
        GoodsParam,
        CommentInfo,
        reqRecommends
    } from 'api/detail'
    import DetailNavBar from './base/NavBar'
    import DetailGoodInfo from './base/GoodInfo'
    import DetailShopInfo from './base/ShopInfo'
    import DetailImageInfo from './base/ImageInfo'
    import DetailParamsInfo from './base/ParamsInfo'
    import DetailCommentInfo from './base/CommentInfo'
    import GoodList from "components/content/goodlist/GoodList";
    export default {
        name: "Detail",
        data(){
            return{
                banner:[],
                goodInfo:{},
                shopInfo:{},
                imageInfo:{},
                paramsInfo:{},
                commentInfo:{},
                recommendInfo:[],
            }
        },
        components:{
            DetailNavBar,
            DetailGoodInfo,
            DetailShopInfo,
            DetailImageInfo,
            DetailParamsInfo,
            DetailCommentInfo,
            GoodList
        },
        created(){
            this.getDetails()
            this.getRecommends()
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
                //商品图片信息
                this.imageInfo = result.detailInfo
                //商品参数信息
                this.paramsInfo = new GoodsParam(result.itemParams.info, result.itemParams.rule)
                //评论信息
                //评论信息
                if (result.rate.cRate !== 0) {
                    this.commentInfo = new CommentInfo(result.rate.list[0]);
                }
            },
            async getRecommends(){
                const result = await reqRecommends()
                // console.log(result)
                //获取推荐的图片数据
                this.recommendInfo = result.data.list
            },
            itemClick(index){
                this.offsetTopList = []
                this.offsetTopList.push(
                    0,
                    this.$refs.params.$el.offsetTop,
                    this.$refs.comment.$el.offsetTop,
                    this.$refs.good.$el.offsetTop,
                )
                this.$refs.scroll.scrollTo(0,-this.offsetTopList[index],200)
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
