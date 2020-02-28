<template>
    <div class="back-top" @click="backTop" :style="{bottom}">
        <img src="~assets/img/common/top.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "BackTop",
        props:{
            bottom:{
                type:String,
                default:'60px'
            }
        },
        methods:{
            backTop(){
                this.$emit('backTop')
            }
        }
    }
</script>

<style scoped>
    .back-top{
        position:fixed;
        width:50px;
        height: 50px;
        right: 10px;
        /*bottom: 60px;*/
    }
    .back-top img{
        width: 50px;
    }
</style>
