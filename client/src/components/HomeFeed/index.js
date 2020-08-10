import React, { useContext } from 'react';
import Tweet from '../Tweet';
import TweetDoc from '../TweetDoc';

import { HomeFeedContext } from '../HomeFeedContext';

const HomeFeed = () => {
  const { currentHomeFeed } = useContext(HomeFeedContext);
  let tweetsToPost = [];
  if (currentHomeFeed.tweetIds !== undefined) {
    tweetsToPost = currentHomeFeed.tweetIds.map((id) => id);
  }
  return (
    <>
      <h1>Home</h1>
      <TweetDoc />
      {tweetsToPost.map((id, index) => (
        <Tweet
          key={index}
          avatarSrc={currentHomeFeed.tweetsById[id].author.avatarSrc}
          displayName={currentHomeFeed.tweetsById[id].author.displayName}
          handle={currentHomeFeed.tweetsById[id].author.handle}
          timestamp={currentHomeFeed.tweetsById[id].timestamp}
          status={currentHomeFeed.tweetsById[id].status}
          media={currentHomeFeed.tweetsById[id].media[0]}
          retweetFrom={currentHomeFeed.tweetsById[id].retweetFrom}
        />
      ))}
    </>
  );
};

export default HomeFeed;
