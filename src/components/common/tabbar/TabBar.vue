<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        components:{

        },
        data(){
            return {
                active:true
            }
        },
    }
</script>

<style scoped>
    .tab-bar{
        display: flex;
        background-color: #f9f9f9;
        z-index:1;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.1);
    }

</style>