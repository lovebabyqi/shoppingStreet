<template>
    <div id="shop-item">
        <check-button :checked="product.checked" :iid="product.iid"/>
        <div class="item-img">
            <img :src="product.image" alt="">
        </div>
        <div class="item-info">
            <h4 class="item-title">{{product.title}}</h4>
            <p class="item-desc">商品描述:{{product.desc}}</p>
            <div class="info-bottom">
                <span class="item-price left">￥{{product.price}}</span>
                <span class="item-count right">x{{product.count}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import CheckButton from "./CheckButton";
    export default {
        name: "ProductListItem",
        props:{
            product:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        components:{
            CheckButton
        }
    }
</script>

<style scoped>
    #shop-item{
        display:flex;
        width:100%;
        font-size:0;
        padding:5px;
        border-bottom:1px solid #ccc;
    }
    .item-img{
        padding:5px;
    }
    .item-img img{
        width: 80px;
        height: 100px;
        display:block;
        border-radius: 5px;
    }
    .item-info{
        font-size:17px;
        color:#333;
        padding:5px 10px;
        position: relative;
        overflow: hidden;
    }
    .item-info .item-title,.item-info .item-desc{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .item-info .item-desc{
        font-size:14px;
        color:#666;
        margin-top:15px;
    }
    .info-bottom{
        position:absolute;
        margin-top: 10px;
        bottom:10px;
        left:10px;
        right:10px;
    }
    .info-bottom .item-price{
        color:orangered;
    }
</style>
