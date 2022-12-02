import React from 'react'
import { Wrapper } from './style'
import line from '../../assets/img/line.png'

export default function Question(info){
    console.log(info,'info')
    return(
        <Wrapper className='flex_start_start'>
            <img src={line} alt="" />
            <div className='question-box'>
                <div className='flex_start desc'>
                    <span>{info.info.subjectName} · </span>
                    <span>{info.info.cateName} · </span>
                    <span>一般</span>
                </div>
                <div className='flex_between content-box'>
                    <div className='ellipsis content'>{info.info.content}</div>
                    <span className='date'>上传时间：2022/11/01</span>
                </div>
                <div>
                    <p>现代散文</p>
                    <div className='flex_start'>
                        按钮
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}