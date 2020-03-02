<template>
    <div class="category-left-nav">
        <ul class="menu-list">
            <li
                    v-for="(item,index) in categorys"
                    @click="itemClick(index)"
                    :key="index"
                    :class="{active:currentIndex===index}"
                    class="menu-list-item"
            >
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "CategoryLeftNav",
        props:{
            categorys:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return {
                currentIndex:0
            }
        },
        methods:{
            itemClick(index){
                this.currentIndex = index
                this.$emit('itemClick',index)
            }
        }
    }
</script>

<style scoped lang="less">
    @import '~assets/css/varible.less';

    .category-left-nav{
        background-color: #f6f6f6;
        height: 100%;
        box-sizing: border-box;
    }
    .menu-list-item{
        height: 45px;
        line-height: 45px;
        text-align: center;
        font-size:14px;
    }
    .menu-list-item.active{
        font-weight: 700;
        color:@hightTextColor;
        background-color: #fff;
        border-left:3px solid @hightTextColor;
    }
</style>