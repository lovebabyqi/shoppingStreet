<template>
    <div v-if="Object.keys(imageInfo).length" class="goods-info">
        <div class="info-desc clear-fix">
            <i class="start"></i>
            <p class="desc">{{imageInfo.desc}}</p>
            <i class="end"></i>
        </div>
        <h4 class="info-key">{{imageInfo.detailImage[0].key}}</h4>
        <div class="info-list">
            <img
                    v-for="(item,index) in images"
                    @load="imageLoad"
                    :src="item" :key="index" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailImageInfo",
        props:{
            imageInfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        computed:{
            images(){
                return this.imageInfo.detailImage[0].list
            }
        },
        methods:{
            imageLoad(){

            }
        }
    }
</script>

<style scoped>
    .goods-info{
        padding:20px 0;
        border-bottom:5px solid #f2f5f8;
    }
    .info-desc{
        padding:0 15px;
    }
    .info-desc .start,.info-desc .end{
        width: 90px;
        height: 1px;
        background-color: #a3a3a5;
        position:relative;
    }
    .info-desc .start{
        float:left;
    }
    .info-desc .end{
        float:right;
    }
    .info-desc .start::before, .info-desc .end::after {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: #333;
        bottom: 0;
    }
    .info-desc .end::after {
        right: 0;
    }
    .info-desc .desc {
        padding: 15px 0;
        font-size: 14px;
    }
    .info-key{
        margin:10px 0 10px 15px;
        color:#333;
        font-size: 15px;
    }
    .info-list img{
        width:100%;
    }
</style>
