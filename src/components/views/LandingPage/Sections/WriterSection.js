import React from 'react';
import styled from "styled-components";
import { Row, Col } from 'antd';


function WriterSection() {

    const aTag = styled.a`
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px
    `;


    const Img = styled.img`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: auto;
        height: 100%;
        filter: grayscale(100%);
        transition: all 0.1s ease;
    `;


    const Caption = styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        z-index: 10;
    `;


    const Name = styled.p`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: Montserrat, sans-serif;
        font-size: 26px;
        color: #ffffff;
        font-weight: 700;
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
    `;

    return (
        <div className="WriterSection" style={{padding: "150px 0"}}>
            <div className="container">
                <div className="row">
                    <h1 style={{marginBottom: '25px'}}>ARTIST</h1>

                    <Row gutter={[16, 16]}>
                        <Col lg={6} md={8} xs={12} className="writer-el">
                            <div>
                                <aTag href="#">
                                    <Img src={require('../../../img/jinyoung.jpg')}/>
                                </aTag>
                                <Caption>
                                    <Name>Jin Young</Name>
                                </Caption>
                            </div>
                        </Col>

                        
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default WriterSection
