import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const HeaderDetail = ({ avatarSrc, displayName, handle, timestamp }) => {
  const history = useHistory();
  return (
    <Wrapper>
      <Avatar src={avatarSrc} />
      <WrapperContent>
        <DisplayName
          onClick={() => {
            history.push(`/${handle}`);
          }}
        >
          {displayName}
        </DisplayName>
        <Username>@{handle}</Username>
      </WrapperContent>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  width: 100%;
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

const DisplayName = styled.div`
  line-height: 20px;
  font-weight: bold;
  margin-right: 5px;
`;

const Username = styled.div`
  line-height: 20px;
  color: rgb(101, 119, 134);
`;

export default HeaderDetail;
