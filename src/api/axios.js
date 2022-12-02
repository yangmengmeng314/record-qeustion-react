import axios from 'axios'
import { getCookie,setCookie,removeCookie} from '../utils/index';
import { message } from 'antd';

// var domain_static='http://localhost:8081';
var domain_static='https://school.glzhxx.com/recordQuestiondev/';
// var basic_api_url='http://192.168.1.2:8080/'
var basic_api_url='https://school.glzhxx.com/record-questiondev-api/';//接口地址

const ajax = axios.create({
    baseURL: basic_api_url,
    withCredentials: true,
    timeout: 50000
})
ajax.interceptors.request.use(//发送请求的时候处理的，统一加上api_token
    (config) => {
        if (!config.data) {
            config.data = []
        }
        config.headers.Authorization = getCookie('ques_Authorization') ? getCookie('ques_Authorization') : ''
        // config.headers.Authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmlja25hbWUiOiLmtYvor5UiLCJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6ImUxMGFkYzM5NDliYTU5YWJiZTU2ZTA1N2YyMGY4ODNlIiwibmlja25hbWUiOiLmtYvor5UiLCJzdGF0ZSI6InBhc3MiLCJsYXN0TG9naW5BdCI6MTY2NzkwMDgwNDAwMCwiY3JlYXRlZEF0IjoxNjY3ODczNDQ2MDAwLCJ1cGRhdGVkQXQiOjE2Njc5MDA4MDQwMDB9LCJleHAiOjE2Njc5ODIwMDl9._L-V8aSMEd6j1VNpBsPTieNCKxIZjWXMHiyQ3oTswfo'
        return config;
    },
    (error) =>
        Promise.reject(error),
)

ajax.interceptors.response.use(
    (response) => {
        if(response.data.code == 0){
            return response.data;
        }else if(response.data.code == 3){//表示登录失效
            window.location.replace(domain_static);
        }else{
            message.error(response.data.message)
        }
    },
    (error) =>
        // Do something with response error
        Promise.reject(error),
)

export {
    ajax,
    domain_static,
    basic_api_url
}