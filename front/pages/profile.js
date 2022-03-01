import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import axios from 'axios';
import { END } from 'redux-saga';
import useSWR from 'swr';
import { Avatar, Card } from 'antd';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';
import NickNameEditForm from '../components/NickNameEditForm';
import FollowList from '../components/FollowList';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import { LOAD_POST_REQUEST } from '../reducers/post';
import { backUrl } from '../config/config';

const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);

function Profile() {
  const { me } = useSelector((state) => state.user);
  const [followersLimit, setFollowersLimit] = useState(3);
  const [followingsLimit, setFollowingsLimit] = useState(3);

  const { data: followersData, error: followerError } = useSWR(`${backUrl}/user/followers?limit=${followersLimit}`, fetcher);
  const { data: followingsData, error: followingError } = useSWR(`${backUrl}/user/followings?limit=${followingsLimit}`, fetcher);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);

  const loadMoreFollowings = useCallback(() => {
    setFollowingsLimit((prev) => prev + 3);
  }, []);

  const loadMoreFollowers = useCallback(() => {
    setFollowersLimit((prev) => prev + 3);
  }, []);

  if (!me) {
    return '내 정보 로딩중...';
  }

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return '팔로잉/팔로워 로딩 중 에러가 발생했습니다.';
  }

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_FOLLOWERS_REQUEST,
  //   });
  //   dispatch({
  //     type: LOAD_FOLLOWINGS_REQUEST,
  //   });
  // }, []);

  return (
    <>
      <Head>
        <title>내 프로필 | Thewitter</title>
      </Head>
      <AppLayout>
        <Card
          style={{ marginBottom: 30 }}
          actions={[
            <Link href={`/user/${me.id}`}>
              <div key="twit">
                더윗
                <br />
                {me.Posts.length}
              </div>
            </Link>,
            <div key="following">
              팔로잉
              <br />
              {me.Followings.length}
            </div>,
            <div key="follower">
              팔로워
              <br />
              {me.Followers.length}
            </div>,
          ]}
        >
          <Card.Meta
            avatar={<Avatar>{me.nickname[0]}</Avatar>}
            title={me.nickname}
          />
        </Card>
        <NickNameEditForm />
        <FollowList header="팔로잉" data={followingsData} onClickMore={loadMoreFollowings} loading={!followingsData && !followingError} />
        <FollowList header="팔로워" data={followersData} onClickMore={loadMoreFollowers} loading={!followersData && !followerError} />
      </AppLayout>
    </>
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
  // context.store.dispatch({
  //   type: LOAD_POST_REQUEST,
  // });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Profile;
