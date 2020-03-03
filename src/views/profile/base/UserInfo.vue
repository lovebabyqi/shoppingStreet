<template>
    <div id="user-info">
        <a href="#" class="clear-fix">
            <div class="privateImage left">
                <img src="~assets/img/profile/avatar.jpg" alt="">
            </div>
            <div class="login-info left">
                <p>登录/注册</p>
                <p class="phone">暂无绑定手机号</p>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "ProfileUserInfo"
    }
</script>

<style scoped lang="less">
    @import '~assets/css/varible.less';
    #user-info{
        background-color: @themeColor;
        padding:15px;
        margin-top:-5px;
        .privateImage{
            width:60px;
            height:60px;
            background-color: #fff;
            border-radius: 30px;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .left{
            float:left;
        }
        .login-info{
            color:#fff;
            margin:10px 0 0 10px;
            .phone{
                position:relative;
                font-size:13px;
                margin-top:5px;
                font-weight: 300;
            }
        }

    }
</style>