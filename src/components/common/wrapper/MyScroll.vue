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
        name: "CommonScroll",
        props:{
            pullUpLoad:{
                type:Boolean,
                default:false
            },
            probeType:{
                type:Number,
                default: 0
            }
        },
        data(){
            return {
                scroll:null
            }
        },
        mounted() {
            //初始化better-scroll
            this.scroll = new BScroll(this.$refs.wrapper,{
                click:true,//允许在滚动区域点击
                pullUpLoad:this.pullUpLoad,//允许监听pullingUp事件
                probeType:this.probeType
            })
            //监听 滚动到页面区域最底部 默认只能监听到一次
            this.scroll.on('pullingUp',()=>{
                this.$emit('loadMore')
            })
            //只要滚动就回触发该事件
            this.scroll.on('scroll',(position)=>{
                this.$emit('getPosition',position)
            })
        },
        methods:{
            finishPullUp(){
                this.scroll.finishPullUp()
            },
            scrollTo(x,y,time=500){
                this.scroll.scrollTo(x,y,time)
            }
        }
    }
</script>

<style scoped>

</style>
