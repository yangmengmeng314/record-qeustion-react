
import {ajax} from './axios';

// 我的题目列表
export function myQuesList(opt){
    return ajax({
        url: '/question/question/my?keyword='+opt.keyword + '&current=' + opt.page,
        method: 'get',
    })
}
// 题型
export function cateList(opt){
    return ajax({
        url: '/question/cate/all?subjectId='+opt.subjectId,
        method: 'get',
      })
}
// 题目详情
export function quesDetail(opt){
    return ajax({
        url: `/question/question/${opt}`,
        method: 'get',
      })
}
// 审核列表
export function checkList(opt){
    return ajax({
        url: '/question/question/audit?keyword='+opt.keyword + '&current=' + opt.page,
        method: 'get',
      })
}
// 上传
export function uploadQues(opt){
    return ajax.post('/question/question',opt)
}
// 编辑
export function editQues(opt,id){
    return ajax.post(`/question/question/${id}`,opt)
}
// 驳回通过
export function approve(opt){
    return ajax.post('/question/question/batch/approve',opt)
}


