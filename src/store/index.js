// import Vuex from 'vuex';
// import Vue from 'vue'

Vue.use(Vuex)
const store =  new Vuex.Store({
    state:{
        // products:[]//存储购物车中的商品
        products:JSON.parse(localStorage.getItem('products'))||[]//存储购物车中的商品
    },
    mutations:{//定义修改商品数据的方法
        addMarket(state,payload){//添加至购物车
            //先从product数组中查找有没有这次添加的商品 如果没有则添加count 1 如果找到则count++
            const product = state.products.find(item=>item.iid===payload.iid);
            if(product){
                product.count++
            }else{
                // state.products.push(Object.assign({count:1},payload))
                //Object.assign()
                state.products.push({
                    ...payload,
                    count:1,
                    checked:true,//按钮默认选中
                })
            }
        },
        updateCheck(state,payload){
            const product = state.products.find(item=>item.iid===payload)
            product.checked = !product.checked
        },
        selectAll(state,payload){
            state.products.forEach(item=>item.checked = payload)
        }
    },
    actions:{

    },
    getters:{
        count(state){//添加的某类商品的数量
            return function(iid){//返回一个函数,可以接收参数
                const product = state.products.find(item=>item.iid === iid)
                return product.count
            }
        },
        productLength(state){//所有商品种类的数量
            return state.products.length
        },
        isSelectAll(state){//全选按钮是否选中
            return state.products.every(item=>item.checked)
        },
        selectedProductsLength(state){//选中商品的数量
            return state.products.filter(item=>item.checked).length
        },
        total(state){//计算所有选中商品的 价格总和
            return state.products.reduce((pre,next)=>{
                return pre + (next.checked?next.count*next.price:0)
            },0)
        }
    }
})
//监听mutations里面的方法,一旦执行了,state数据一定就改变了
store.subscribe(function(mutations,state){
    //console.log(arguments);
    //数据改变就存储(跟新)到本地
    localStorage.setItem('products',JSON.stringify(state.products))

})

export default store;
