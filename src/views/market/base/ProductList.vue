<template>
    <div>
        <product-list-item v-for="product in products" :product="product"/>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import ProductListItem from "./ProductListItem";
    export default {
        name: "ProductList",
        computed:{
            ...mapState(['products'])
        },
        components:{
            ProductListItem
        }
    }
</script>

<style scoped>

</style>
