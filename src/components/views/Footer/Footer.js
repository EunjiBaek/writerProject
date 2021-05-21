import React from 'react'
import {Icon} from 'antd';
import styled from "styled-components";
import '../common/common.css';
import './footer.css';

const Desc = styled.p`
  color: #000000;
  font-size: 26px;
  font-weight: 800;
  line-height: 1.2em
`;

const Desc2 = styled.p`
  color: #666666;
  font-size: 12px;
  line-height: 1.2em
`;


function Footer() {
    return (
        <div className="footer" style={{width: "100%", height: "215px", backgroundColor: "#EFEFEF"}}>
            <div className="container">
                <div className="row">
                    <div style={{width: "100%", height: "215px", display:'flex',  justifyContent:' center', paddingTop: '65px', boxSizing: 'border-box'}}>
                        <div style={{width: "25%"}}>
                            <Desc>k auction <br /> Artist</Desc>
                        </div>

                        <div style={{width: "50%"}}>
                            <Desc2 style={{marginBottom: '15px'}}>사업자등록번호 101-86-17910  통신판매업신고번호 : 서울강남 제 2008-537호  대표이사 : 도현순 <br />
                            주소 : 서울특별시 강남구 언주로 172길 23 아트타워  대표전화 : 02-3479-8888  팩스 : 02-3479-888</Desc2>
                            <Desc2>Copyright ⓒ K Auction. All Rights Reserved</Desc2>
                        </div>

                        <div style={{width: "25%"}}>
                            <p style={{fontSize: '16px', fontWeight: '800', textAlign: 'right', marginBottom: '10px'}}>k auction sns</p>

                            <ul className="footer-sns">
                                <li><a href="#">f</a></li>
                                <li><a href="#">t</a></li>
                                <li><a href="#">b</a></li>
                                <li><a href="#">i</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
