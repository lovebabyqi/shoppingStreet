<template>
    <div class="bottom-bar">
        <check-bottom class="select-all" @click.native="btnSelectAll" :check="isChecked"></check-bottom>
<!--        <check-button class="select-all" @click.native="btnSelectAll" ></check-button>-->
        <span>全选</span>
        <span class="total-price">合计:¥0.00</span>
        <span class="buy-product" @click="handlePay">去结算(0)</span>
    </div>
</template>

<script>
    import CheckButton from "./CheckButton";

    export default {
        name: "BottomBar",
        components: {
            CheckButton
        },
        methods: {
            btnSelectAll(){


            },
            handlePay() {
                console.log('去结算');
            }
        }
    }
</script>

<style scoped>
    .bottom-bar {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 44px;
        box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
        background-color: #fff;
        font-size: 14px;
        color: #888;
        line-height: 44px;
        padding-left: 35px;
        box-sizing: border-box;
    }
    .bottom-bar .select-all{
        position: absolute;
        line-height: 0;
        left: 12px;
        top: 13px;
    }
    .bottom-bar .total-price {
        margin-left: 15px;
        font-size: 16px;
        color: #666;
    }
    .bottom-bar .buy-product{
        background-color: #59c3e5;
        color:#fff;
        width: 100px;
        height: 44px;
        text-align: center;
        line-height: 44px;
        float:right;
    }
</style>
