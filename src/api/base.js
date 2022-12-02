import {ajax} from './axios';

//VOD获取防盗链签名
export function getVod(opt) {
    return ajax.post('/base/vod/', opt);
}
//获取上传到腾讯云对象的cos
export function getCos(opt) {
    return ajax({
        url:'/question/base/cos',
        method:'get'
    });
}
// 登录
export function loginMess(opt) {
    return ajax.post('/login', opt);
}
// 学段
export function stageList(opt){
    return ajax({
        url: '/base/stage/all',
        method: 'get',
      })
}
// 学科
export function subjectList(opt){
    return ajax({
        url: '/base/subject/all?stageId='+opt.stageId,
        method: 'get',
      })
}
// 年级
export function gradeList(opt){
    return ajax({
        url: '/base/grade/all?stageId='+opt.stageId,
        method: 'get',
      })
}
// 教材
export function bookList(opt){
    return ajax({
        url: '/base/book/all',
        method: 'get',
      })
}
// 章节
export function chapterList(opt){
    return ajax({
        url: `/base/book/${opt}/chapter`,
        method: 'get',
      })
}
// 版本
export function versionList(opt){
    return ajax({
        url: '/base/edition/all',
        method: 'get',
      })
}
// 知识点
export function knowledgeList(opt){
    return ajax({
        url: '/base/knowledge/all?subjectId='+opt.subjectId+'&keyword='+decodeURI(opt.keyword),
        method: 'get',
      })
}

