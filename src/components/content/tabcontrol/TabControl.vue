<template>
    <ul class="tab-control">
        <li v-for="(item,index) in titles" @click="handleClick(index)" :class="{active:currentIndex===index}">
            <span>{{item}}</span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "TabControl",
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                currentIndex:0
            }
        },
        methods:{
            handleClick(index){
                this.currentIndex = index
                this.$emit('tabClick',index)
            }
        }
    }
</script>

<style scoped lang="less">
    @import '~assets/css/varible.less';
    .tab-control{
        display:flex;
        text-align: center;
        line-height: 40px;
        li{
            flex:1;
        }
        .active{
            span{
                padding:5px;
                color:@hightTextColor;
                border-bottom:3px solid @hightTextColor
            }
        }
    }
</style>
