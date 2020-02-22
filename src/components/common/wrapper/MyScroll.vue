<template>
    <div class="wrapper" ref="wrapper">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "MyScroll",
        mounted() {
            new BScroll(this.$refs.wrapper,{
                click:true
            })
        }
    }
</script>

<style scoped>

</style>
