import React, { useState } from 'react'
import styled from "styled-components";
import Slider from 'infinite-react-carousel';


function NewsSection() {


    const settings =  {
        accessibility: false,
        centerPadding: 10,
        dots: true,
    };

    const NewsImage = styled.div`
        width: 50%;
        height: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const NewsDesc = styled.div`
        width: 50%;
        height: 100%;
        box-sizing: border-box;
        padding: 50px;
    `;


    const text = "[5월 경매 출품작] 마르크 샤갈, <Les Jardins de Saint paul (The Garden of Saint Paul)>, 국내 경매에서 거래된 작품 중 최고가";

    const desc = "케이옥션이 오는 26일 서울 강남구 신사동 본사에서 5월 경매를 실시합니다. 이번 경매는 총 147점, 약 140억 원어치의 작품이 출품되며 경매 최고가 작품은 마르크 샤갈의 작품 'Les Jardins de Saint Paul(The Garden of Saint Paul, 생 폴 드 방스의 정원)'로 추정가 별도문의나 경매는 45억 원에 시작할 예정입니다. <br /><br />이는 국내 경매에서 소개된 샤갈 작품 중 최고가로 특히 얼마 전 공개된 이건희 컬렉션에 포함된 '붉은 꽃다발과 연인들'(1975)과 비슷한 시기에 같은 지역인 프랑스 남부의 생 폴 드 방스에서 제작된 작품이라 더욱 눈길을 끕니다.<br /><br /> 경매 출품작은 내일(15일)부터 26일(수)까지 케이옥션 전시장에서 무료로 관람할 수 있으며 경매 참여를 원하는 경우 서면이나 현장, 전화, 온라인 라이브응찰을 통해 참여할 수 있습니다."




    return (

        <div className="News" style={{padding: "150px 0", backgroundColor: "#F6F6F6"}}>
            <div className="container">
                <div className="row">
                    <h1 style={{marginBottom: '25px'}}>News</h1>

                    <div>
                        <div>
                            <Slider { ...settings } className="NewsSlide">

                                <div>

                                  <NewsImage>
                                    <img src={require('../../../img/news-image01.jpg')} style={{width: 'auto', maxHeight: '100%'}}/>
                                  </NewsImage>

                                  <NewsDesc>
                                        <h2 style={{fontSize: '25px', fontWeight: '700', marginBottom: '25px'}} >
                                            {text.substring(0, 55) + '...'}
                                        </h2>

                                        <p dangerouslySetInnerHTML={ {__html: desc.substring(0, 410) + '...'} } style={{fontSize: '15px', lineHeight: '1.6em'}}>
                                            
                                        </p>
                                  </NewsDesc>
                                </div>


                                <div>

                                  <NewsImage>
                                    <img src={require('../../../img/news-image01.jpg')} style={{width: 'auto', maxHeight: '100%'}}/>
                                  </NewsImage>

                                  <NewsDesc>
                                        <h2 style={{fontSize: '25px', fontWeight: '700', marginBottom: '25px'}} >
                                            {text.substring(0, 55) + '...'}
                                        </h2>

                                        <p dangerouslySetInnerHTML={ {__html: desc.substring(0, 400) + '...'} } style={{fontSize: '14px', lineHeight: '1.6em'}}>
                                            
                                        </p>
                                  </NewsDesc>
                                </div>


                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsSection
