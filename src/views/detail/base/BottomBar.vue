<template>
    <div class="bottom-bar">
        <div class="bar-item bar-left">
            <div>
                <i class="icon service"></i>
                <span class="text">客服</span>
            </div>
            <div>
                <i class="icon shop"></i>
                <span class="text">店铺</span>
            </div>
            <div>
                <i class="icon select"></i>
                <span class="text">收藏</span>
            </div>
        </div>
        <div class="bar-item bar-right">
            <div class="cart" @click="addMarket">加入购物车</div>
            <div class="buy" @click="goMarket">购买</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBottomBar",
        methods:{
            addMarket(){//把商品数据添加到Vuex里面,要添加的数据在detail组件
                console.log('加入购物车');
                this.$emit('addMarket')
            },
            goMarket(){
                this.$router.push('/market')
            }
        }
    }
</script>

<style scoped >
    .bottom-bar{
        display:flex;
        position:absolute;
        z-index:10;
        height:58px;
        left: 0;
        right:0;
        bottom:-49px;
        text-align:center;
        background-color: #fff;
        box-shadow: 0 -1px 1px rgba(100,100,100,0.1);
    }
    .bar-item{
        flex:1;
        display:flex;
    }
    .bar-item>div{
        flex:1;
    }
    .bar-left{
        font-size: 13px;
    }
    .bar-left .icon{
        display:block;
        width: 22px;
        height: 22px;
        margin:10px auto 3px;
        background: url("~assets/img/detail/detail_bottom.png") 0 0 / 100%;
    }
    .bar-left .service{
        background-position: 0 -54px;
    }
    .bar-left .shop{
        background-position: 0 -98px;
    }
    .bar-right{
        font-size: 15px;
        color:#fff;
        line-height: 58px;
    }
    .bar-right .cart{
        background-color: #ffe817;
        color:#333;
    }
    .bar-right .buy{
        background-color: #f69;
    }
</style>
