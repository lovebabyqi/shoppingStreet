
import axios from 'axios'
/*
    baseURL:'http://123.207.32.32:8000/api/hy',  俩地址都可以
    baseURL:'http://106.54.54.237:8000/api/hy',
*/
axios.defaults.baseURL = 'http://123.207.32.32:8000/api/wh'
// axios.defaults.baseURL = 'http://106.54.54.237:8000/api/wh'
axios.interceptors.response.use(res=>res.data)

export default function request(url,data={},method='get'){
    return new Promise((resolve,reject)=>{
        let p = null;
        if(method==='get'){ //如果是get请求
            p = axios.get(url,{
                params:data
            })
        }else{
            p = axios.post(url,data)
        }
        p.then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })

}

