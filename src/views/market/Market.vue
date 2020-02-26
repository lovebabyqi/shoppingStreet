<template>
    <div class="market">
        <common-nav-bar>
            <template #middle>购物车({{$store.getters.productLength}})</template>
        </common-nav-bar>
        <product-list/>
    </div>
</template>

<script>
    import ProductList from "./base/ProductList";
    export default {
        name: "Market",
        components:{
            ProductList,
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
</style>
