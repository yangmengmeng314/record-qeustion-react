import styled from 'styled-components'

export const Wrapper = styled.div`
    height:100vh;font-size:16px;color:#1D383B;
    .login-box{width:50%;height:100%;padding:32px 48px;box-sizing: border-box;
        .login-item{margin-top:166px;text-align:center;
            h2{letter-spacing: 8px;text-indent: 8px;}
            .welcome{font-size:10px;}
            .ant-form{width:60%;margin:40px auto;
                .login-btn{width:100%;background: linear-gradient(180deg, #11A8B6 0%, #108B96 100%);
                    box-shadow: 2px 4px 6px rgba(40, 92, 97, 0.54), inset 1px 2px 4px rgba(0, 0, 0, 0.25);
                    border-radius: 6px;height:40px;}
                .ant-form-item-explain-error{text-align:left;}
            }
        }
    }
    .login-img-box{width:50%;background:#C2E6EA;height:100%;
        img{width:50%;}
    }
`