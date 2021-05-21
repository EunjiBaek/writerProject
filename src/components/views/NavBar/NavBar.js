import React, { useState, useEffect } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import './Sections/Navbar.css';
import '../common/common.css';
import styled from "styled-components";

const Navmenu = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 85px;
  z-index: 100
`;

function NavBar() {

  const [backgroundColor, setbackgroundColor] = useState("");

  function navBackgroundColor() {
    
    if(document.documentElement.scrollTop === 0){
      setbackgroundColor('')
    }else{
      setbackgroundColor('rgba(0,0,0,0.8)')
    }

  }

  useEffect(() => {
    window.addEventListener("scroll", navBackgroundColor);
    return () => window.removeEventListener('scroll', navBackgroundColor);
  });

  
  return (
    <Navmenu className="gnb" style={{width: "100%", height: "80px", backgroundColor: backgroundColor}}>
      <div className="container">
        <div className="row">
          <LeftMenu />
          <RightMenu />
        </div>
      </div>
    </Navmenu>

  )
}

export default NavBar