import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../theme';
import { GrFormLocation } from 'react-icons/gr';
import { AiOutlineCalendar } from 'react-icons/ai';
import moment from 'moment';

const ProfileInfo = ({ data }) => {
<<<<<<< HEAD
  const date = moment(data.joined).format('MMMM YYYY');
  const iconStyle = { marginLeft: '30px', marginRight: '5px' };

=======
  // const date = moment(data.joined).format('MMMM YYYY');
  // const iconStyle = { marginLeft: '30px', marginRight: '5px' };
>>>>>>> c4abfbae721d9fc83bb8197bb24304e101b73c44
  return (
    <DataWrapper>
      {/* <DisplayName>{data.displayName}</DisplayName>
      <DisplayHandle>{data.handle}</DisplayHandle>
      {data.isFollowingYou && <DisplayFollowsMe>Follows You</DisplayFollowsMe>}
      <DisplayBio>{data.bio}</DisplayBio>
      <DisplayLocationAndStartDate>
        <GrFormLocation size={30} /> {` ${data.location}`}
        <AiOutlineCalendar style={iconStyle} />
        {`Joined: ${date}`}
      </DisplayLocationAndStartDate>
<<<<<<< HEAD
      <WrapperFollowStatus>{`${data.numFollowing} Following ${data.numFollowers} Followers`}</WrapperFollowStatus>
=======
      <WrapperFollowStatus>{`${data.numFollowing}Following ${data.numFollowers} Followers`}</WrapperFollowStatus> */}
>>>>>>> c4abfbae721d9fc83bb8197bb24304e101b73c44
    </DataWrapper>
  );
};

const DataWrapper = styled.div`
  margin-top: 105px;
`;
const DisplayName = styled.div`
  font-weight: bolder;
  font-size: 1.2rem;
  margin-bottom: 4px;
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
