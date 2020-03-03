<template>
    <div id="list-view">
        <ul>
            <li v-for="(item,index) in listData" class="item" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ProfileListView",
        props:{
            listData:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped lang="less">
    #list-view{
        background-color: #fff;
        font-size:15px;
        color:#333;
        margin-top:12px;
        .item{
            height:44px;
            line-height: 44px;
            border-bottom:1px solid rgba(100,100,100,.1);
            padding-left:5px;
            text-indent: 20px;
        }
        .item:last-of-type{
            border-bottom:none;
        }
    }

</style>