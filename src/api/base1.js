import http from './http.js';
import {ajax} from './axios';


export function getVod(){
    return new Promise((resolve, reject) => {
        http("post",'/base/vod/').then(res => {
            resolve (res);
        },error => {
            reject(error)
        })
    }) 
}
//获取上传到腾讯云对象的cos
export function getCos(){
    return new Promise((resolve, reject) => {
        http("get",'/question/base/cos').then(res => {
            resolve (res);
        },error => {
            reject(error)
        })
    })
}
// 登录
export function loginMess(opt) {
    return ajax.post('/login', opt);
}
//登录
// export function loginMess(opt){
//     return new Promise((resolve, reject) => {
//         http("post",'/login',opt).then(res => {
//             resolve (res);
//         },error => {
//             reject(error)
//         })
//     })
// }
// 学段
export function stageList(){
    return new Promise((resolve, reject) => {
        http("get",'/base/stage/all').then(res => {
            resolve (res);
        },error => {
            reject(error)
        })
    })
}
// 学科
export function subjectList(opt){
    return new Promise((resolve, reject) => {
        http("get",'/base/subject/all?stageId='+opt.stageId).then(res => {
            resolve (res);
        },error => {
            reject(error)
        })
    })
}
// 年级
export function gradeList(opt){
    return new Promise((resolve, reject) => {
        http("get",'/base/grade/all?stageId='+opt.stageId).then(res => {
            resolve (res);
        },error => {
            reject(error)
        })
    })
}
// 教材
export function bookList(){
    return new Promise((resolve, reject) => {
        http("get",'/base/book/all').then(res => {
            resolve (res);
        },error => {
            reject(error)
        })
    })
}
// 章节
export function chapterList(opt){
    return new Promise((resolve, reject) => {
        http("get",`/base/book/${opt}/chapter`).then(res => {
            resolve (res);
        },error => {
            reject(error)
        })
    })
}
// 版本
export function versionList(){
    return new Promise((resolve, reject) => {
        http("get",'/base/edition/all').then(res => {
            resolve (res);
        },error => {
            reject(error)
        })
    })
}
// 知识点
// export function knowledgeList(opt){
//     return ajax({
//         url: '/base/knowledge/all?subjectId='+opt.subjectId+'&keyword='+decodeURI(opt.keyword),
//         method: 'get',
//       })
// }

