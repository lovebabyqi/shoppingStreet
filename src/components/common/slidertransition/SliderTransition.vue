<template>
    <div class='SliderTransition'>
        <transition :name="name">
            <slot/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "SliderTransition",
        props:{
            name:{
                type:String
            }
        }
    }
</script>

<style lang="less" scoped>

    .left-leave-active{
        transform:translateX(0px);
        transition:1s;
    }
    .left-leave-to{
        transform:translateX(-100%)
    }

    .left-enter-active{
        transform:translateX(100%);
        transition:1s;
    }
    .left-enter-to{
        transform:translateX(0)
    }

    .right-leave-active{
        transform:translateX(0px);
        transition:1s;
    }
    .right-leave-to{
        transform:translateX(100%)
    }

    .right-enter-active{
        transform:translateX(-100%);
        transition:1s;
    }
    .right-enter-to{
        transform:translateX(0)
    }

</style>
