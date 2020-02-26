<template>
    <div id="app">
        <slider-transition :name="name">
            <keep-alive exclude="Detail">
                <router-view class="center"/>
            </keep-alive>
        </slider-transition>
        <main-tab-bar v-show="!$route.path.includes('detail')"/>
    </div>
</template>
<script>
    // import MainTabBar from 'components/common/tabbar/MainTabBar'
    // import SliderTransition from 'components/common/slidertransition/SliderTransition'

    export default {
        data() {
            return {
                name: '' //防止抖屏
            }
        },
        components: {
            // MainTabBar,
            // SliderTransition
        },
        watch: { //监视路由的变化
            $route(to, from) {
                if (from.path === '/') return
                if (to.meta.index > from.meta.index) {
                    this.name = 'left'
                } else {
                    this.name = 'right'
                }
            }
        }
    }

</script>

<style>
    @import 'assets/css/reset.css';
    @import 'assets/css/public.css';

    .center {
        position: absolute;
        width: 100%;
        height: calc(100% - 49px)
    }
</style>
