import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const Profile = () => {
  const { profileId } = useParams();
  const [profile, setProfile] = useState(undefined);

  useEffect(() => {
    fetchProfile(profileId).then((profile) => setProfile(profile));
  }, []);
  let heroStyle;
  if (!!profile) {
    heroStyle = { backgroundImage: `url(${profile.bannerSrc})` };
    console.log(heroStyle);
  }
  return (
    <>
      {!!profile && (
        <ProfileWrapper>
          <ProfileHero style={heroStyle} />
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
  height: 250px;
  padding: 10px;
`;

const ProfileHero = styled.div`
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export default Profile;
