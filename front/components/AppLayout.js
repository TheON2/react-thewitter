import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { Menu, Input, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import useInput from '../hooks/useInput';
import Router from 'next/router';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

function AppLayout({ children }) {
  const [searchInput, onChangeSearchInput] = useInput('');
  const { me } = useSelector((state) => state.user);

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  // const const {isLoggedIn} = useSelector((state)=>state.user);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput
            enterButton
            value={searchInput}
            onChange={onChangeSearchInput}
            onSearch={onSearch}
          />
        </Menu.Item>
        {/*<Menu.Item>*/}
        {/*  <Link href="/signup">*/}
        {/*    <a>회원가입</a>*/}
        {/*  </Link>*/}
        {/*</Menu.Item>*/}
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? (
            <UserProfile />

          ) : (
            <LoginForm />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://github.com/TheON2"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by TheON2
          </a>
        </Col>
      </Row>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
