import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import ActionBar from './ActionBar';
import Media from './Media';

const Tweet = (props) => {
  // console.log(props.media.url);
  return (
    <TweetWrapper>
      <Header
        avatarSrc={props.avatarSrc}
        displayName={props.displayName}
        handle={props.handle}
        timestamp={props.timestamp}
        status={props.status}
      />
      {/* <Media xtype={props.media.type} xurl={props.media.url} /> */}
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
