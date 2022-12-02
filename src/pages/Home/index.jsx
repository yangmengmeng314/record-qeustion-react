import React from 'react'
import { Outlet } from 'react-router-dom'
import Slide from '../../components/Slide/Slide'
import { Wrapper } from './style'

export default function Home(){
    return(
        <Wrapper className='flex_between_start' style={{height:'100%'}}>
            <Slide></Slide>
            <Outlet></Outlet>
        </Wrapper>
    )
}