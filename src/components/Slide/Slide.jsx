import React from 'react'
import { Wrapper } from './style'
import logo from '../../assets/img/logo.png'

export default function Slide(){
    const tab_list = [
        {
            id:1,
            title:'上传题目'
        },
        {
            id:2,
            title:'审核题目'
        },
        {
            id:3,
            title:'校本题库'
        },
    ]
    return(
        <Wrapper>
            <div className='slide'>
                <div className='img-box'>
                    <img src={logo} alt="" />
                </div>
                <div className='slide-bg'>
                    <ul className='slide-ul'>
                        {
                            tab_list.map(tab => {
                                return (
                                    <li key={tab.id}>{tab.title}</li>
                                )
                            })
                        }
                    </ul> 
                </div>
                
            </div>
            
        </Wrapper>
    )
}