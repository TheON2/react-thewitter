import { Card } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { useEffect } from 'react';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { END } from 'redux-saga';
import { LOAD_MY_INFO_REQUEST, LOAD_USERS_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import AppLayout from '../components/AppLayout';

function List() {
  const style = {
    borderRadius: '2rem',
    marginBottom: '20px',
  };
  const dispatch = useDispatch();
  const { me, usersInfo } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch({
      type: LOAD_USERS_REQUEST,
    });
  }, []);
  return (
    <AppLayout>
      {usersInfo.map((c) => (
        <Link href={`/user/${c.id}`} prefetch={false}>
          <Card style={style}>
            <Card.Meta
              avatar={(

                <a><Avatar>{c.nickname[0]}</Avatar></a>

        )}
              title={c.nickname}
            />
            <br />
          </Card>
        </Link>
      ))}
    </AppLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = cookie;
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) { // 타 유저간 쿠키가 공유되는 문제를 방지하기 위함
    axios.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_USERS_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default List;
