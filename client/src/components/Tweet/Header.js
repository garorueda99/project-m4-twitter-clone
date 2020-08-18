import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

const Header = ({ avatarSrc, displayName, handle, timestamp, status }) => {
  const date = moment(timestamp).format('MMM Do');
  const history = useHistory();
  return (
    <Wrapper>
      <Avatar src={avatarSrc} />
      <WrapperContent>
        <FirstLine>
          <DisplayName
            tabIndex="0"
            onClick={(e) => {
              history.push(`/${handle}`);
              e.stopPropagation();
            }}
          >
            {displayName}
          </DisplayName>
          <Username>@{handle}</Username>
          <Timestamp>{date}</Timestamp>
        </FirstLine>
        <Status>{status}</Status>
      </WrapperContent>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  max-width: 600px;
  height: fit-content;
  margin-bottom: 10px;
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
  &:focus {
    outline: #4caf50 solid 2px;
  }
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

const Status = styled.div`
  max-width: 600px;
  text-align: justify;
  text-justify: inter-word;
  word-wrap: break-word;
`;

export default Header;
