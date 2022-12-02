import React from 'react'
import { Wrapper } from './style'
import login from '../../assets/img/login-bg.png'
import { Button, Checkbox, Form, Input } from 'antd';
import { getCookie,setCookie,removeCookie} from '../../utils/index.js';
import {loginMess} from '../../api/base'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import md5 from 'js-md5'

export default function Login(){
    const nav = useNavigate()
    const dispatch = useDispatch();
    const loginClick = async() => {
        console.log('点击登录')
    }
    const onFinish = (values) => {
        console.log('完成表单: ', values);
        let data={
            username:values.username,
            password:md5(values.password)
        }
        loginMess(data).then(res => {
            let account = res.data
            // 存储用户信息
            dispatch({type:'LOGIN', payload:{ account }})
            setCookie('ques_Authorization',res.data.token)
            localStorage.setItem('ques_account',JSON.stringify(res.data))
            setCookie('ques_account',res.data)
            nav('/home/questionlist')
            // this.$router.push('questionList')
        })
    };
    return (
        <Wrapper className='flex_between'>
            <div className='login-box'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                <p>Weclome back</p>
                <div className='login-item'>
                    <h2>欢迎登录题库中心</h2>
                    <span className='welcome'>Welcome to the Question Bank Center</span>
                    <Form name='basic' labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
                        <Form.Item label="账号" name="username" rules={[{ required: true, message: '请输入账号!' }]}>
                            <Input placeholder="请输入账号"></Input>
                        </Form.Item>
                        <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                            <Input.Password placeholder="请输入密码" />
                        </Form.Item>
                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 0, span: 24 }}>
                            <div className='flex_between'>
                                <Checkbox>记住密码</Checkbox>
                                <p>忘记密码</p>
                            </div>
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                            <Button className='login-btn' type="primary" htmlType="submit" onClick={loginClick}>登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div className='login-img-box flex_center'>
                <img src={login} alt="" />
            </div>
        </Wrapper>
    )
}