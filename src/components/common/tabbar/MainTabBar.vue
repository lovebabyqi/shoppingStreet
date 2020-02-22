<template>
    <div class='MainTabBar'>
        <tab-bar>
            <tab-bar-item to="/home" activeColor="#59c3e5">
                <template #item-icon>
                    <img src="~assets/img/tabbar/home.svg" alt="">
                </template>
                <template #item-icon-active>
                    <img src="~assets/img/tabbar/home_active.svg" alt="">
                </template>
                <template #item-text>
                    <p>首页</p>
                </template>
            </tab-bar-item>

            <tab-bar-item to="/category" activeColor="#59c3e5">
                <template #item-icon>
                    <img src="~assets/img/tabbar/category.svg" alt="">
                </template>
                <template #item-icon-active>
                    <img src="~assets/img/tabbar/category_active.svg" alt="">
                </template>
                <template #item-text>
                    <p>分类</p>
                </template>
            </tab-bar-item>

            <tab-bar-item to="/market" activeColor="#59c3e5">
                <template #item-icon>
                    <img src="~assets/img/tabbar/shopcart.svg" alt="">
                </template>
                <template #item-icon-active>
                    <img src="~assets/img/tabbar/shopcart_active.svg" alt="">
                </template>
                <template #item-text>
                    <p>购物车</p>
                </template>
            </tab-bar-item>

            <tab-bar-item to="/profile" activeColor="#59c3e5">
                <template #item-icon>
                    <img src="~assets/img/tabbar/profile.svg" alt="">
                </template>
                <template #item-icon-active>
                    <img src="~assets/img/tabbar/profile_active.svg" alt="">
                </template>
                <template #item-text>
                    <p>个人</p>
                </template>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>

    export default {
        name: "MainTabBar",
    }
</script>

<style scoped>

</style>
