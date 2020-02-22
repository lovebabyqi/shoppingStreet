<template>
    <div class='tab-bar-item'>
        <div class="tab-bar-item" @click="handleClick">
            <slot name="item-icon" v-if="!active"></slot>
            <slot name="item-icon-active" v-else></slot>
            <div :style="activeStyle">
                <slot name="item-text"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
            to:String,
            activeColor:{
                type:String,
                default:'red'
            }
        },
        computed:{
            activeStyle(){
                return this.active?{color:this.activeColor}:{}
            },
            active(){
                return this.$route.path===this.to
            },
        },
        methods:{
            handleClick(){
                if(this.$route.path!==this.to){
                    this.$router.replace(this.to)
                }
            }
        }

    }
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
    }
    .tab-bar-item img{
        width:24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
    }
    .active{
        color: lightblue;
    }
</style>
