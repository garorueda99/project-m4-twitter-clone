import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HeaderDetail from './HeaderDetail';
import Media from '../Media';
import ActionBar from '../Tweet/ActionBar';
import moment from 'moment';
import { FiArrowLeft } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import Retweeted from '../Tweet/Retweeted';

const TweetDetails = () => {
  const { tweetId } = useParams();

  const [response, setResponse] = useState(undefined);
  useEffect(() => {
    fetchTweet(tweetId).then((tweet) => setResponse(tweet));
  }, [tweetId]);

  let date,
    mediaUrl,
    retweetedFrom = undefined;
  if (!!response) {
    date = moment(response.timestamp).format('h:mm A • MMM Do YYYY');
    if (response.tweet.retweetFrom !== undefined) {
      retweetedFrom = response.tweet.retweetFrom.displayName;
    }
    if (response.tweet.media.length > 0) {
      mediaUrl = response.tweet.media[0].url;
      // console.log(mediaUrl);
    }
  }
  const iconStyle = { marginRight: '10px' };
  return (
    <TweetWrapper>
      <TopHeader>
        <FiArrowLeft style={iconStyle} />
        Meow
      </TopHeader>
      <Divider />
      {!!response && (
        <>
          <Retweeted from={retweetedFrom} />
          <HeaderDetail
            avatarSrc={response.tweet.author.avatarSrc}
            displayName={response.tweet.author.displayName}
            handle={response.tweet.author.handle}
            timestamp={response.tweet.timestamp}
          />

          <Status>{response.tweet.status}</Status>
          <Media url={mediaUrl} />
          <Timestamp>{date}</Timestamp>
          <Divider />
          <ActionBar
            id={response.tweet.id}
            isLiked={response.tweet.isLiked}
            isRetweeted={response.tweet.isRetweeted}
            numLikes={response.tweet.numLikes}
            numRetweets={response.tweet.numRetweets}
          />
        </>
      )}
    </TweetWrapper>
  );
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

const TopHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
`;

const TweetWrapper = styled.div`
  border: 1px solid rgb(230, 236, 240);
  padding: 10px;
`;

const Status = styled.div`
  font-size: 2rem;
  max-width: 600px;
  /* text-align: justify; */
  /* text-justify: inter-word; */
  word-wrap: break-word;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
  margin: 10px 0;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  padding: 15px 0;
  &::after {
    content: ' • Critter web app';
  }
`;

export default TweetDetails;
