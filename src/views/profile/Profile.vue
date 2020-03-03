<template>
    <div id="profile">
        <common-nav-bar>
            <template #middle>超级商场</template>
        </common-nav-bar>
        <profile-user-info></profile-user-info>
        <profile-shop-account></profile-shop-account>
        <profile-list-view :list-data="orderList"></profile-list-view>
        <profile-list-view :list-data="serviceList"></profile-list-view>
        <profile-list-view :list-data="moreList"></profile-list-view>
    </div>
</template>

<script>
    import ProfileUserInfo from './base/UserInfo'
    import ProfileShopAccount from './base/ShopAccount'
    import ProfileListView from './base/ListView'
    export default {
        name: "Profile",
        data(){
            return {
                orderList:[
                    '我的消息',
                    '积分商城',
                    '会员卡'
                ],
                serviceList:[
                    '我的购物车',
                    '下载购物APP'
                ],
                moreList:[
                    '设置',
                    '更多'
                ]
            }
        },
        components:{
            ProfileUserInfo,
            ProfileShopAccount,
            ProfileListView
        }
    }
</script>

<style scoped lang="less">
    .nav-bar{
        background-color: pink;
        color:#fff;
        /*font-weight: bold;*/
    }
    #profile{
        /*height: 100vh;*/
        background-color: #f2f2f2;
        position: fixed;
        top:0;
        bottom: 49px;
        left: 0;
        right: 0;
        overflow-y:scroll;
    }
    #profile::-webkit-scrollbar{
        display:none;
    }
</style>
