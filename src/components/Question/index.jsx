import React from 'react'
import { Wrapper } from './style'
import line from '../../assets/img/line.png'
import {degreeToText, timeToDate} from '../../utils'

export default function Question(info){
    return(
        <Wrapper className='flex_start_start'>
            <img className='line-img' src={line} alt="" />
            <div className='question-box'>
                <div className='flex_start desc'>
                    <span>{info.info.subjectName}&nbsp;&nbsp;·&nbsp;&nbsp;</span>
                    <span>{info.info.cateName}&nbsp;&nbsp;·&nbsp;&nbsp;</span>
                    <span className='degree' style={{background: degreeToText(info.info.degree).color}}>{degreeToText(info.info.degree).degreeText}</span>
                </div>
                <div className='flex_between content-box'>
                    <div className='ellipsis content'>{info.info.content}</div>
                    <span className='date'>上传时间：{timeToDate(info.info.createdAt)}</span>
                </div>
                <div className='flex_between'>
                    <p>现代散文</p>
                    <div className='flex_start'>
                        <span>{info.info.state == 'audit' ? '待审核' : info.info.state == 'pass' ? '已通过' : '未通过'}</span>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}