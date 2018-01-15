
// import axios from 'axios'

// axios.defaults.timeout = 5000;
// axios.defaults.headers['Authorization'] = '2378462354';


// // axios.defaults.baseURL = 'http://dev.anchumall.cc:9550/api.php';

// //返回状态判断(添加响应拦截器)
// axios.interceptors.response.use((res) =>{

//     if(res.status != 200){
//         return Promise.reject(res);
//     }
//     return res.data;

// }, (error) => {

//     return Promise.reject(error);
// });



// export default axios;


import axios from 'axios'
import api from './Api'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = '';

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    
    console.log('错误的传参')
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
    if(res.status != 200){
        // _.toast(res.data.msg);
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    console.log("网络异常")
    return Promise.reject(error);
});


export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
    })
}


export function getAdList(params){
	return fetch(api.home.getAdList,params)
}