import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Header = ({ avatarSrc, displayName, handle, timestamp, status }) => {
  const date = moment(timestamp).format('MMM Do');
  return (
    <Wrapper>
      <Avatar src={avatarSrc} />
      <WrapperContent>
        <FirstLine>
          <DisplayName>{displayName}</DisplayName>
          <Username>@{handle}</Username>
          <Timestamp>{date}</Timestamp>
        </FirstLine>
        <div>{status}</div>
      </WrapperContent>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  height: fit-content;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const WrapperContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 16px;
`;

const FirstLine = styled.div`
  font-size: 15px;
  display: flex;
`;

const DisplayName = styled.div`
  line-height: 20px;
  font-weight: bold;
  margin-right: 5px;
`;

const Username = styled.div`
  line-height: 20px;
  color: rgb(101, 119, 134);
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  ::before {
    content: '•';
    margin: 0 5px;
  }
`;

export default Header;
