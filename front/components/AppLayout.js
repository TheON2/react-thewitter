import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { Menu, Input, Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import useInput from '../hooks/useInput';
import icon1 from '../public/favicon.png';
import icon2 from '../public/home2.png';
import icon3 from '../public/search.png';
import icon4 from '../public/bookmark.png';
import icon5 from '../public/clipboard.png';
import icon6 from '../public/user.png';
import icon7 from '../public/bell.png';
import icon8 from '../public/email.png';
import icon9 from '../public/more.png';
import icon10 from '../public/logout.png';
import { logoutRequestAction } from '../reducers/user';

const SidebarImg = styled.img`
  width: 40px;
  role: presantation;
`;

const SidebarUl = styled.ul`
  list-style-type: none;
  line-height: 1;
  color:black;
`;

const SidebarLi = styled.li`
  cursor: pointer;
  transition: all 0.25s ease;
  line-height: 70px;
  :hover {
    transform: scale(1.3, 1.3);
  }
  color:black;
`;

const SidebarDiv = styled.div`
  left: 0px;
  border-radius: 2rem;
  color: black;
  width: 300px;
  height: 1500px;
  font-weight: bold;
  line-height: 250%;
`;

const LeftSidebar = styled.div` 
  position: fixed;
  float: left;
  top: 0px;
  left: 10%;
  width: 200px;
  height: 1000px;
  background: #f3f5fa15;
  padding: 0px 0;
  overflow: hidden;
  color: black;
  font-size: 20px;
  z-index: 10;
`;

const Navbar = styled.div` 
  position: fixed;
  float: left;
  top: 0px;
  left: 29%;
  width: 1800px;
  background: #f3f5fa15;
  padding: 0px 0;
  overflow: hidden;
  color: black;
  font-size: 20px;
  z-index: 10;
`;

const RightSidebar = styled.div` 
  position: fixed;
  float: left;
  top: 10px;
  right: 200px;
  background: #f3f5fa15;
  padding: 0px 0;
  overflow: hidden;
  color: black;
  font-size: 20px;
  z-index: 10;
`;

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

function AppLayout({ children }) {
  const [searchInput, onChangeSearchInput] = useInput('');
  const { me, logOutLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  // const const {isLoggedIn} = useSelector((state)=>state.user);
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <Navbar>
          <Menu mode="horizontal">
            <Menu.Item>
              <Link href="/">
                <a><h2>홈</h2></a>
              </Link>
            </Menu.Item>

            {/* <Menu.Item> */}
            {/*  <Link href="/signup"> */}
            {/*    <a>회원가입</a> */}
            {/*  </Link> */}
            {/* </Menu.Item> */}
          </Menu>
        </Navbar>
        <div>
          <LeftSidebar>
            <SidebarDiv>
              <SidebarUl>
                <Link href="/">
                  <SidebarLi>
                    <SidebarImg src={icon1} />
                  </SidebarLi>
                </Link>
                <Link href="/">
                  <SidebarLi>
                    <SidebarImg src={icon2} /><a> 홈</a>
                  </SidebarLi>
                </Link>
                <Link href="/related">
                  <SidebarLi>
                    <SidebarImg src={icon3} /><a> 탐색하기</a>
                  </SidebarLi>
                </Link>
                {/* <Link href={`/liked/${me.id}`}> */}
                {/* <SidebarLi> */}
                {/*   <SidebarImg src={icon4} /><a> 북마크</a> */}
                {/* </SidebarLi> */}
                {/* </Link> */}
                {/* 이부분이 버그가 생기고 있어 회원가입이 터져서 일단 비활성화 했습니다. */}
                <Link href="/list">
                  <SidebarLi>
                    <SidebarImg src={icon5} /><a> 리스트</a>
                  </SidebarLi>
                </Link>
                <Link href="/profile">
                  <SidebarLi>
                    <SidebarImg src={icon6} /><a> 프로필</a>
                  </SidebarLi>
                </Link>
                <Link href="/">
                  <SidebarLi>
                    <SidebarImg src={icon7} /><a> 알림</a>
                  </SidebarLi>
                </Link>
                <Link href="/">
                  <SidebarLi>
                    <SidebarImg src={icon8} /><a> 쪽지</a>
                  </SidebarLi>
                </Link>
                <Link href="/">
                  <SidebarLi>
                    <SidebarImg src={icon9} /><a> 더보기</a>
                  </SidebarLi>
                </Link>
                <SidebarLi>
                  <p><br /></p>
                </SidebarLi>
                <div onClick={onLogOut}>
                  <SidebarLi>
                    <SidebarImg src={icon10} /><a> 로그아웃</a>
                  </SidebarLi>
                </div>
              </SidebarUl>
            </SidebarDiv>
          </LeftSidebar>
        </div>
        <div>
          <RightSidebar>
            <SearchInput
              enterButton
              value={searchInput}
              onChange={onChangeSearchInput}
              onSearch={onSearch}
            />
          </RightSidebar>
        </div>
      </div>
      <div style={{ marginTop: 100, zIndex: 5 }}>
        <Row gutter={8}>
          <Col xs={24} md={7} />
          <Col xs={24} md={11}>
            {children}
          </Col>
          <Col xs={24} md={6} />
        </Row>
      </div>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
