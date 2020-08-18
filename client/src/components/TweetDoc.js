import React, { useContext, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { COLORS } from '../theme';
import { CurrentUserContext } from './CurrentUserContext';
import { HomeFeedContext } from './HomeFeedContext';

const TweetDoc = () => {
  const [status, setStatus] = useState('');
  const { currentUser } = useContext(CurrentUserContext);
  const { currentHomeFeed, setCurrentHomeFeed } = useContext(HomeFeedContext);
  const meowButtonRef = useRef();
  const textScreen = useRef();
  const countScreen = useRef();

  useEffect(() => {
    if (status.length < 0 || status.length === 280) {
      meowButtonRef.current.disabled = true;
      meowButtonRef.current.style.background = COLORS.secondary;
    } else {
      meowButtonRef.current.disabled = false;
      meowButtonRef.current.style.background = COLORS.primary;
    }
    switch (true) {
      case status.length > 280:
        countScreen.current.style.color = 'red';
        break;
      case status.length > 225:
        countScreen.current.style.color = 'yellow';
        countScreen.current.style.backgroundColor = COLORS.secondary;
        countScreen.current.style.padding = '5px 6px';
        countScreen.current.style.borderRadius = '15px';
        break;
      default:
        countScreen.current.style.color = 'black';
        countScreen.current.style.backgroundColor = 'transparent';
        countScreen.current.style.padding = '5px 6px';
        countScreen.current.style.borderRadius = '15px';
    }
  }, [status]);
  return (
    <DocWrapper>
      <WritingField>
        <Avatar src={currentUser.profile.avatarSrc} />
        <InputText
          ref={textScreen}
          name={'TweetText'}
          placeholder={'What is happening?'}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        ></InputText>
      </WritingField>
      <InfoBar>
        <MeowCount ref={countScreen}>{280 - status.length}</MeowCount>
        <MeowButton
          ref={meowButtonRef}
          onClick={() =>
            postStatus({ status: status }).then(({ tweet }) => {
              // console.log('POSTED: ', tweet);
              const newTweetIds = [tweet['id'], ...currentHomeFeed.tweetIds];
              fetchTweet(tweet.id).then((data) => {
                let newTweetsById = {};
                newTweetsById[tweet.id] = data.tweet;
                newTweetsById = {
                  ...newTweetsById,
                  ...currentHomeFeed.tweetsById,
                };
                const newResponse = {
                  tweetsById: newTweetsById,
                  tweetIds: newTweetIds,
                };

                textScreen.current.value = '';
                setCurrentHomeFeed(newResponse);

                // newResponse.tweetIds = newTweetIds;
                // newResponse = { ...newResponse, ...newTweetsById };
                // console.log(newResponse);
                // setCurrentHomeFeed({
                //   ...newTweetsById,
                //   ...currentHomeFeed.tweetsById,
                // });
              });
            })
          }
        >
          Meow
        </MeowButton>
      </InfoBar>
    </DocWrapper>
  );
};

const postStatus = async (status) => {
  const response = await fetch('api/tweet', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify(status),
  });
  return response.json();
};

const fetchTweet = async (tweetId) => {
  try {
    const data = await fetch(`/api/tweet/${tweetId}`);
    const tweetInfo = await data.json();
    return tweetInfo;
  } catch (err) {
    console.log('first attempt failed');
    try {
      const data = await fetch(`/api/tweet/${tweetId}`);
      const tweetInfo = await data.json();
      return tweetInfo;
    } catch (err) {
      console.log('Second attempt failed', err);
      //Error handling here!
    }
  }
};

const DocWrapper = styled.div`
  border: 1px solid ${COLORS.line};
  height: 280px;
  padding: 10px;
  border-bottom: 4px solid ${COLORS.line};
`;

const WritingField = styled.div`
  display: flex;
  height: 200px;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const InfoBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const InputText = styled.textarea`
  margin-left: 5px;
  flex: 1;
  border: none;
  outline: none;
  text-align: top;
`;

const MeowButton = styled.button`
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  appearance: none;
  background: ${COLORS.primary};
  border: none;
  color: white;
  border-radius: 2em;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  z-index: 1;
  box-shadow: 0 0 1em rgba(white, 0.2);
  outline: none;
  width: 100px;
  font-weight: bolder;
`;

const MeowCount = styled.div`
  margin-right: 15px;
`;

export default TweetDoc;
