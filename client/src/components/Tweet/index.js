import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import ActionBar from './ActionBar';

const Tweet = (props) => {
  return (
    <>
      <Header
        avatarSrc={props.avatarSrc}
        displayName={props.displayName}
        handle={props.handle}
        timestamp={props.timestamp}
        status={props.status}
      />
      <Divider />
      <ActionBar />
    </>
  );
};

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

export default Tweet;
