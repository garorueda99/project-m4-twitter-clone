import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProfileInfo from './ProfileInfo';
import Tweet from '../Tweet';
import TweetHorizontalBar from '../TweetHorizontalBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Profile = () => {
  const { profileId } = useParams();
  const [profile, setProfile] = useState(undefined);
  const [tweetsToPost, setTweetsToPost] = useState([]);

  useEffect(() => {
    fetchProfile(profileId).then((profile) => setProfile(profile));
    fetchTweets(profileId).then((dataTweets) => setTweetsToPost(dataTweets));
  }, [profileId]);

  let heroStyle;
  if (!!profile) {
    heroStyle = { backgroundImage: `url(${profile.bannerSrc})` };
  }
  return (
    <>
      {!!profile && (
<<<<<<< HEAD
        <Router>
          {/* <Switch> */}
          {/* <Route path={`/${profileId}`}> */}
=======
        // <Router>
        <>
>>>>>>> ba5030f9876d312111b275b780770b53c80fe592
          <ProfileWrapper>
            <ProfileHero style={heroStyle}>
              <AvatarImage src={profile.avatarSrc} />
            </ProfileHero>
            <InfoWrapper />
            <ProfileInfo data={profile} />
          </ProfileWrapper>
          <TweetHorizontalBar handle={profileId} />
<<<<<<< HEAD
          {!!tweetsToPost.tweetIds &&
            tweetsToPost.tweetIds.map((id, index) => (
              <Tweet
                key={index}
                id={tweetsToPost.tweetsById[id].id}
                avatarSrc={tweetsToPost.tweetsById[id].author.avatarSrc}
                displayName={tweetsToPost.tweetsById[id].author.displayName}
                handle={tweetsToPost.tweetsById[id].author.handle}
                timestamp={tweetsToPost.tweetsById[id].timestamp}
                status={tweetsToPost.tweetsById[id].status}
                media={tweetsToPost.tweetsById[id].media[0]}
                retweetFrom={tweetsToPost.tweetsById[id].retweetFrom}
                isLiked={tweetsToPost.tweetsById[id].isLiked}
                isRetweeted={tweetsToPost.tweetsById[id].isRetweeted}
                numLikes={tweetsToPost.tweetsById[id].numLikes}
                numRetweets={tweetsToPost.tweetsById[id].numRetweets}
              />
            ))}
          {/* </Route> */}
          {/* </Switch> */}
        </Router>
=======
          <Switch>
            <Route exact path={`/:profileId`}>
              {!!tweetsToPost.tweetIds &&
                tweetsToPost.tweetIds.map((id, index) => (
                  <Tweet
                    key={index}
                    id={tweetsToPost.tweetsById[id].id}
                    avatarSrc={tweetsToPost.tweetsById[id].author.avatarSrc}
                    displayName={tweetsToPost.tweetsById[id].author.displayName}
                    handle={tweetsToPost.tweetsById[id].author.handle}
                    timestamp={tweetsToPost.tweetsById[id].timestamp}
                    status={tweetsToPost.tweetsById[id].status}
                    media={tweetsToPost.tweetsById[id].media[0]}
                    retweetFrom={tweetsToPost.tweetsById[id].retweetFrom}
                    isLiked={tweetsToPost.tweetsById[id].isLiked}
                    isRetweeted={tweetsToPost.tweetsById[id].isRetweeted}
                    numLikes={tweetsToPost.tweetsById[id].numLikes}
                    numRetweets={tweetsToPost.tweetsById[id].numRetweets}
                  />
                ))}
            </Route>
            <Route exact path={`/:profileId/media`}>
              {' '}
              Media page{' '}
            </Route>
            <Route exact path={`/:profileId/likes`}>
              {' '}
              Likes page{' '}
            </Route>
          </Switch>
          {/* // </Router> */}
        </>
>>>>>>> ba5030f9876d312111b275b780770b53c80fe592
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

const fetchTweets = async (profileId) => {
  try {
    const data = await fetch(`/api/${profileId}/feed`);
    const dataTweets = await data.json();
    return dataTweets;
  } catch (err) {
    console.log('first attempt failed');
    try {
      const data = await fetch(`/api/${profileId}/feed`);
      const dataTweets = await data.json();
      return dataTweets;
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
