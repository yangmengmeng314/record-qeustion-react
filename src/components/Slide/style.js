import styled from 'styled-components'

export const Wrapper = styled.div`
    .slide{max-width: 250px;min-width: 200px;height:100%;
        .img-box{background:#fff;padding:26px 40px;border-radius: 38px 0 0 0;
            img{width:60%;height:auto;min-width: 116px;}
        }
        .slide-bg{background:#fff;
            .slide-ul{color:#fff;font-size: 16px;text-align:center;background:#108B96;padding:100px 0;border-radius: 0 38px 0 0;
                li{padding:11px 0;width: 50%;margin: 11px auto;cursor:pointer;}
                .active{background: linear-gradient(96.18deg, #23BCCA 2.84%, #59E3EF 99.82%);
                    box-shadow: -1px -1px 4px rgba(144, 212, 218, 0.22), 7px 7px 26px #0A6871;
                    border-radius: 8px;}
            }
        }
    }
`