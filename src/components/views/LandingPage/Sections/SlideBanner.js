import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import styled from "styled-components";
import '../LandingPage.css';


function SlideBanner() {

    const SlideList = styled.div`
        position: relative;
        width: 100%;
        height: 685px;
    `;



    return (
        <>
            <Carousel>
                <SlideList className="SlideList">
                    <img src={require('../../../img/banner01.png')} />

                        <div className="Slide-banner">
                            <div className="row">
                                <div style={{position: 'absolute', bottom: '100px'}}>
                                    <h1 style={{color: "#ffffff", fontSize: "53px", fontWeight: "800",}}>Son Woojung</h1>
                                    <p style={{color: "#ffffff", fontSize: "12px"}}>오감을 초월하는 몽환의 숲으로...</p>
                                </div>
                            </div>
                        </div>

                </SlideList>


            </Carousel>
        </>
    )
}

export default SlideBanner
