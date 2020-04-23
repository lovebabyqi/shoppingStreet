<template>
    <div class="home">
        <common-nav-bar>
            <template #middle>购物街</template>
        </common-nav-bar>
        <tab-control
                class="tab-control"
                ref="tabControl1"
                v-show="isShowTabControl"
                @tabClick="tabClick"
                :titles="Object.values(types)"/>
        <common-scroll
                @loadMore="loadMore"
                @getPosition="getPosition"
                ref="scroll"
                :pullUpLoad="true"
        >
            <common-swiper :padding-bottom="'52%'" :banner="banner"/>
            <home-recommend :recommend="recommend"/>
            <home-popular/>
            <tab-control
                    ref="tabControl2"
                    @tabClick="tabClick"
                    :titles="Object.values(types)"/>
            <good-list :goods="goods[currentType].list"/>
        </common-scroll>
        <back-top @backTop="backTop" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>
    import TabControl from "components/content/tabcontrol/TabControl";
    import GoodList from "components/content/goodlist/GoodList";
    import HomePopular from "./base/Popular";
    import HomeRecommend from "./base/Recommend";
    import {reqHomeMultidata, reqHomeGoods} from 'api/home'
    import {backTopMixin} from 'utils/mixins'

    export default {
        name: "Home",
        data() {
            return {
                banner: [],//轮播图数据
                recommend: [],//推荐数据
                currentType: 'pop',//记录tab切换的类型
                isShowTabControl: false,//默认不显示第一个tabControl
                types: {
                    pop: '流行',
                    new: '新款',
                    sell: '精选',
                },
                goods: {
                    pop: {
                        list: [],
                        page: 0,
                    },
                    new: {
                        list: [],
                        page: 0,
                    },
                    sell: {
                        list: [],
                        page: 0,
                    }
                }
            }
        },
        created() {
            this.getHomeMultidata()
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
        },
        mounted(){
            //减少this.$refs.scroll.refresh()的执行频率
            //防抖
            const debounce = function(fn,time){
              let timer = null;
              return function(){
                  clearTimeout(timer);
                  timer = setTimeout(fn,time)
              }
            };
            const fresh = debounce(this.$refs.scroll.refresh,500)
            this.$bus.$on('imageLoad',fresh)
        },
        mixins:[backTopMixin],
        methods: {
            async getHomeMultidata() {
                const result = await reqHomeMultidata()
                const data = result.data
                this.banner = data.banner.list.map(item=>item.image)
                this.recommend = data.recommend.list
            },
            async getHomeGoods(type) {
                const page = ++this.goods[type].page
                const result = await reqHomeGoods(type, page)
                if(result){
                    this.goods[type].list.push(...result.data.list)
                }
                
            },
            tabClick(index) {
                this.currentType = Object.keys(this.types)[index]
            },
            loadMore() {
                console.log('loadMore')
                //加载额外30调数据
                this.getHomeGoods(this.currentType)
                //使用子组件的方法,执行该方法是让betterScroll知道数据已经加载完了
                this.$refs.scroll.finishPullUp()
            },
            getPosition(position) {
                const positionY = -position.y
                const isShowTabControl = positionY >= this.$refs.tabControl2.$el.offsetTop
                this.isShowTabControl = isShowTabControl
                this.isShowBackTop = positionY>1000
            },
        },
        components: {
            HomePopular,
            HomeRecommend,
            TabControl,
            GoodList,
        }
    }
</script>

<style lang="less" scoped>
    .tab-control {
        position: relative;
        z-index: 1;
        background-color: #fff;
    }

    .nav-bar {
        background-color: pink;
        font-weight: bold;
        color: #fff
    }

    .wrapper {
        position: fixed;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
</style>
