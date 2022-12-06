import styled from 'styled-components'

export const Wrapper = styled.div`
    padding:20px 0;color: #1D383B;font-size: 16px;width:calc(100% - 110px);box-sizing: border-box;border-bottom: 1px solid #F0F0F0;margin:0 55px;
    .line-img{width:10px;flex: 0;}
    .question-box{margin-left:10px;flex: 1;box-sizing: border-box;width:calc(100% - 20px);
        .desc{font-size:14px;color: #102C2F;
            .degree{border-radius:18px 0 18px 0;padding:0 10px}
        }
        .content-box{width:100%;margin:16px 0;
            .content{width:80%;}
            .date{color:#757C7C;font-size:12px;}
        }
    }
`