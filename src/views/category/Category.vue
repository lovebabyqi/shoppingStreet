<template>
    <div class="category">
        <common-nav-bar>
            <template #middle>分类</template>
        </common-nav-bar>
        <common-scroll class="wrapper-left">
            <category-left-nav
                    :categorys="categorys"
                    @itemClick='itemClick'
            />
        </common-scroll>
        <common-scroll class="wrapper-right">
            <category-grid-view
                    :cols="4"
                    :subCategory="subCategory"
            />
            <category-tab-control
                    @tabClick="tabClick"
                    :titles="Object.values(this.typeList)"
            />
            <good-list :goods="goods[currentType].list"/>
        </common-scroll>
    </div>
</template>

<script>
    import {reqCategory, reqSubcategory, reqCategoryDetail} from 'api/category.js'
    import CategoryLeftNav from './base/LeftNav'
    import CategoryGridView from './base/GridView'
    import CategoryTabControl from "components/content/tabcontrol/TabControl";
    import GoodList from "components/content/goodlist/GoodList";

    export default {
        name: "Category",
        data() {
            return {
                categorys: [],//存储左侧滚动区数据
                currentIndex:0,
                subCategory:[],
                currentType:'pop',
                // typeList:['pop','new','sell'],
                typeList:{'pop':'综合','new':'新品','sell':'销量'},
                goods:{
                    pop:{
                        list:[]
                    },
                    new:{
                        list:[]
                    },
                    sell:{
                        list:[]
                    }
                }
            }
        },
        created() {
            this.getCategory()
        },
        methods: {
            itemClick(index){
                this.currentIndex = index
                this.getSubCategory()
                // this.getSubCategoryDetail('pop')  //请求pop类型的数据
                // this.getSubCategoryDetail('sell')  //请求pop类型的数据
                // this.getSubCategoryDetail('new')  //请求pop类型的数据
                Object.keys(this.typeList).forEach((item)=>this.getSubCategoryDetail(item))
            },
            tabClick(index) {
                this.currentType = Object.keys(this.typeList)[index]
            },
            async getCategory() {
                const result = await reqCategory()
                this.categorys = result.data.category.list
                this.getSubCategory()
                // this.getSubCategoryDetail('pop')  //请求pop类型的数据
                // this.getSubCategoryDetail('sell')  //请求pop类型的数据
                // this.getSubCategoryDetail('new')  //请求pop类型的数据
                Object.keys(this.typeList).forEach((item)=>this.getSubCategoryDetail(item))

            },
            async getSubCategory(){
                const {maitKey} = this.categorys[this.currentIndex]
                const result = await reqSubcategory(maitKey)
                this.subCategory = result.data.list
                //请求右侧下面的数据,用于渲染GoodList    基于指定商品的miniWallkey

            },
            async getSubCategoryDetail(type){
                const {miniWallkey} = this.categorys[this.currentIndex]
                const result = await reqCategoryDetail(miniWallkey, type)
                // console.log(result)
                this.goods[type].list = result
            }
        },
        components: {
            CategoryLeftNav,
            CategoryGridView,
            CategoryTabControl,
            GoodList
        }
    }
</script>

<style scoped>
    .nav-bar {
        background-color: pink;
        font-weight: bold;
        color: #fff;
    }

    .wrapper-left {
        position: fixed;
        width: 100px;
        top: 44px;
        bottom: 49px;
    }

    .wrapper-right {
        position: fixed;
        left: 100px;
        right: 0;
        top: 44px;
        bottom: 49px;
    }
</style>
