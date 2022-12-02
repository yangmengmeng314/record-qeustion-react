import React from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Wrapper } from './style'

export default function Search(){
    return (
        <Wrapper className='flex_end'>
            <Input size="default" placeholder="请输入关键字" prefix={<SearchOutlined />} />
        </Wrapper>
    )
}