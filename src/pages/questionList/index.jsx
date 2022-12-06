import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import Search from '../../components/Search'
import Question from '../../components/Question'
import {myQuesList} from '../../api/question'

export default function Home(){
    const [question_list, set_question_list] = useState([])
    
    const getQuestionList = () => {
        let data={
            keyword:'',
            page:1
        }
        myQuesList(data).then(res => {
            set_question_list(res.data.records)
            // console.log(question_list,'我的题目列表')
        })
    }
    useEffect(() => {
        getQuestionList()
    }, [])
    return(
        <Wrapper>
            <Search></Search>
            <div className='list'>
               {
                    question_list.map(item => {
                        return <Question info={item} key={item.id}></Question>
                    })
                } 
            </div>
            
        </Wrapper>
    )
}