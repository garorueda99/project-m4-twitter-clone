import React, { useContext } from 'react';
import Tweet from '../Tweet';
import TweetDoc from '../TweetDoc';

import { HomeFeedContext } from '../HomeFeedContext';

const HomeFeed = () => {
  const { currentHomeFeed } = useContext(HomeFeedContext);
  let tweetsToPost = [];
  if (currentHomeFeed.tweetIds !== undefined) {
    tweetsToPost = currentHomeFeed.tweetIds.map((id) => id);
    // console.log(tweetsToPost, currentHomeFeed);
  }
  return (
    <>
      <h1>Home</h1>
      <TweetDoc />
      {tweetsToPost.map((id, index) => (
        <Tweet
          key={index}
          id={currentHomeFeed.tweetsById[id].id}
          avatarSrc={currentHomeFeed.tweetsById[id].author.avatarSrc}
          displayName={currentHomeFeed.tweetsById[id].author.displayName}
          handle={currentHomeFeed.tweetsById[id].author.handle}
          timestamp={currentHomeFeed.tweetsById[id].timestamp}
          status={currentHomeFeed.tweetsById[id].status}
          media={currentHomeFeed.tweetsById[id].media[0]}
          retweetFrom={currentHomeFeed.tweetsById[id].retweetFrom}
          isLiked={currentHomeFeed.tweetsById[id].isLiked}
          isRetweeted={currentHomeFeed.tweetsById[id].isRetweeted}
          numLikes={currentHomeFeed.tweetsById[id].numLikes}
          numRetweets={currentHomeFeed.tweetsById[id].numRetweets}
        />
      ))}
    </>
  );
};

export default HomeFeed;
