import React from 'react';
import styled from 'styled-components';
import HeaderDetail from './HeaderDetail';
import Media from '../Media';
import ActionBar from '../Tweet/ActionBar';
import moment from 'moment';

const TweetDetails = (props) => {
  props = {
    avatarSrc: '/assets/treasurymog-avatar.jpg',
    displayName: 'Andres',
    handle: 'garo99',
    timestamp: new Date('2019-12-26T14:38:00+00:00'),
    status: 'hi',
  };
  const date = moment(props.timestamp).format('h:mm A • MMM Do YYYY');
  console.log('this is props', props);
  return (
    <TweetWrapper>
      <HeaderDetail
        avatarSrc={props.avatarSrc}
        displayName={props.displayName}
        handle={props.handle}
        timestamp={props.timestamp}
        status={props.status}
      />
      <Status>{props.status}</Status>
      <Media type={'img'} url={props.avatarSrc} />
      <Timestamp>{date}</Timestamp>
      <Divider />
      <ActionBar />
    </TweetWrapper>
  );
};

const TweetWrapper = styled.div`
  border: 1px solid rgb(230, 236, 240);
  padding: 10px;
`;

const Status = styled.div`
  font-size: 2rem;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  padding: 15px 0;
  &::after {
    content: ' • Critter web app';
  }
`;
export default TweetDetails;
