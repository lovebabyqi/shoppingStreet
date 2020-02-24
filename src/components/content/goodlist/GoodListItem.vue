<template>
    <div class="good-list-item" @click="handleToDetail">
        <img v-lazy="showImage" alt="">
        <div class="goods-info">
            <p>{{goodsInfo.title}}</p>
            <span class="price">￥{{goodsInfo.price}}</span>
            <span class="collect">{{goodsInfo.cfav}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodListItem",
        props:{
            goodsInfo:{
                type:Object,
                default(){
                    return{}
                }
            }
        },
        methods:{
            handleToDetail(){
                const iid = this.goodsInfo.iid
                if(this.$route.path.includes('home')){
                    this.$router.push(`/detail/${iid}`)
                }
            }
        },
        computed:{
            showImage(){
                return this.goodsInfo.image||this.goodsInfo.show.img
            }
        }
    }
</script>

<style scoped >
    .good-list-item {
        position: relative;
        width: 46%;
        padding-bottom: 40px;
    }

    .good-list-item img {
        width: 100%;
        border-radius: 5px;
    }

    .goods-info {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
    }

    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }

    .goods-info .price {
        color: pink;
        margin-right: 30px;
    }

    .goods-info .collect {
        position: relative;
    }

    .goods-info .collect::before {
        content: '';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }
</style>
