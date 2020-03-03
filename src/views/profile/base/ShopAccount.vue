<template>
    <ul class="account">
        <li class="account-item">
            <div class="number">
                <span class="balance">0.00</span>元
            </div>
            <div class="account-info">我的余额</div>
        </li>
        <li class="account-item">
            <div class="number">
                <span class="balance">0</span>个
            </div>
            <div class="account-info">我的优惠</div>
        </li>
        <li class="account-item">
            <div class="number">
                <span class="balance">0</span>分
            </div>
            <div class="account-info">我的积分</div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "ProfileShopAccount"
    }
</script>

<style scoped lang="less">
    .account{
        display:flex;
        .account-item{
            flex:1;
            background-color: #fff;
            margin-right:1px;
            text-align: center;
            color:#666;
            font-size:13px;
            padding:18px;
            .balance{
                font-size:24px;
                font-weight:700;
                color:#ff5f3e;
            }
            .account-info{
                margin-top:6px;
            }
        }
        .account-item:last-of-type{
            margin-right:0;
        }
    }
</style>