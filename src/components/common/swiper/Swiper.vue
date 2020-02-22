<template>
    <div v-if="this.banner.length!==0">
        <swiper :options="swiperOption" class="swiper">
                <swiper-slide v-for="item in banner">
                    <img :src="item.image" alt="">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "CommonSwiper",
        props:{
            banner:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                swiperOption:{
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    loop:true,//vue中loop会失效是因为初始的时候没有请求到图片数据,先不渲染,有了图片在渲染swiper就能解决loop失效问题
                    autoplay:{
                        delay:2000,
                    }
                }
            }
        }
    }
</script>

<style scoped>

    .swiper{
        height:0;
        padding-bottom: 52%;
    }
    /*height:0设置padding填充 防止轮播图由于图片加载造成重排抖动*/
    .swiper img{
        width:100%;
    }
    /*  /deep/  >>> 是注入css   修改第三方组件库默认的样式*/
    .swiper /deep/ .swiper-pagination-bullet-active{
        background-color: red;
    }
</style>
