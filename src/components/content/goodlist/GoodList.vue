<template>
    <div class="good-list">
        <good-list-item v-for="item in goods" :goods-info="item" :keys="item.clientUrl"/>
    </div>
</template>

<script>
    import GoodListItem from "./GoodListItem";
    export default {
        name: "GoodList",
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{
            GoodListItem
        }
    }
</script>

<style scoped>
    .good-list{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>
