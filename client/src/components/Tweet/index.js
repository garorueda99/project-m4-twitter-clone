import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import ActionBar from './ActionBar';
import Media from '../Media';
import Retweeted from './Retweeted';
import { useHistory } from 'react-router-dom';

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
  // console.log('props at tweet index liked', props.isLiked, props);
  const history = useHistory();
  return (
    <TweetWrapper tabIndex="0">
      <div
        onClick={() => {
          history.push(`/tweet/${props.id}`);
        }}
      >
        <Retweeted from={retweetedFrom} />
        <Header
          avatarSrc={props.avatarSrc}
          displayName={props.displayName}
          handle={props.handle}
          timestamp={props.timestamp}
          status={props.status}
        />
        <Media type={type} url={url} />
      </div>
      <Divider />
      <ActionBar
        id={props.id}
        isLiked={props.isLiked}
        isRetweeted={props.isRetweeted}
        numLikes={props.numLikes}
        numRetweets={props.numRetweets}
      />
    </TweetWrapper>
  );
};

const TweetWrapper = styled.div`
  border: 1px solid rgb(230, 236, 240);
  padding: 10px;
  :focus {
    outline: #4caf50 solid 2px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

export default Tweet;
