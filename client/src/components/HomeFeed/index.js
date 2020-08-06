import React from 'react';
import { HomeFeedProvider } from '../HomeFeedContext';
const HomeFeed = () => {
  return (
    <HomeFeedProvider>
      <div>Home Feed</div>
    </HomeFeedProvider>
  );
};

export default HomeFeed;
