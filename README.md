## 购物街
**接口是B站一位老师分享的,更改比较频繁,真实数据链接没有在项目中展示，请忽略数据部分**

### 安转依赖
```
    yarn install
```
### 运行项目
```
    yarn run serve
```

### 打包项目
```
    yarn run build
```

## 开发过程一些记录

### 1.配置alias路径

```javascript
module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                'assets': '@/assets',
                'components': '@/components',
                'api': '@/api',
                'views': '@/views',
            }
        },
    }
}
```

### 2.components组件分为高复用性组件common和本次项目组件content

common在本次项目多次使用,用RequireContext自动注册

**开发完,想了想,全局注册组件也不好,自动注册也没偷多少懒**

```javascript
//common下index.js	随后在main.js导入,就能实现自动注册全局组件
import Vue from 'vue'
const requireContext = require.context('./',true,/\.vue$/)
requireContext.keys().forEach(fileName=>{
    const componentConfig = requireContext(fileName)
    Vue.component(
        componentConfig.default.name,
        componentConfig.default
    )
})
```

### 3.sliderTransition路由组件切换动画

**动画问题,必须设置定位**

配置路由表时,配置meta:{index:Number},根据index判断动画是向左还是向右,

注意出现抖动时,设置html 禁止页面缩放

```javascript
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
```

content属性值 :

```javascript
 width:可视区域的宽度，值可为数字或关键词device-width
 height:同width
 intial-scale:页面首次被显示是可视区域的缩放级别，取值1.0则页面按实际尺寸显示，无任何缩放
 maximum-scale=1.0, minimum-scale=1.0;可视区域的缩放级别，
 maximum-scale用户可将页面放大的程序，1.0将禁止用户放大到实际尺寸之上。
 user-scalable:是否可对页面进行缩放，no 禁止缩放
```

### 4.swiper轮播图抖动问题

4.1由于异步请求图片数据,初始时没有图片,**swiper容器没有高度填充,加载图片会出现重排抖动**,解决办法,给swiper设置height:0;padding-bottom:rem;

4.2要**修改swiper分页器的颜色,即修改第三方组件的默认样式**,可用样式注入	/deep/或>>>

三个箭头写法不支持sass,less等预处理器,/deep/可以

```javascript
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
```

4.3swiper的配置问题,**loop:true循环播放会失效**,是因为初始时没有图片,swiperOption配置已经生效了,解决办法应该有图片以后才让swiperOption生效,在swiper父容器用v-if条件渲染

```javascript
<div v-if="this.banner.length!==0">
    <swiper :options="swiperOption" class="swiper">
        <swiper-slide v-for="item in banner">
        	<img :src="item.image" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>
```

```javascript
swiperOption:{
	pagination: {
		el: '.swiper-pagination',
	},
	loop:true,//循环
	autoplay:{
		delay:2000,
	}
}
```

### 5.页面滚动

普通滚动是基于内容height大于了视口height,所有内容都会滚动,滚动僵硬

滚动库,可以实现滚动动画,回弹,可以在任何固定区域滚动

**better-scroll**

```javascript
yarn add --save better-scroll
```

```javascript
import BScroll from 'better-scroll'
//在钩子函数中
new Bscroll('.wrapper',{click:true})
//.wrapper是滚动区域,第二个参数是允许点击
```

使用时限定滚动区域大小

**滚动内容必须是一个节点**

home的滚动区域在nav和tabBar之间

默认:betterScroll会阻止点击事件,需要配置参数

### 6.vh vw单位

vh viewport height 100vh就是设备高度

### 7.$refs

不能在created钩子中不能拿到$refs

只能在mounted中得到$refs源生DOM

### 8.切换条类似于tabbar导航

多次使用,封装组件

### 9.流行 新款 精选

每次请求30调数据,下拉至末尾再次请求30条,再下一次可能请求20条;

条目不固定

每次点击Tab 切换type,并

请求list数据,图片链接,图片懒加载

```javascript
types = {pop:'流行',new:'新款',sell:'热卖'}
Object.values(types)
Object.keys(types)
```

### 10.上划固定Tab,吸顶

**浏览器调试在标签后面加上$0,就能在调试面板拿到DOM**

通过ref获取到Tab的scrollTop

不能用fixed定位,fixed后滚动不了了,better-scroll内部出错

**解决方案:两个tabControl组件,v-show控制第一个初始不显示,需要吸顶的时候显示**

设置样式

```javascript
{
    z-index:1;
    background-color:#fff;
}
```

注意需要同步两个tabControl,点击表现应该一致,点击新款,应该都显示新款

两个tabControl打上不同的ref,

### 11.图片懒加载,滚动到区域才显示,按需加载

### 12.详情页detail组件,动态路由

1.推荐编程式导航

如果是router-link导航,可以给router-link 加上tag='div'让router-link渲染成div

2.数据源数组

['商品','参数','评论','推荐']

轮播图需要修改swiper,统一banner图片源为数组

传递一个pdding-bottom**控制轮播图高度**

***Vue官方文档,风格指南很重要***

**详情数据,在接口请求中,定义一个构造函数,整合数据,方便实用**,数据清洗

由于初始good-info是个空对象{ },异步请求到数据之后,才填充数据,所以初始时有个空对象过程,渲染空对象数据,控制台会报错undefined of 0 ,请求到数据以后能正常显示,所以需要在detail根节点v-if 判断数据

```javascript
Object.keys(good-info).length
Object.keys()//是一个数组,空数组的length是0
```

### 13.Vue规定使用属性传递时推荐用烤串写法,接收props用小驼峰写法

**14.px2rem**

**15postcss-px-to-vw**

**16.优化打包,可以将Vue,VueRouter,Vuex等第三方包通过使用外链的形式导入,BootCDN**

### 17.scroll滚动时,会抖动的问题

防抖优化

由于页面非常多的懒加载图片,滚动过快,,scroll滚动区域内容高度计算不正确,导致滚不动

优化,

load事件监听图片加载

```javascript
<img v-lazy="showImage" alt="" @load="imageLoad">
```

给懒加载的图片添加load事件,图片加载完通知scroll重新计算滚动内容高度scroll.refresh()

```javascript
imageLoad(){
    this.$bus.$emit('imageLoad')
}
```

计算也不应该持续触发计算,结合**防抖**,500毫秒后再次计算滚动内容高度

```javascript
//Home组件的mounted钩子中
const debounce = function(fn,time){
    let timer = null;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(fn,time)
	}
};
const fresh = debounce(this.$refs.scroll.refresh,500)
this.$bus.$on('imageLoad',fresh)
```

### 18.提交至购物车,点击频率控制

节流优化,不能一直点提交,每隔一段时间允许一次

### 19.打包优化

**路由懒加载可能导致负优化**,webpackChunkName分割路由,不能一股脑全给分割开,谨慎使用

