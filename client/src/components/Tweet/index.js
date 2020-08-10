import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import ActionBar from './ActionBar';
import Media from '../Media';
import Retweeted from './Retweeted';

const Tweet = (props) => {
  let type = undefined;
  let url = undefined;
  if (props.media !== undefined) {
    type = props.media.type;
    url = props.media.url;
  }

  let retweetedFrom = undefined;
  if (props.retweetFrom !== undefined) {
    retweetedFrom = props.retweetFrom.displayName;
  }
  // console.log('props at tweet index', props.retweetFrom);
  return (
    <TweetWrapper>
      <Retweeted from={retweetedFrom} />
      <Header
        avatarSrc={props.avatarSrc}
        displayName={props.displayName}
        handle={props.handle}
        timestamp={props.timestamp}
        status={props.status}
      />
      <Media type={type} url={url} />
      <Divider />
      <ActionBar />
    </TweetWrapper>
  );
};

const TweetWrapper = styled.div`
  border: 1px solid rgb(230, 236, 240);
  padding: 10px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

export default Tweet;
