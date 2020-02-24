<template>
    <div class="detail">
        <detail-nav-bar ref="navbar" @itemClick="itemClick"></detail-nav-bar>
        <common-scroll
                :probeType="3"
                @getPosition="getPosition"
                ref="scroll">
            <common-swiper :padding-bottom="'80%'" :banner="banner"/>
            <detail-good-info :good-info="goodInfo"/>
            <detail-shop-info :shop="shopInfo"/>
            <detail-image-info @imageLoad="imageLoad" :image-info="imageInfo"/>
            <detail-params-info ref="params" :params-info="paramsInfo"/>
            <detail-comment-info ref="comment" :comment-info="commentInfo"/>
            <good-list ref="good" :goods="recommendInfo"/>
        </common-scroll>
        <back-top @backTop="backTop" v-show="isShowBackTop"></back-top>
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
    import {backTopMixin} from 'utils/mixins'
    import DetailNavBar from './base/NavBar'
    import DetailGoodInfo from './base/GoodInfo'
    import DetailShopInfo from './base/ShopInfo'
    import DetailImageInfo from './base/ImageInfo'
    import DetailParamsInfo from './base/ParamsInfo'
    import DetailCommentInfo from './base/CommentInfo'
    import GoodList from "components/content/goodlist/GoodList"
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
                offsetTopList:[],//记录滚动位置到达对应offsetTop,NavBar的currentIndex对应修改
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
        mixins:[backTopMixin],
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
            imageLoad(){   //图片加载完成再填充offsetTopList
                this.offsetTopList.push(
                    0,
                    this.$refs.params.$el.offsetTop,
                    this.$refs.comment.$el.offsetTop,
                    this.$refs.good.$el.offsetTop,
                    100000
                )
            },
            getPosition(position){
                // console.log(position)
                const positionY = -position.y
                this.isShowBackTop = positionY>1000
                const [a,paramsOffsetTop,commentOffsetTop,goodsOffsetTop] = this.offsetTopList
                // if(positionY>=a&&positionY<paramsOffsetTop){
                //     this.$refs.navbar.currentIndex = 0
                // }else if(positionY>=paramsOffsetTop&&positionY<commentOffsetTop){
                //     this.$refs.navbar.currentIndex = 1
                // }else if(positionY>=commentOffsetTop&&positionY<goodsOffsetTop){
                //     this.$refs.navbar.currentIndex = 2
                // }else if(positionY>=goodsOffsetTop){
                //     this.$refs.navbar.currentIndex = 3
                for(let i in this.offsetTopList){
                    if(i == this.offsetTopList.length-1)break

                    if(i<4&&positionY>=this.offsetTopList[i]&&positionY<this.offsetTopList[+i+1]){
                        this.$refs.navbar.currentIndex = + i
                    }
                }
            },
            itemClick(index){
                // this.offsetTopList = []
                this.$refs.scroll.scrollTo(0,-this.offsetTopList[index],200)
            },
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
