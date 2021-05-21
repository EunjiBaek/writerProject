import React from 'react';
import styled from "styled-components";


const List = styled.li`
  display: inline-block;
  color: #ffffff;
  padding: 0 25px;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 600
`;

const Leftmenu = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  max-width: 300px;
  float: left;
`;

function LeftMenu(props) {
  return (
    <Leftmenu className="LeftMenu">
      <div className="hambuger" style={{width: "50px", height:"50px", borderRadius: "60px", backgroundColor: "#ffffff", display:'flex', alignItems:'center', justifyContent:'center', marginRight: "30px", cursor: 'pointer'}}>
        <span style={{color: "#000000", fontSize: "32px", fontFamily: 'Montserrat', fontWeight: '700'}}>K</span>
      </div>

      <ul>
        <List><a href="/artist" style={{color:"#ffffff", display: 'block'}}>Artist</a></List>
        <List><a href="/shop" style={{color:"#ffffff", display: 'block'}}>Shop</a></List>
      </ul>
    </Leftmenu>
  )
}

export default LeftMenu