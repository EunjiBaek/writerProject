import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import styled from "styled-components";
import './LandingPage.css';
import SlideBanner from './Sections/SlideBanner';
import NewsSection from './Sections/NewsSection';
import WriterSection from './Sections/WriterSection';



function LandingPage() {

    return (
        <>
            <div className="landingPage">
                <SlideBanner />
                <NewsSection />
                <WriterSection />
            </div>
        </>
    )
}

export default LandingPage
