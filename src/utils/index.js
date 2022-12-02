import Cookies from 'js-cookie'

export const setCookieCos = (data,minutes) => {
    var date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    Cookies.set("recordquestioncos", JSON.stringify(data), { expires: date });
}
export const getCookieCos = (key) => {
    return Cookies.get(key)
}
// 获取cookie
export const getCookie = (name) => {
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null) {
        return unescape(arr[2]);
    }
    return null;
}
// 设置cookie
export const setCookie = (name,value) => {
    var exp  = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + 3*60*60*1000);
    if((typeof value == "string")&&(value.length > 0)){
      document.cookie = name + "="+ escape(value) + ";expires=" + exp.toGMTString();
    }else{
      exp.setTime(exp.getTime() - 1);
      var cval=getCookie(name);
      if(cval!=null)
          document.cookie=name +"="+cval+";expires="+exp.toGMTString()+";path=/";
    }
}
// 设置cookie
// export const setCookie = (name,value) => {
//     var exp  = new Date();    //new Date("December 31, 9998");
//     exp.setTime(exp.getTime() + 3*60*60*1000);
//     if((typeof value == "string")&&(value.length > 0)){
//       document.cookie = name + "="+ escape(value) + ";expires=" + exp.toGMTString()+';domain='+cookie_domain+';path=/';
//     }else{
//       exp.setTime(exp.getTime() - 1);
//       var cval=getCookie(name);
//       if(cval!=null)
//           document.cookie=name +"="+cval+";expires="+exp.toGMTString()+";path=/";
//     }
// }
// 删除cookie
export const removeCookie = (name) => {
    var d = new Date();
    d.setTime(d.getTime() - 1000000);
    document.cookie = name + '=1; expires=' + d.toGMTString();
}
/**
 * 获取今天的日期
 */
export const getdate = () => {
    var myDate = new Date;
    var year = myDate.getFullYear(); //获取当前年
    var mon = myDate.getMonth() + 1; //获取当前月
    var date = myDate.getDate(); //获取当前日
    var sp='/';
    return year+sp+mon+sp+date+sp;
}
/**
 * 获取随机数
 */
export const randomString = (len, charSet) => {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}
export const setTitle = (title) => {
    document.title = title || '题目录入'
}

export const getQueryVariable = (variable) => {
    var location = decodeURIComponent(window.location.search); 
    var query = location.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

export const timeToDate = (time) => {
    var time = new Date(time);
    var y = time.getFullYear();
    var m = time.getMonth()+1 < 10 ? ('0' + time.getMonth()+1) : (time.getMonth()+1);
    var d = time.getDate() < 10 ? ('0' + time.getDate()) : time.getDate();
    return y + '/' + m + '/' + d
}
export const degreeToText = (degree) => {
    if(degree > 0 && degree <= 0.2){
        let degree_info = {
            degreeText:'困难',
            color:'#FF7067'
        }
        return degree_info;
    }else if(degree > 0.2 && degree <= 0.4){
        let degree_info = {
            degreeText:'较难',
            color:'#FBCDD3'
        }
        return degree_info;
    }else if(degree > 0.4 && degree <= 0.6){
        let degree_info = {
            degreeText:'一般',
            color:'#E8E8FF'
        }
        return degree_info;
    }else if(degree > 0.6 && degree <= 0.8){
        let degree_info = {
            degreeText:'较易',
            color:'#8BD5F5'
        }
        return degree_info;
    }else if(degree > 0.8 && degree <= 1.0){
        let degree_info = {
            degreeText:'容易',
            color:'#8BEDF5'
        }
        return degree_info;
    }
}
export const judgeQuesType = (cate,subject_id) => {
    // 可选择多个填空
    let blank_multiple = ['基础知识', '任务型阅读', '选词填空', '短文填空', '语法填空', '单词拼写','句型转换','完成句子','根据情景写句子','翻译题','改错','词汇应用']
    let blank_multiple_index = blank_multiple.findIndex(item => item === cate.title)
    // 只有一个填空
    let blank_one = ['用所给单词正确形式填空', '连词成句', '默写']
    let blank_one_index = blank_one.findIndex(item => item === cate.title)
    let is_insert_img = ['应用题','操作题','解答题','连线题']
    let is_insert_img_index = is_insert_img.findIndex(item => item === cate.title)
    if(cate.title == '选择题' || cate.title == '多选题'){
        return 1;
    }else if((cate.title == '填空题' && subject_id != 10) || blank_multiple_index > -1){
        return 2;
    }else if(is_insert_img_index > -1){
        return 3;
    }
    else if(cate.title == '阅读理解' || cate.title == '完形填空'){
        return 4;
    }else if(blank_one_index > -1){
        return 5;
    }else if(cate.title == '听力'){
        return 6;
    }else{
        return 7;
    }
}
// 连接对象
export const adjustByTagPostion = (str) => {
    var left_brace_index = str.lastIndexOf('<');  
    var right_brace_index = str.lastIndexOf('>');  
    // 为true的话则表示字符串处于第一种情况，需要进行删除操作。  
    var inTagDefinition = left_brace_index > right_brace_index;  
    return inTagDefinition ? str.substring(0,left_brace_index)+'...' : str + '...';  
}

// 将未闭合的标签按序闭合
export const modifyDisplayString = (original, addTags) => {  
    var tagLenth = addTags.length;  
    for(var i = tagLenth-1; i >= 0; i--){  
        original += '</' + addTags[i] + '>';  
    }  
    return original;  
}