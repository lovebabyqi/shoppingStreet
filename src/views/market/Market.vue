<template>
    <div class="market">
        <common-nav-bar>
            <template #middle>购物车({{$store.getters.productLength}})</template>
        </common-nav-bar>
        <common-scroll
                @getPosition="getPosition"
                ref="scroll"
                :probe-type="3"
        >
            <product-list/>
        </common-scroll>
        <bottom-bar></bottom-bar>
        <back-top @backTop="backTop" v-show="isShowBackTop" :bottom="'100px'"></back-top>
    </div>
</template>

<script>
    import {backTopMixin} from 'utils/mixins'
    import ProductList from "./base/ProductList";
    import BottomBar from "./base/BottomBar";
    export default {
        name: "Market",
        components:{
            ProductList,
            BottomBar
        },
        mixins:[backTopMixin],
        methods:{
            getPosition(position){
                const positionY = -position.y
                this.isShowBackTop = positionY>100
            }
        }
    }
</script>

<style scoped lang="less">
    .market{
        .nav-bar{
            background-color: pink;
            color:#fff;
            font-weight: bold;
        }
    }
    .wrapper{
        position: fixed;
        top: 44px;
        bottom: 93px;
        left: 0;
        right: 0;
    }
</style>
