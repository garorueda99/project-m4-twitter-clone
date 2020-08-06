import React, { useContext } from 'react';
import { HomeFeedContext } from '../HomeFeedContext';

const HomeFeed = () => {
  const { currentHomeFeed } = useContext(HomeFeedContext);
  let tweetsToPost = [];
  if (currentHomeFeed.tweetIds !== undefined) {
    tweetsToPost = currentHomeFeed.tweetIds.map((id) => id);
  }
  return (
    <div>
      {tweetsToPost.map((id) => (
        <div>
          <span>{id}</span>
          {currentHomeFeed.tweetsById[id].status}
          <div>{currentHomeFeed.tweetsById[id].media.type}</div>
        </div>
      ))}
    </div>
  );
  return <div>Homeee Feed</div>;
};

export default HomeFeed;
