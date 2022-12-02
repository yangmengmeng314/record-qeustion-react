// 独立配置文件
import { lazy } from 'react'
import { Routes, Route, useRoutes } from 'react-router-dom'

const Login = lazy(() => import('../pages/Login'))
const Home = lazy(() => import('../pages/Home'))
const Questionlist = lazy(() => import('../pages/questionList'))

const RoutesConfig = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/home' element={<Home />}>
                <Route path='questionlist' element={<Questionlist />}></Route>
            </Route>
        </Routes>
    )
}

export default RoutesConfig