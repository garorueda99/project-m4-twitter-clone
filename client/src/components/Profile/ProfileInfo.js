import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../theme';
import { GrFormLocation } from 'react-icons/gr';
import { AiOutlineCalendar } from 'react-icons/ai';
import moment from 'moment';

const ProfileInfo = ({ data }) => {
  const date = moment(data.joined).format('MMMM YYYY');
  const iconStyle = { marginLeft: '30px', marginRight: '5px' };

  return (
    <DataWrapper>
      <DisplayHandle>{data.handle}</DisplayHandle>
      {data.isFollowingYou && <DisplayFollowsMe>Follows You</DisplayFollowsMe>}
      <DisplayBio>{data.bio}</DisplayBio>
      <DisplayLocationAndStartDate>
        <GrFormLocation size={30} /> {` ${data.location}`}
        <AiOutlineCalendar style={iconStyle} />
        {`Joined: ${date}`}
      </DisplayLocationAndStartDate>
      <WrapperFollowStatus>{`${data.numFollowing} Following ${data.numFollowers} Followers`}</WrapperFollowStatus>
    </DataWrapper>
  );
};

const DataWrapper = styled.div`
  margin-top: 105px;
`;

const DisplayHandle = styled.span`
  margin-top: 5px;
  &&::before {
    content: '@';
  }
`;

const DisplayFollowsMe = styled.span`
  margin-left: 5px;
  font-size: 0.8rem;
  background-color: ${COLORS.secondary};
  padding: 3px 5px;
  border-radius: 5px;
  opacity: 0.5;
`;

const DisplayBio = styled.div`
  margin: 10px 0;
`;

const DisplayLocationAndStartDate = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const WrapperFollowStatus = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
export default ProfileInfo;
