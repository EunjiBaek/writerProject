/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from "styled-components";
import Icon from '@ant-design/icons';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";




const List = styled.li`
  display: inline-block;
  color: #ffffff;
  padding: 0 10px;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 600
`;

const Rightmenu = styled.div`
  display: flex;
  align-items: center;
  float: right;
  height: 85px
`;



function RightMenu(props) {

    return (
      <Rightmenu>
        <ul className="rightmenu">
          <List><a href="/login">Signin</a></List>
          <List><a href="/login"><UserOutlined /></a></List>
          <List><a href="/login"><SearchOutlined /></a></List>
        </ul>
      </Rightmenu>

    )
}

export default withRouter(RightMenu);

