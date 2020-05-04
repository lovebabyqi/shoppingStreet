
import axios from 'axios'

// axios.defaults.baseURL = 'http://123.207.32.32:8000/api/hy'
axios.defaults.baseURL = 'http://152.136.185.210:8000/api/hy'
// axios.defaults.baseURL = 'http://123.207.32.32:8000/api/hy'
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

