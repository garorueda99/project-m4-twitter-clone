import React, { useState } from 'react';
import styled from 'styled-components';

import LikeButton from '../LikeButton';
import Action from './Action';
import TweetActionIcon from './TweetActionIcon';

const ActionBar = ({ isLiked, isRetweeted, numLikes, numRetweets }) => {
  const [isLikedScreen, setIsLikedScreen] = useState(isLiked);
  const [numOfLikes, setNumOfLikes] = useState(numLikes);

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
      </Action>
      <Action
        color="rgb(224, 36, 94)"
        size={40}
        onClick={() => {
          setIsLikedScreen(!isLikedScreen);
          isLikedScreen
            ? setNumOfLikes((n) => n - 1)
            : setNumOfLikes((n) => n + 1);
        }}
      >
        <LikeButton isLiked={isLikedScreen} />
      </Action>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="share" />
      </Action>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

export default ActionBar;
