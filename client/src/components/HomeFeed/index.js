import React, { useContext } from 'react';
import { HomeFeedContext } from '../HomeFeedContext';

const HomeFeed = () => {
  const { currentHomeFeed } = useContext(HomeFeedContext);
  let tweetsToPost = [];
  if (currentHomeFeed.tweetIds !== undefined) {
    tweetsToPost = currentHomeFeed.tweetIds.map((id) => id);
    tweetsToPost.map((id) => console.log(id));
  }
  return (
    <div>
      {tweetsToPost.map((id) => (
        <div>{id}</div>
      ))}
    </div>
  );
  return <div>Homeee Feed</div>;
};

export default HomeFeed;
