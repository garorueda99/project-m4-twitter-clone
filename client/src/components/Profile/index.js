import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProfileInfo from './ProfileInfo';

const Profile = () => {
  const { profileId } = useParams();
  const [profile, setProfile] = useState(undefined);

  useEffect(() => {
    fetchProfile(profileId).then((profile) => setProfile(profile));
  }, []);
  let heroStyle;
  if (!!profile) {
    heroStyle = { backgroundImage: `url(${profile.bannerSrc})` };
  }
  return (
    <>
      {!!profile && (
        <ProfileWrapper>
          <ProfileHero style={heroStyle}>
            <AvatarImage src={profile.avatarSrc} />
          </ProfileHero>
          <InfoWrapper />
          <ProfileInfo data={profile} />
        </ProfileWrapper>
      )}
    </>
  );
};

const fetchProfile = async (profileId) => {
  try {
    const data = await fetch(`/api/${profileId}/profile`);
    const { profile: profileInfo } = await data.json();
    return profileInfo;
  } catch (err) {
    console.log('first attempt failed');
    try {
      const data = await fetch(`/api/${profileId}/profile`);
      const { profile: profileInfo } = await data.json();
      return profileInfo;
    } catch (err) {
      console.log('Second attempt failed', err);
      //Error handling here!
    }
  }
};

const ProfileWrapper = styled.div`
  border: 1px solid rgb(230, 236, 240);
  padding: 10px;
`;

const ProfileHero = styled.div`
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const AvatarImage = styled.img`
  height: 150px;
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  top: 175px;
  left: 10px;
`;

const InfoWrapper = styled.div``;

export default Profile;
