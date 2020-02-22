import request from './request'

//请求home组件的轮播数据
export const reqHomeMultidata = ()=>request('/home/multidata')

//请求home组件的goods数据
//接受的type值  pop /   new /   sell
export const reqHomeGoods = (type,page)=>request('/home/data',{type,page})
