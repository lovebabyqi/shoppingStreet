<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="middle">
            <slot name="middle"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommonNavBar"
    }
</script>

<style lang="less" scoped>
    .nav-bar{
        display: flex;
        position: relative;
        z-index: 10;
        height:44px;
        box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
        background-color: #fff;
        text-align: center;
        line-height: 44px;
        .left,.right{
            width: 60px;
        }
        .middle{
            flex:1
        }
    }
</style>
