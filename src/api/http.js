import {ajax} from './axios';

// 封装get请求
export function get(url, params = {}){
    return new Promise((resolve, reject) => {
        ajax.get(url, {
            params:params
        }).then(response => {
            landing(url, params, response.data);
            resolve(response.data);
        }).catch(error => {
            reject(error)
        })
    })
}
// 封装post请求
export function post(url, data){
    return new Promise((resolve, reject) => {
        ajax.post(url, data).then(
            (response) => {
                console.log(response,'response')
                resolve(response.data);
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 封装patch请求
export function patch(url, data = {}){
    return new Promise((resolve, reject) => {
        ajax.patch(url, data).then(
            (response) => {
                resolve(response.data)
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 封装put请求
export function put(url, data = {}){
    return new Promise((resolve,reject) => {
        ajax.put(url, data).then(
            (response) => {
                resolve(response.data)
            },
            (err) => {
                reject(err)
            }
        )
    })
}

//统一接口处理，返回数据
export default function (fecth, url, param) {
    let _data = "";
    return new Promise((resolve, reject) => {
        switch (fecth) {
            case "get":
                console.log("begin a get request,and url:", url);
                get(url, param).then(function (response) {
                    resolve(response);
                }).catch(function (error) {
                    console.log("get request GET failed.", error);
                    reject(error);
                });
                break;
            case "post":
                post(url, param).then(function (response) {
                    console.log(response,'responseqqqq')
                    resolve(response);
                }).catch(function (error) {
                    console.log("get request POST failed.", error);
                    reject(error);
                });
                break;
            default:
                break;
        }
    });
}

/* 查看返回的数据 */
 function landing(url, params, data) {
    if (data.code === -1) {}
}