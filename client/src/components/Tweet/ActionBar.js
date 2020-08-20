import React, { useState } from 'react';
import styled from 'styled-components';

import LikeButton from '../LikeButton';
import Action from './Action';
import TweetActionIcon from './TweetActionIcon';

const ActionBar = ({ isLiked, isRetweeted, numLikes, numRetweets, id }) => {
  const [isLikedScreen, setIsLikedScreen] = useState(isLiked);
  const [numOfLikes, setNumOfLikes] = useState(numLikes);
  const [numOfRetweets, setNumOfRetweets] = useState(numRetweets);
  return (
    <Wrapper>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="reply" />
      </Action>
      <Action
        color="rgb(23, 191, 99)"
        size={40}
        // onClick={
        //   // handleToggleRetweet
        // }
      >
        <TweetActionIcon kind="retweet" color={'rgb(23, 191, 99)'} />
        <LikesCount>{numOfRetweets > 0 && numOfRetweets}</LikesCount>
      </Action>
      <Action
        color="rgb(224, 36, 94)"
        size={40}
        onClick={() => {
          setIsLikedScreen(!isLikedScreen);
          isLikedScreen
            ? setNumOfLikes((n) => n - 1)
            : setNumOfLikes((n) => n + 1);
          putTweet(id, !isLikedScreen).catch((err) => console.log(err));
        }}
      >
        <LikeButton isLiked={isLikedScreen} />
        <LikesCount>{numOfLikes > 0 && numOfLikes}</LikesCount>
      </Action>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="share" />
      </Action>
    </Wrapper>
  );
};

const putTweet = async (id, isLiked) => {
  const response = await fetch(`/api/tweet/${id}/like`, {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify({ like: isLiked }),
  });
  return response.json();
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

const LikesCount = styled.div`
  position: absolute;
  font-weight: bolder;
  left: 40px;
`;

export default ActionBar;
