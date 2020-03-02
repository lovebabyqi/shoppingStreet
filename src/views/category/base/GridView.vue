<template>
    <div v-if="Object.keys(subCategory).length!==0">
        <ul class="grid-view" ref="gridView">
            <li
                class="content-item"
                :style="styleObj"
                v-for="(item,index) in subCategory"
            >
                <img :src="item.image" alt="">
                <p>{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "CategoryGridView",
        props: {
            subCategory: {
                type: Array,
                default() {
                    return []
                }
            },
            cols:{
                type:Number,    //组件每一行会有几个li
                default:3
            }
        },
        computed:{
            styleObj(){
                return {
                    width:`${100/this.cols}%`
                }
            }
        }

    }
</script>

<style scoped lang="less">
    .grid-view {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .content-item {
        text-align: center;
        font-size: 12px;
    }

    .content-item img {
        width: 80%;
    }

    .content-item p {
        margin-top: 15px;
        line-height: 20px;
        font-size: 14px
    }
</style>